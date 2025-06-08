import { useState, useEffect } from "react";
import { CheckCircle, Circle, Trophy, Users, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useContestStore } from "../store/useContestStore";
import { useAuthStore } from "../store/useAuthStore";
import ContestLoading from "../components/ContestLoading";
const ContestDetailPage = () => {
  const { id } = useParams();
  const { authUser } = useAuthStore();
  const {
    isLoading,
    currentContest,
    getContestDetails,
    contestSolvedProblems,
    contestSummary,
    getContestProblemSolvedUser,
    getContestSummaryStats,
  } = useContestStore();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    getContestDetails(id);
    getContestProblemSolvedUser(id, authUser.id);
    getContestSummaryStats(id);
  }, [getContestDetails, getContestProblemSolvedUser, getContestSummaryStats]);

  useEffect(() => {
    if (!currentContest) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const end = new Date(currentContest.endTime).getTime();
      const remaining = Math.max(0, end - now);
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentContest]);
  const formatTimeLeft = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const getDifficultyColor = (difficulty) => {
    const level = difficulty?.toUpperCase();
    if (level === "EASY")
      return "bg-green-500/20 text-green-400 border-green-500/30";
    if (level === "MEDIUM")
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    if (level === "HARD") return "bg-red-500/20 text-red-400 border-red-500/30";
    return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  if (isLoading || currentContest === null) {
    return <ContestLoading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          {/* Contest Header */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {currentContest.title}
                </h1>
                <p className="text-gray-400">{currentContest.description}</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center min-w-[200px]">
                <div className="text-sm text-gray-400 mb-1">Time Remaining</div>
                <div
                  className={`text-3xl font-bold ${
                    timeLeft > 0 ? "text-red-400" : "text-gray-400"
                  }`}
                >
                  {timeLeft > 0 ? formatTimeLeft(timeLeft) : "00:00:00"}
                </div>
                {timeLeft === 0 && (
                  <div className="text-sm text-gray-400 mt-1">
                    Contest Ended
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white">
                {contestSolvedProblems?.length}
              </div>
              <div className="text-sm text-gray-400">Problems Solved</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white">
                {contestSummary?.totalSubmissions}
              </div>
              <div className="text-sm text-gray-400">Total Submissions</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white">
                {contestSummary?.totalProblems}
              </div>
              <div className="text-sm text-gray-400">Total Problems</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white">
                {currentContest.registrations.length || "-"}
              </div>
              <div className="text-sm text-gray-400">Participants</div>
            </div>
          </div>

          {/* Problems List */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">
                Contest Problems
              </h2>
            </div>

            <div className="divide-y divide-gray-700">
              {/* Table */}

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-gray-800/80">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                        Solved
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                        Title
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                        Tags
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                        Companies
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">
                        Difficulty
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {currentContest.problems.length > 0 ? (
                      currentContest.problems.map((item) => {
                        const problem = item.problem;

                        const isSolved = contestSolvedProblems.includes(
                          problem.id
                        );

                        return (
                          <tr
                            key={problem.id}
                            className="hover:bg-gray-800/50 transition-colors"
                          >
                            <td className="px-6 py-4">
                              {isSolved ? (
                                <CheckCircle className="h-6 w-6 text-green-500" />
                              ) : (
                                <Circle className="h-6 w-6 text-gray-500" />
                              )}
                            </td>

                            <td className="px-6 py-4">
                              <Link
                                to={`/contest/${currentContest.id}/${problem.id}`}
                                className="text-white hover:text-indigo-400 transition-colors font-medium"
                              >
                                {problem.title}
                              </Link>
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-2">
                                {(problem.tags || []).map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs"
                                  >
                                    {tag.toUpperCase()}
                                  </span>
                                ))}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex flex-wrap gap-2">
                                {(problem.companies || []).map(
                                  (company, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs"
                                    >
                                      {company.toUpperCase()}
                                    </span>
                                  )
                                )}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded text-xs font-medium ${getDifficultyColor(
                                  problem.difficulty
                                )}`}
                              >
                                {problem.difficulty}
                              </span>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="text-center py-6 text-gray-500"
                        >
                          No problems found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetailPage;
