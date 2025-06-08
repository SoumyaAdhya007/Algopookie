const ContestLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-6">
      {/* Contest Header Skeleton */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-3 flex-1">
            {/* Contest Title Skeleton */}
            <div className="h-8 w-3/4 bg-white/10 rounded-lg animate-pulse"></div>

            {/* Contest Description Skeleton */}
            <div className="h-5 w-full bg-white/10 rounded-lg animate-pulse"></div>
          </div>

          {/* Timer Skeleton */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 min-w-[200px]">
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-2"></div>
            <div className="h-8 w-full bg-white/10 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center"
          >
            {/* Stat Number Skeleton */}
            <div className="h-10 w-10 bg-white/10 rounded-lg animate-pulse mb-2"></div>

            {/* Stat Label Skeleton */}
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Contest Problems Section Skeleton */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        {/* Section Title Skeleton */}
        <div className="h-7 w-48 bg-white/10 rounded-lg animate-pulse mb-6"></div>

        {/* Table Header Skeleton */}
        <div className="grid grid-cols-5 gap-4 mb-4 pb-4 border-b border-white/10">
          <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
          <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
          <div className="h-5 w-16 bg-white/10 rounded animate-pulse"></div>
          <div className="h-5 w-24 bg-white/10 rounded animate-pulse"></div>
          <div className="h-5 w-20 bg-white/10 rounded animate-pulse"></div>
        </div>

        {/* Table Rows Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 items-center">
              {/* Solved Status */}
              <div className="w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>

              {/* Title */}
              <div className="h-5 w-40 bg-white/10 rounded animate-pulse"></div>

              {/* Tags */}
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse hidden md:block"></div>
              </div>

              {/* Companies */}
              <div className="flex gap-2">
                <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse hidden md:block"></div>
              </div>

              {/* Difficulty */}
              <div className="h-6 w-16 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestLoading;
