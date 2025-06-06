import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useDiscussionStore = create((set, get) => ({
  discussions: [],
  currentPlaylist: null,
  isLoading: false,
  error: null,

  sendUpvote: async (discussionId) => {
    try {
      const response = await axiosInstance.post(
        `/discussions/${discussionId}/upvote`,
        playlistData
      );

      set((state) => ({
        discussions: [...state.discussion, response.data.discussion],
      }));

      return response.data.discussion;
    } catch (error) {
      console.error("Error while upvote:", error);
      toast.error(error.response?.data?.error || "Failed to upvote", {
        position: "top-right",
      });
      throw error;
    } finally {
    }
  },
  sendDownvote: async (discussionId) => {
    try {
      const response = await axiosInstance.post(
        `/discussions/${discussionId}/downvote`
      );

      set((state) => ({
        discussions: [...state.discussion, response.data.discussion],
      }));

      return response.data.discussion;
    } catch (error) {
      console.error("Error while downvote", error);
      toast.error(error.response?.data?.error || "Failed to downvote");
      throw error;
    } finally {
    }
  },

  getAllDiscussions: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get(`/discussions/${problemId}`);
      set({ discussions: response.data.messages });
    } catch (error) {
      console.error("Error fetching discussions:", error);
      toast.error("Failed to fetch discussions", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
