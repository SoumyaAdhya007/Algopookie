import Navbar from "./Navbar";

const LeaderboardLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <div className="h-12 w-64 bg-gray-800/50 rounded-lg animate-pulse mx-auto mb-4" />
            <div className="h-6 w-96 bg-gray-800/50 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Time Filter Skeleton */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700 w-80">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-700/50 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Top 3 Podium Skeleton */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto">
              {/* 2nd Place */}
              <div className="order-2 md:order-1">
                <div className="relative p-6 rounded-2xl border border-gray-700 backdrop-blur-sm bg-gray-800/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="flex justify-center mt-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <div className="h-5 w-24 bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
                    <div className="h-8 w-12 bg-gray-700 rounded-lg animate-pulse mx-auto mb-3" />
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="order-1 md:order-2 md:-translate-y-4">
                <div className="relative p-6 rounded-2xl border border-gray-700 backdrop-blur-sm bg-gray-800/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="flex justify-center mt-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <div className="h-5 w-24 bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
                    <div className="h-8 w-12 bg-gray-700 rounded-lg animate-pulse mx-auto mb-3" />
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                    <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse mx-auto mt-3" />
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="order-3 md:order-3">
                <div className="relative p-6 rounded-2xl border border-gray-700 backdrop-blur-sm bg-gray-800/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="flex justify-center mt-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                  <div className="text-center">
                    <div className="h-5 w-24 bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
                    <div className="h-8 w-12 bg-gray-700 rounded-lg animate-pulse mx-auto mb-3" />
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                      <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Leaderboard Skeleton */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="h-8 w-48 bg-gray-700 rounded-lg animate-pulse" />
            </div>

            <div className="divide-y divide-gray-700">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-6 bg-gray-700 rounded-lg animate-pulse" />
                      <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse" />
                      <div>
                        <div className="h-5 w-32 bg-gray-700 rounded-lg animate-pulse mb-2" />
                        <div className="h-4 w-48 bg-gray-700 rounded-lg animate-pulse" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="h-6 w-12 bg-gray-700 rounded-lg animate-pulse mb-1" />
                      <div className="h-4 w-24 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardLoading;
