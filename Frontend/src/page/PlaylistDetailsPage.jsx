import { useState, useEffect } from "react";
import { usePlaylistStore } from "../store/usePlaylistStore";
import { Link, useParams } from "react-router-dom";

const PlaylistDetailPage = () => {
  const { id } = useParams();
  const { isLoading, currentPlaylist, getPlaylistDetails } = usePlaylistStore();
  useEffect(() => {
    getPlaylistDetails(id);
  }, [getPlaylistDetails]);
  console.log(currentPlaylist);
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  if (currentPlaylist === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Playlist Not Found</div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "EASY":
        return "bg-emerald-500 text-white";
      case "MEDIUM":
        return "bg-yellow-500 text-white";
      case "HARD":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  return (
    <div className="min-h-screen pt-25 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Playlist Header */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">
                  {currentPlaylist.name}
                </h1>
                {currentPlaylist.isPublic && (
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                    Public
                  </span>
                )}
              </div>
              <p className="text-white/70 text-lg mb-4">
                {currentPlaylist?.description}
              </p>
              {/* <div className="flex items-center space-x-6 text-white/60">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Created by {currentPlaylist.creator}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Created {formatDate(currentPlaylist.createdAt)}</span>
                </div>
                <span>{currentPlaylist.problems.length} problems</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Problems in this playlist
          </h2>

          <div className="space-y-4">
            {/* {currentPlaylist.problems.map((problem, index) => ( */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-800/80">
                  <tr>
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
                  {currentPlaylist.problems.length > 0 ? (
                    currentPlaylist.problems.map((item) => {
                      const problem = item.problem;
                      return (
                        <tr
                          key={problem.id}
                          className="hover:bg-gray-800/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <Link
                              to={`/problem/${problem.id}`}
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
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              {(problem.companies || []).map((company, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs"
                                >
                                  {company}
                                </span>
                              ))}
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
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaylistDetailPage;
