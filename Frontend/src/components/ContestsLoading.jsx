import Navbar from "./Navbar";
const ContestsLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <div className="h-12 w-64 bg-gray-800/50 rounded-lg animate-pulse mx-auto mb-4" />
            <div className="h-6 w-96 bg-gray-800/50 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Contest Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
                >
                  {/* Contest Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="h-8 w-48 bg-gray-700 rounded-lg animate-pulse mb-2" />
                      <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse" />
                    </div>
                    <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse" />
                  </div>

                  {/* Description */}
                  <div className="h-4 w-full bg-gray-700 rounded-lg animate-pulse mb-2" />
                  <div className="h-4 w-3/4 bg-gray-700 rounded-lg animate-pulse mb-6" />

                  {/* Contest Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Array(4)
                      .fill(0)
                      .map((_, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-gray-700 animate-pulse" />
                          <div className="h-4 w-24 bg-gray-700 rounded-lg animate-pulse" />
                        </div>
                      ))}
                  </div>

                  {/* Timer */}
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="h-4 w-32 bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
                      <div className="h-8 w-24 bg-gray-700 rounded-lg animate-pulse mx-auto" />
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <div className="h-10 w-full bg-gray-700 rounded-lg animate-pulse" />
                  </div>

                  {/* Participants Progress */}
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <div className="h-4 w-20 bg-gray-700 rounded-lg animate-pulse" />
                      <div className="h-4 w-20 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gray-600 h-2 rounded-full"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Call to Action Skeleton */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-2xl p-8 border border-pink-500/20">
              <div className="h-8 w-48 bg-gray-700 rounded-lg animate-pulse mx-auto mb-4" />
              <div className="h-4 w-96 bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
              <div className="h-4 w-80 bg-gray-700 rounded-lg animate-pulse mx-auto mb-6" />
              <div className="h-10 w-40 bg-gray-700 rounded-lg animate-pulse mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestsLoading;
