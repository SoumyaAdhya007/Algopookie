import Navbar from "./Navbar";

const DashboardLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-10 w-64 bg-gray-800/50 rounded-lg animate-pulse mb-2" />
            <div className="h-5 w-80 bg-gray-800/50 rounded-lg animate-pulse" />
          </div>

          {/* Stats Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-4 w-20 bg-gray-700 rounded-lg animate-pulse mb-2" />
                      <div className="h-8 w-16 bg-gray-700 rounded-lg animate-pulse" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse" />
                  </div>
                </div>
              ))}
          </div>

          {/* Filters and Search Skeleton */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <div className="h-4 w-32 bg-gray-700 rounded-lg animate-pulse mb-2" />
                    <div className="h-10 w-full bg-gray-700 rounded-lg animate-pulse" />
                  </div>
                ))}
            </div>
          </div>

          {/* Users Table Skeleton */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="h-8 w-32 bg-gray-700 rounded-lg animate-pulse mb-2" />
              <div className="h-4 w-48 bg-gray-700 rounded-lg animate-pulse" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/80">
                  <tr>
                    {Array(7)
                      .fill(0)
                      .map((_, i) => (
                        <th key={i} className="px-6 py-4 text-left">
                          <div className="h-4 w-24 bg-gray-700 rounded-lg animate-pulse" />
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />
                            <div>
                              <div className="h-4 w-24 bg-gray-700 rounded-lg animate-pulse mb-1" />
                              <div className="h-3 w-16 bg-gray-700 rounded-lg animate-pulse" />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-pulse" />
                            <div className="h-4 w-32 bg-gray-700 rounded-lg animate-pulse" />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="h-6 w-16 bg-gray-700 rounded-full animate-pulse" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="h-6 w-16 bg-gray-700 rounded-full animate-pulse" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-pulse" />
                            <div className="h-4 w-24 bg-gray-700 rounded-lg animate-pulse" />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="h-4 w-16 bg-gray-700 rounded-lg animate-pulse" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-20 bg-gray-700 rounded-lg animate-pulse" />
                            <div className="h-8 w-8 bg-gray-700 rounded-lg animate-pulse" />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Skeleton */}
            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="h-4 w-48 bg-gray-700 rounded-lg animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-8 w-20 bg-gray-700 rounded-lg animate-pulse" />
                  <div className="h-8 w-10 bg-gray-700 rounded-lg animate-pulse" />
                  <div className="h-8 w-20 bg-gray-700 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Skeleton */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20"
                >
                  <div className="h-6 w-40 bg-gray-700 rounded-lg animate-pulse mb-2" />
                  <div className="h-4 w-48 bg-gray-700 rounded-lg animate-pulse mb-4" />
                  <div className="h-10 w-32 bg-gray-700 rounded-lg animate-pulse" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
