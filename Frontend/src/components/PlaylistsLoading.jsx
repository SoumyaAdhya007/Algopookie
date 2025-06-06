import Navbar from "./Navbar";

const PlaylistLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          {/* Header Skeleton */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="h-10 w-48 bg-gray-800/50 rounded-lg animate-pulse mb-2" />
              <div className="h-5 w-64 bg-gray-800/50 rounded-lg animate-pulse" />
            </div>
            <div className="h-10 w-40 bg-gray-800/50 rounded-lg animate-pulse" />
          </div>

          {/* Playlists Skeleton */}
          <div className="space-y-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                >
                  {/* Playlist Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-48 bg-gray-700 rounded-lg animate-pulse" />
                          <div className="h-6 w-20 bg-gray-700 rounded-full animate-pulse" />
                        </div>

                        <div className="h-4 w-full bg-gray-700 rounded-lg animate-pulse mb-4" />
                        <div className="h-4 w-3/4 bg-gray-700 rounded-lg animate-pulse mb-4" />

                        <div className="flex items-center gap-6">
                          <div className="h-4 w-32 bg-gray-700 rounded-lg animate-pulse" />
                          <div className="h-4 w-32 bg-gray-700 rounded-lg animate-pulse" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-8 w-24 bg-gray-700 rounded-lg animate-pulse" />
                        <div className="h-8 w-8 bg-gray-700 rounded-lg animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Problems List Skeleton (only for first item) */}
                  {i === 0 && (
                    <div className="border-t border-gray-700">
                      <div className="p-6">
                        <div className="h-6 w-48 bg-gray-700 rounded-lg animate-pulse mb-4" />
                        <div className="space-y-3">
                          {Array(3)
                            .fill(0)
                            .map((_, j) => (
                              <div
                                key={j}
                                className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-gray-700 animate-pulse" />
                                    <div className="h-5 w-40 bg-gray-700 rounded-lg animate-pulse" />
                                  </div>
                                  <div className="h-6 w-20 bg-gray-700 rounded-full animate-pulse" />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistLoading;
