const ProblemsLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center space-x-8">
          {/* Logo Skeleton */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-8 w-8 bg-white/10 rounded animate-pulse"></div>
          </div>

          {/* Navigation Skeleton */}
          <nav className="flex space-x-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-6 w-16 bg-white/10 rounded animate-pulse"
              ></div>
            ))}
          </nav>
        </div>

        {/* User Avatar Skeleton */}
        <div className="w-10 h-10 bg-white/10 rounded-full animate-pulse"></div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Public Playlists Section */}
        <div>
          {/* Section Title Skeleton */}
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6"></div>

          {/* Playlist Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
              >
                {/* Playlist Title */}
                <div className="h-6 w-32 bg-white/10 rounded animate-pulse mb-3"></div>

                {/* Playlist Info */}
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-28 bg-white/10 rounded animate-pulse mb-4"></div>

                {/* Progress Bar */}
                <div className="h-2 w-full bg-white/10 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Problems Section */}
        <div>
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-10 w-36 bg-white/10 rounded-lg animate-pulse"></div>
          </div>

          {/* Search and Filters Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar Skeleton */}
              <div className="flex-1 h-12 bg-white/10 rounded-lg animate-pulse"></div>

              {/* Filter Dropdowns Skeleton */}
              <div className="flex gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-12 w-36 bg-white/10 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Problems Table Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            {/* Table Header Skeleton */}
            <div className="grid grid-cols-7 gap-4 mb-4 pb-4 border-b border-white/10">
              <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-12 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-12 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-20 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-18 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
              <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
            </div>

            {/* Table Rows Skeleton */}
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-7 gap-4 items-center py-4 border-b border-white/5 last:border-b-0"
                >
                  {/* Solved Status */}
                  <div className="w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>

                  {/* Title */}
                  <div className="h-5 w-32 bg-white/10 rounded animate-pulse"></div>

                  {/* Tags */}
                  <div className="flex gap-2">
                    <div className="h-6 w-12 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
                  </div>

                  {/* Companies */}
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
                  </div>

                  {/* Difficulty */}
                  <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white/10 rounded animate-pulse"></div>
                    <div className="w-8 h-8 bg-white/10 rounded animate-pulse"></div>
                    <div className="w-24 h-8 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="h-10 w-16 bg-white/10 rounded animate-pulse"></div>
              <div className="h-6 w-8 bg-white/10 rounded animate-pulse"></div>
              <div className="h-10 w-16 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsLoading;
