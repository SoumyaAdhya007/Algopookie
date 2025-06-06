import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useLeaderboard = create((set, get) => ({
  isLoading: false,
  leaderboard: [],

  getLeaderboard: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/leaderboard/today");

      set({ leaderboard: res.data.leaderboard });
    } catch (error) {
      console.log("Error getting leaderboard", error);
      toast.error("Error getting leaderboard", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
