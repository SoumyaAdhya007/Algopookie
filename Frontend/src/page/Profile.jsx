import React, { useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  ListPlus,
  X,
  Star,
  Crown,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useSubmissionStore } from "../store/useSubmissionStore";
import ProfileSubmission from "../components/ProfileSubmission";
import ProblemSolvedByUser from "../components/ProblemSolvedByUser";
import PlaylistProfile from "../components/PlaylistProfile";
import { motion, AnimatePresence } from "framer-motion";
import ContributionCalendar from "../components/ContributionCalendar";

const Profile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isCheckingAuth, authUser, streaks, currentStreak, getStreakDetails } =
    useAuthStore();
  const { submissions, getAllSubmissions } = useSubmissionStore();

  useEffect(() => {
    getAllSubmissions();
    getStreakDetails();
  }, [getAllSubmissions, getStreakDetails]);

  const useProfile = (name = "Profile") => {
    const words = name.trim().split(" ");
    const initials =
      words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0];
    return initials.toUpperCase();
  };

  return (
    <div className="min-h-screen pt-24 pb-16 py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
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
                  <div className="flex items-center space-x-2">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/70">
                      Subscription: {authUser.plan}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {currentStreak} day streak
                    </span>
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
        {/* ContributionCalendar */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Activity</h2>
            {/* <div className="flex items-center space-x-4 text-sm text-white/60">
              <span>Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-white/10 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              </div>
              <span>More</span>
            </div> */}
          </div>

          {isCheckingAuth ? (
            <div className="flex items-center justify-center h-32">
              <div className="text-white/60">Loading contribution data...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <ContributionCalendar solvedDates={streaks} />
            </div>
          )}

          <div className="mt-4 text-white/60 text-sm">
            {streaks && (
              <p>
                {streaks.length} contributions in the last year. Current streak:{" "}
                {currentStreak} days
              </p>
            )}
          </div>
        </div>
        {/* Playlists and Submissions Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Playlists */}
          <PlaylistProfile setIsDrawerOpen={setIsDrawerOpen} />
          <ProfileSubmission />
        </div>
        <ProblemSolvedByUser />
      </div>
    </div>
  );
};

export default Profile;
