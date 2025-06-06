import React, { useState, useEffect, useContext, useCallback } from "react";
import { SocketContext } from "../context/SocketContext";
import { useAuthStore } from "../store/useAuthStore";
import { axiosInstance } from "../libs/axios";

const Discussion = ({ problemId }) => {
  const socket = useContext(SocketContext);
  const { authUser } = useAuthStore();
  const [discussions, setDiscussions] = useState([]);
  const [discussionMessage, setDiscussionMessage] = useState("");

  // Fetch existing discussions once
  const loadDiscussions = useCallback(() => {
    axiosInstance
      .get(`/discussions/${problemId}`)
      .then((res) => {
        setDiscussions(res.data.messages);
      })
      .catch((err) => {
        console.error("Error fetching discussions:", err);
      });
  }, [problemId]);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.emit("joinRoom", problemId);
    loadDiscussions();

    const handleNewMessage = (msg) => {
      setDiscussions((prev) => [...prev, msg]);
    };
    socket.on("messageAdded", handleNewMessage);

    return () => {
      socket.off("messageAdded", handleNewMessage);
      socket.emit("leaveRoom", problemId);
    };
  }, [problemId, socket, loadDiscussions]);

  const sendDiscussionMessage = () => {
    const trimmed = discussionMessage.trim();
    if (!trimmed) return;

    socket.emit("newMessage", {
      problemId,
      message: trimmed,
      userId: authUser.id,
      username: authUser.name,
    });

    setDiscussionMessage("");
  };

  const voteDiscussion = (discussionId, type) => {
    const endpoint =
      type === "up"
        ? `/discussions/${discussionId}/upvote`
        : `/discussions/${discussionId}/downvote`;

    axiosInstance
      .post(endpoint)
      .then((res) => {
        const updatedDiscussion = res.data.discussion;
        setDiscussions((prev) =>
          prev.map((d) =>
            d._id === updatedDiscussion._id ? updatedDiscussion : d
          )
        );
      })
      .catch((err) => {
        console.error(`${type}vote error:`, err);
      });
  };

  return (
    <div className="flex flex-col min-h-[90vh]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          Community{" "}
          <span className="text-gradient bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Discussion
          </span>
        </h3>
        <div className="text-sm text-gray-400">
          {discussions.length} message
          {discussions.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Scrollable Discussion Area */}
      <div
        className="flex-1 overflow-y-auto mb-6 pr-2"
        style={{ maxHeight: "calc(100% - 180px)" }}
      >
        {discussions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              No discussions yet
            </h4>
            <p className="text-gray-400">
              Be the first to start the conversation!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {discussions.map((discussion) => {
              const isCurrentUser = discussion.username === authUser.name;
              const displayUser = discussion.username || "";
              const initial = displayUser
                ? displayUser.charAt(0).toUpperCase()
                : "";

              return (
                <div
                  key={discussion.id}
                  className={`flex ${
                    isCurrentUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-3 max-w-[80%] ${
                      isCurrentUser ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        isCurrentUser
                          ? "bg-gradient-to-r from-pink-500 to-purple-600"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500"
                      }`}
                    >
                      {initial}
                    </div>

                    {/* Message Container */}
                    <div
                      className={`rounded-xl border transition-all duration-300 ${
                        isCurrentUser
                          ? "bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-pink-500/30"
                          : "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50"
                      }`}
                    >
                      {/* Header */}
                      <div className="px-4 pt-4 pb-2">
                        <div
                          className={`flex items-center gap-2 ${
                            isCurrentUser ? "justify-end" : ""
                          }`}
                        >
                          <h4 className="font-semibold text-white">
                            {displayUser}
                          </h4>
                          <span className="text-gray-400 text-sm">
                            {discussion.timestamp}
                          </span>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="px-4 pb-4">
                        <p className="text-gray-300 leading-relaxed">
                          {discussion.message}
                        </p>
                      </div>

                      {/* Actions - Only show for other users' messages */}
                      {!isCurrentUser && (
                        <div className="px-4 pb-4 border-t border-gray-700/50 pt-3">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                voteDiscussion(discussion._id, "up")
                              }
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                                discussion.userVote === "up"
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                              }`}
                            >
                              <span>👍</span>
                              <span>{discussion.upvotes}</span>
                            </button>
                            <button
                              onClick={() =>
                                voteDiscussion(discussion._id, "down")
                              }
                              className={`flex items-center gap-1 px-1 py-1 rounded-lg text-sm transition-all duration-300 ${
                                discussion.userVote === "down"
                                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                  : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                              }`}
                            >
                              <span>👎</span>
                              <span>{discussion.downvotes}</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Fixed Message Input */}
      <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm rounded-xl border-t border-gray-700">
        <div className="flex justify-between items-center bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
          <textarea
            value={discussionMessage}
            onChange={(e) => setDiscussionMessage(e.target.value)}
            placeholder="Share your thoughts, ask questions, or help others..."
            className="w-full bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none resize-none"
            rows={2}
          />
          <button
            onClick={sendDiscussionMessage}
            disabled={!discussionMessage.trim()}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Post Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
