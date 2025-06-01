import React, { useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  ListPlus,
  X,
  Star,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useSubmissionStore } from "../store/useSubmissionStore";
import SubmissionsGraph from "../components/SubmissionsGraph";
import ProfileSubmission from "../components/ProfileSubmission";
import ProblemSolvedByUser from "../components/ProblemSolvedByUser";
import PlaylistProfile from "../components/PlaylistProfile";
import { motion, AnimatePresence } from "framer-motion";

const PROBLEMS = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Merge Sorted Array", difficulty: "Easy" },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
  },
  { id: 4, title: "LRU Cache", difficulty: "Medium" },
  { id: 5, title: "Trapping Rain Water", difficulty: "Hard" },
  { id: 6, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
];

const Profile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [selectedProblems, setSelectedProblems] = useState([]);
  const { authUser } = useAuthStore();
  const { submissions, getAllSubmissions } = useSubmissionStore();

  useEffect(() => {
    getAllSubmissions();
  }, [getAllSubmissions]);

  const useProfile = (name = "Profile") => {
    const words = name.trim().split(" ");
    const initials =
      words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0];
    return initials.toUpperCase();
  };

  const handleProblemToggle = (id) => {
    if (selectedProblems.includes(id)) {
      setSelectedProblems(selectedProblems.filter((pid) => pid !== id));
    } else {
      setSelectedProblems([...selectedProblems, id]);
    }
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName && selectedProblems.length > 0) {
      console.log(
        "Creating playlist:",
        newPlaylistName,
        "with problems:",
        selectedProblems
      );
      setNewPlaylistName("");
      setSelectedProblems([]);
      setIsDrawerOpen(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto container px-4 md:px-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
              {useProfile(authUser?.name)}
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h1 className="text-2xl font-bold text-white">
                    {authUser.name}
                  </h1>
                  <p className="text-gray-400">{authUser.email}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">7 day streak</span>
                  </div>

                  <div className="flex items-center px-3 py-1 rounded-full bg-gray-800">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm font-medium">235 points</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Solved</p>
                    <p className="text-xl font-semibold text-white">
                      {" "}
                      {
                        submissions.filter((s) => s.status === "Accepted")
                          .length
                      }
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Wrong Submissions</p>
                    <p className="text-xl font-semibold text-white">
                      {" "}
                      {
                        submissions.filter((s) => s.status === "Wrong Answer")
                          .length
                      }
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Time Limit Exceeded</p>
                    <p className="text-xl font-semibold text-white">
                      {" "}
                      {
                        submissions.filter(
                          (s) => s.status === "Time Limit Exceeded"
                        ).length
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submissions Graph */}
        <SubmissionsGraph submissions={submissions} />
        {/* Playlists and Submissions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Playlists */}
          <PlaylistProfile setIsDrawerOpen={setIsDrawerOpen} />
          <ProfileSubmission />
        </div>
        <ProblemSolvedByUser />
      </div>

      {/* Create Playlist Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={() => setIsDrawerOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full max-w-md bg-gray-900 h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <ListPlus className="h-5 w-5 text-pink-500 mr-2" />
                    <h2 className="text-xl font-semibold text-white">
                      Create New Playlist
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="playlist-name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Playlist Name
                  </label>
                  <input
                    type="text"
                    id="playlist-name"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="e.g. Dynamic Programming Problems"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">
                    Select Problems ({selectedProblems.length} selected)
                  </h3>

                  <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                    {PROBLEMS.map((problem) => (
                      <div
                        key={problem.id}
                        className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      >
                        <input
                          type="checkbox"
                          id={`problem-${problem.id}`}
                          checked={selectedProblems.includes(problem.id)}
                          onChange={() => handleProblemToggle(problem.id)}
                          className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-700 rounded"
                        />
                        <label
                          htmlFor={`problem-${problem.id}`}
                          className="ml-3 flex-grow cursor-pointer text-white"
                        >
                          <span className="block font-medium">
                            {problem.title}
                          </span>
                          <span
                            className={`inline-block px-1.5 py-0.5 text-xs rounded ${
                              problem.difficulty === "Easy"
                                ? "bg-green-500/20 text-green-500"
                                : problem.difficulty === "Medium"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-red-500/20 text-red-500"
                            }`}
                          >
                            {problem.difficulty}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePlaylist}
                    disabled={!newPlaylistName || selectedProblems.length === 0}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ${
                      !newPlaylistName || selectedProblems.length === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Create Playlist
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
