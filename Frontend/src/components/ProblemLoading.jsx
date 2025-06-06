const ProblemLoading = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar placeholder */}
      <div className="h-16 bg-gray-900 border-b border-gray-800" />

      <div className="h-screen flex flex-col">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
            <div className="flex items-center gap-4">
              <div className="h-4 w-32 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-28 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-800 rounded animate-pulse" />
            <div className="h-8 w-8 bg-gray-800 rounded animate-pulse" />
            <div className="h-8 w-24 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel */}
          <div className="w-1/2 flex flex-col border-r border-gray-800">
            {/* Tabs Skeleton */}
            <div className="flex border-b border-gray-800">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="px-4 py-3">
                    <div className="h-4 w-20 bg-gray-800 rounded animate-pulse" />
                  </div>
                ))}
            </div>

            {/* Content Skeleton */}
            <div className="flex-1 p-6 space-y-4">
              <div className="h-6 w-3/4 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-800 rounded animate-pulse" />

              <div className="space-y-3 mt-8">
                <div className="h-5 w-32 bg-gray-800 rounded animate-pulse" />
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="h-4 w-24 bg-gray-800 rounded animate-pulse mb-2" />
                  <div className="h-8 w-full bg-gray-800 rounded animate-pulse mb-2" />
                  <div className="h-4 w-24 bg-gray-800 rounded animate-pulse mb-2" />
                  <div className="h-8 w-full bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-1/2 flex flex-col">
            {/* Editor Header Skeleton */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="h-5 w-24 bg-gray-800 rounded animate-pulse" />
              <div className="flex space-x-2">
                <div className="h-8 w-8 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>

            {/* Code Editor Skeleton */}
            <div className="flex-1 bg-gray-900 p-4">
              <div className="space-y-2">
                {Array(15)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-4 w-6 bg-gray-800 rounded animate-pulse" />
                      <div
                        className={`h-4 bg-gray-800 rounded animate-pulse ${
                          i % 3 === 0
                            ? "w-3/4"
                            : i % 3 === 1
                            ? "w-1/2"
                            : "w-2/3"
                        }`}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Test Cases Skeleton */}
            <div className="border-t border-gray-800 p-4">
              <div className="h-5 w-24 bg-gray-800 rounded animate-pulse mb-3" />
              <div className="space-y-2 mb-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="bg-gray-800 p-2 rounded">
                      <div className="h-4 w-full bg-gray-700 rounded animate-pulse mb-1" />
                      <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse" />
                    </div>
                  ))}
              </div>

              <div className="flex gap-2 mb-4">
                <div className="flex-1 h-8 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-800 rounded animate-pulse" />
              </div>

              <div className="flex space-x-4">
                <div className="h-8 w-20 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-20 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemLoading;
