import React, { useEffect, useState } from "react";
import { usePlaylistStore } from "../store/usePlaylistStore";
import { Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PlaylistProfile = ({ setIsDrawerOpen }) => {
  const { getAllPlaylists, playlists } = usePlaylistStore();

  useEffect(() => {
    getAllPlaylists();
  }, [getAllPlaylists]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="md:col-span-1 mb-8"
    >
      <div className="bg-gray-900 rounded-2xl  p-6 h-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">My Playlists</h2>
          {/* <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-1" />
            Create Playlist
          </button> */}
        </div>

        <div className="space-y-4">
          {playlists.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No playlists yet. Create your first playlist!
            </p>
          ) : (
            playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{playlist.name}</h3>
                  <span className="text-sm text-gray-400">
                    {playlist.problems.length} problems
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-pink-500">
                  <span>View playlist</span>
                  <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PlaylistProfile;
