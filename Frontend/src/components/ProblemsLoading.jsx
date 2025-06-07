const ProblemsLoading = () => {
  return (
    <div className="space-y-4">
      {/* Search and filters skeleton */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="h-12 flex-1 bg-gray-700 animate-pulse rounded-lg"></div>
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-700 animate-pulse rounded-lg"></div>
            <div className="h-12 w-40 bg-gray-700 animate-pulse rounded-lg"></div>
            <div className="h-12 w-40 bg-gray-700 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="glass rounded-xl overflow-hidden">
        {/* Table header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-700">
          <div className="w-16">
            <div className="h-4 w-12 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 w-16 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="w-48">
            <div className="h-4 w-12 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="w-32">
            <div className="h-4 w-20 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="w-24">
            <div className="h-4 w-16 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="w-32">
            <div className="h-4 w-16 bg-gray-700 animate-pulse rounded"></div>
          </div>
        </div>

        {/* Table rows skeleton */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-center px-6 py-4 border-b border-gray-800 last:border-b-0"
          >
            <div className="w-16">
              <div className="h-6 w-6 bg-gray-700 animate-pulse rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="h-5 w-48 bg-gray-700 animate-pulse rounded"></div>
            </div>
            <div className="w-48 flex gap-1">
              <div className="h-6 w-12 bg-gray-700 animate-pulse rounded-full"></div>
              <div className="h-6 w-16 bg-gray-700 animate-pulse rounded-full"></div>
              <div className="h-6 w-14 bg-gray-700 animate-pulse rounded-full"></div>
            </div>
            <div className="w-32">
              <div className="h-4 w-20 bg-gray-700 animate-pulse rounded"></div>
            </div>
            <div className="w-24">
              <div className="h-6 w-16 bg-gray-700 animate-pulse rounded-md"></div>
            </div>
            <div className="w-32 flex gap-2">
              <div className="h-8 w-8 bg-gray-700 animate-pulse rounded-md"></div>
              <div className="h-8 w-8 bg-gray-700 animate-pulse rounded-md"></div>
              <div className="h-8 w-24 bg-gray-700 animate-pulse rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsLoading;
