import React, { useEffect, useState, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useContestStore } from "../store/useContestStore";
import { Calendar, Clock, Users, Trophy, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import ContestsLoading from "./ContestsLoading";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const ContestList = () => {
  const socket = useContext(SocketContext);
  const { authUser } = useAuthStore();
  const navigate = useNavigate();
  const {
    isLoading,
    contests,
    getAllContests,
    updateContestStatus,
    registerContest,
  } = useContestStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [registeredContests, setRegisteredContests] = useState([]);

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    getAllContests();
  }, [getAllContests]);

  useEffect(() => {
    if (Array.isArray(contests)) {
      const alreadyRegistered = contests
        .filter((c) => c.registered)
        .map((c) => c.id);
      setRegisteredContests(alreadyRegistered);
    }
  }, [contests]);

  useEffect(() => {
    socket.on("contestStarted", ({ contestId }) => {
      updateContestStatus(contestId, "live");
    });
    socket.on("contestEnded", ({ contestId }) => {
      updateContestStatus(contestId, "ended");
    });
    return () => {
      socket.off("contestStarted");
      socket.off("contestEnded");
    };
  }, [socket, updateContestStatus]);

  const getContestStatus = (contest) => {
    if (!contest.startTime || !contest.endTime) {
      return { status: "registration", timeLeft: 0 };
    }
    const now = currentTime.getTime();
    const start = new Date(contest.startTime).getTime();
    const end = new Date(contest.endTime).getTime();

    if (now < start) {
      return { status: "upcoming", timeLeft: start - now };
    } else if (now >= start && now <= end) {
      return { status: "live", timeLeft: end - now };
    } else {
      return { status: "ended", timeLeft: 0 };
    }
  };

  const formatTimeLeft = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
    return `${minutes}m ${seconds}s`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "EASY":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "MEDIUM":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "HARD":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const handleRegister = (contestId) => {
    const updatedContests = contests.map((contest) => {
      if (contest.id === contestId) {
        return {
          ...contest,
          registrations: [
            ...contest.registrations,
            { userId: authUser.id, username: authUser.username },
          ],
        };
      }
      return contest;
    });

    useContestStore.setState({ contests: updatedContests });

    registerContest(contestId);
  };

  const navigateToContest = (contestId) => {
    navigate(`/contest/${contestId}`);
  };

  if (isLoading || !Array.isArray(contests)) {
    return <ContestsLoading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Coding{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Contests
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Compete with developers worldwide and showcase your skills
            </p>
          </div>

          {/* Contest Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contests.map((contest) => {
              const { status, timeLeft } = getContestStatus(contest);
              const isRegistered = contest.registrations.some(
                (reg) => reg.userId === authUser.id
              );

              return (
                <div
                  key={contest.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Contest Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {contest.title}
                      </h2>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        status === "live"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse"
                          : status === "upcoming"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                      }`}
                    >
                      {status === "live"
                        ? "LIVE"
                        : status === "upcoming"
                        ? "UPCOMING"
                        : "ENDED"}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{contest.description}</p>

                  {/* Contest Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {contest.startTime
                          ? new Date(contest.startTime).toLocaleDateString()
                          : "—"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>
                        {contest.endTime
                          ? `${Math.floor(
                              (new Date(contest.endTime).getTime() -
                                new Date(contest.startTime).getTime()) /
                                60000
                            )} minutes`
                          : "—"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>
                        {contest.problems.length.toLocaleString()} problems
                      </span>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      {status === "ended" ? (
                        <div className="text-gray-400 font-medium">
                          Contest Ended
                        </div>
                      ) : (
                        <>
                          <div className="text-sm text-gray-400 mb-1">
                            {status === "live" ? "Time Remaining" : "Starts In"}
                          </div>
                          <div
                            className={`text-2xl font-bold ${
                              status === "live"
                                ? "text-red-400"
                                : "text-blue-400"
                            }`}
                          >
                            {formatTimeLeft(timeLeft)}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    {status === "ended" ? (
                      <button className="btn btn-disabled w-full" disabled>
                        Contest Ended
                      </button>
                    ) : isRegistered ? (
                      <button
                        onClick={() => navigateToContest(contest.id)}
                        className="btn bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none w-full hover:scale-105 transition-transform flex items-center justify-center"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Go to Contest
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegister(contest.id)}
                        className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none w-full hover:scale-105 transition-transform"
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestList;
