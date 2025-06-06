import React, { useEffect, useState } from "react";
import { Trophy, Medal, Award, Crown, Target } from "lucide-react";
import Navbar from "../components/Navbar";
import { useLeaderboard } from "../store/useLeaderboardStore";
import LeaderboardLoading from "../components/LeaderboardLoading";

export const LeaderboardPage = () => {
  const { isLoading, leaderboard, getLeaderboard } = useLeaderboard();
  useEffect(() => {
    getLeaderboard();
  }, [getLeaderboard]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-100" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-100" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-100" />;
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>;
    }
  };

  const getRankStyling = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-yellow-500/20 via-amber-500/15 to-orange-500/20 border-yellow-400/50 shadow-2xl shadow-yellow-600/20";
      case 2:
        return "bg-gradient-to-br from-gray-400/20 via-slate-400/15 to-gray-500/20 border-gray-400/50 shadow-2xl shadow-gray-400/20";
      case 3:
        return "bg-gradient-to-br from-amber-600/20 via-orange-500/15 to-red-500/20 border-amber-500/50 shadow-2xl shadow-amber-500/20";
      default:
        return "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70";
    }
  };

  const renderTopThreeCard = (userObj, index) => {
    const rank = index + 1;
    return (
      <div
        key={userObj.userId}
        className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${getRankStyling(
          rank
        )}`}
      >
        {/* Floating Crown/Medal */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              rank === 1
                ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                : rank === 2
                ? "bg-gradient-to-br from-gray-300 to-gray-500"
                : "bg-gradient-to-br from-amber-500 to-amber-700"
            }`}
          >
            {getRankIcon(rank)}
          </div>
        </div>

        {/* Rank Badge */}
        <div className="absolute -top-2 -right-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
              rank === 1
                ? "bg-yellow-500"
                : rank === 2
                ? "bg-gray-400"
                : "bg-amber-600"
            }`}
          >
            {rank}
          </div>
        </div>

        {/* Username */}
        <div className="text-center mt-6 mb-4">
          <h3
            className={`text-lg font-bold mb-2 ${
              rank === 1 ? "text-yellow-300" : "text-white"
            }`}
          >
            {userObj.userName}
          </h3>
        </div>

        {/* Solved Count */}
        <div className="text-center">
          <div
            className={`text-2xl font-black mb-1 ${
              rank === 1
                ? "text-yellow-400"
                : rank === 2
                ? "text-gray-300"
                : "text-amber-400"
            }`}
          >
            {userObj.solvedCount}
          </div>
          <div className="text-gray-400 text-xs">problems today</div>
        </div>

        {/* Champion Badge for 1st Place */}
        {rank === 1 && (
          <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
            <Crown className="h-3 w-3 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-xs">
              Champion
            </span>
          </div>
        )}
      </div>
    );
  };

  if (isLoading) {
    return <LeaderboardLoading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Daily{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Leaderboard
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Top performers based on problems solved today
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto">
              {/* 2nd Place - Left */}
              {leaderboard.length >= 2 && (
                <div className="order-2 md:order-1">
                  {renderTopThreeCard(leaderboard[1], 1)}
                </div>
              )}

              {/* 1st Place - Center */}
              {leaderboard.length >= 1 && (
                <div className="order-1 md:order-2 md:-translate-y-4">
                  {renderTopThreeCard(leaderboard[0], 0)}
                </div>
              )}

              {/* 3rd Place - Right */}
              {leaderboard.length >= 3 && (
                <div className="order-3 md:order-3">
                  {renderTopThreeCard(leaderboard[2], 2)}
                </div>
              )}
            </div>
          </div>

          {/* Rankings 4 and beyond */}
          {leaderboard.length > 3 && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">
                  Rankings 4–{leaderboard.length}
                </h2>
              </div>

              <div className="divide-y divide-gray-700">
                {leaderboard.slice(3).map((userObj, idx) => {
                  const rank = idx + 4; // because slice(3) starts at the 4th place
                  return (
                    <div
                      key={userObj.userId}
                      className="flex items-center justify-between p-4 hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank Number */}
                        <div className="w-12 text-center">
                          <span className="text-lg font-bold text-gray-400">
                            #{rank}
                          </span>
                        </div>

                        {/* Username */}
                        <div>
                          <h3 className="font-semibold text-white">
                            {userObj.userName}
                          </h3>
                        </div>
                      </div>

                      {/* Solved Count */}
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-400" />
                          <span className="text-xl font-bold text-green-400">
                            {userObj.solvedCount}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          problems today
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
