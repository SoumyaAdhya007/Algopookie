import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Share2,
  Lock,
  Globe,
  Plus,
  Calendar,
  User,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { usePlaylistStore } from "../store/usePlaylistStore";
import PlaylistLoading from "../components/PlaylistsLoading";

const PlaylistPage = () => {
  const [expandedPlaylists, setExpandedPlaylists] = useState([]);
  const [copiedPlaylistId, setCopiedPlaylistId] = useState(null);
  const { isLoading, getAllPlaylists, playlists } = usePlaylistStore();

  useEffect(() => {
    getAllPlaylists();
  }, [getAllPlaylists]);

  const togglePlaylist = (playlistId) => {
    setExpandedPlaylists((prev) =>
      prev.includes(playlistId)
        ? prev.filter((id) => id !== playlistId)
        : [...prev, playlistId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "EASY":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "MEDIUM":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "HARD":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const handleShare = async (playlist) => {
    const shareUrl = `${window.location.origin}/playlist/${playlist.id}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch (err) {
      console.warn("Clipboard API failed, using fallback:", err);

      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (copyError) {
        console.error("Fallback copy failed:", copyError);
      }

      document.body.removeChild(textArea);
    }

    setCopiedPlaylistId(playlist.id);

    setTimeout(() => setCopiedPlaylistId(null), 2000);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  if (isLoading) {
    return <PlaylistLoading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-black text-white mb-2">
                My{" "}
                <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Playlists
                </span>
              </h1>
              <p className="text-gray-400">
                Organize and track your coding practice
              </p>
            </div>
            {/* <Link to="/problems">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                <Plus className="h-5 w-5" />
                Create Playlist
              </button>
            </Link> */}
          </div>

          <div className="space-y-6">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-indigo-900/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-white">
                          {playlist.name}
                        </h2>
                        <div className="flex items-center gap-2">
                          {playlist.isPublic ? (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/40 rounded-lg text-sm font-medium">
                              <Globe className="h-3.5 w-3.5" />
                              Public
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-500/20 text-gray-400 border border-gray-500/40 rounded-lg text-sm font-medium">
                              <Lock className="h-3.5 w-3.5" />
                              Private
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        {playlist.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Created {formatDate(playlist.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{playlist.problems.length} problems</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {playlist.isPublic && (
                        <button
                          onClick={() => handleShare(playlist)}
                          className="flex items-center gap-2 px-4 py-2.5 bg-blue-500/20 text-blue-400 border border-blue-500/40 rounded-lg hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-300 font-medium"
                        >
                          {copiedPlaylistId === playlist.id ? (
                            <>
                              <Check className="h-4 w-4" /> Copied!
                            </>
                          ) : (
                            <>
                              <Share2 className="h-4 w-4" /> Share
                            </>
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => togglePlaylist(playlist.id)}
                        className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        {expandedPlaylists.includes(playlist.id) ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {expandedPlaylists.includes(playlist.id) && (
                  <div className="border-t border-purple-500/30 bg-black/20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Problems in this playlist
                      </h3>
                      <div className="space-y-3">
                        {playlist.problems.map((playlistProblem, i) => {
                          const actualProblem = playlistProblem.problem;
                          console.log(actualProblem);
                          if (!actualProblem) return null; // optional check to prevent errors

                          return (
                            <Link
                              key={playlistProblem.id}
                              to={`/problem/${actualProblem.id}`}
                              className="block p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-900/70 transition-all duration-300"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  {/* <div
                                    className={`w-3 h-3 rounded-full ${
                                      actualProblem.solved
                                        ? "bg-green-500"
                                        : "bg-gray-600"
                                    }`}
                                  /> */}
                                  <h4 className="font-medium text-white hover:text-purple-400 transition-colors">
                                    {i + 1}
                                  </h4>
                                  <h4 className="font-medium text-white hover:text-purple-400 transition-colors">
                                    {actualProblem.title}
                                  </h4>
                                </div>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                                    actualProblem.difficulty
                                  )}`}
                                >
                                  {actualProblem.difficulty}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {playlists.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No playlists yet
              </h3>
              <p className="text-gray-400 mb-6">
                Create your first playlist to organize your practice problems
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
