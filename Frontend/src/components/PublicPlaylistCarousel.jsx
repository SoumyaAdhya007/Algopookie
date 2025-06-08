"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
const gradients = [
  "from-pink-500 to-purple-600",
  "from-blue-500 to-indigo-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-pink-600",
];
const PlaylistCarousel = ({ loading, publicPlaylists }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left"
          ? -current.offsetWidth / 2
          : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Public Playlists</h2>
      </div>

      <div className="relative">
        {/* Left scroll button */}
        {publicPlaylists.length > 4 && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Playlist cards container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loading
            ? // Skeleton loading
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="min-w-[280px] h-[180px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col animate-pulse"
                >
                  <div className="h-6 bg-white/10 rounded-md w-3/4 mb-4"></div>
                  <div className="h-4 bg-white/10 rounded-md w-1/2 mb-2"></div>
                  <div className="h-4 bg-white/10 rounded-md w-2/3 mb-auto"></div>
                  <div className="h-8 bg-white/10 rounded-md w-full mt-4"></div>
                </div>
              ))
            : publicPlaylists.map((playlist, i) => (
                <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
                  <div className="min-w-[280px] h-[180px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col hover:bg-white/10 transition-all cursor-pointer snap-start">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {playlist.name}
                    </h3>
                    <p className="text-white/70 mb-1">
                      {playlist.problems.length} problems
                    </p>
                    <p className="text-white/50 text-sm">
                      {playlist.description}
                    </p>
                    <div
                      className={`mt-auto h-2 w-full bg-gradient-to-r ${
                        gradients[i % gradients.length]
                      } rounded-full`}
                    ></div>
                  </div>
                </Link>
              ))}
        </div>

        {/* Right scroll button */}
        {publicPlaylists.length > 4 && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaylistCarousel;
