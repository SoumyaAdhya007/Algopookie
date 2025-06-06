import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useContestStore = create((set) => ({
  isLoading: false,
  contests: [],

  setContests: (newContests) => set({ contests: newContests }),
  getAllContests: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/contests");
      const now = new Date().toISOString();
      const list = response.data.contests.map((c) => {
        const start = new Date(c.startTime);
        const end = new Date(c.endTime);
        let status = "registration";
        if (now >= c.startTime && now < c.endTime) status = "live";
        if (now >= c.endTime) status = "ended";
        return { ...c, status };
      });
      set({ contests: list });
    } catch (error) {
      console.error("Error fetching contests:", error);
      toast.error("Failed to fetch contests", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },
  updateContestStatus: (contestId, newStatus) =>
    set((state) => ({
      contests: state.contests.map((c) =>
        c.id === contestId ? { ...c, status: newStatus } : c
      ),
    })),

  registerContest: async (contestId) => {
    try {
      set({ isLoading: true });
      await axiosInstance.post(`/contests/${contestId}/register`);
    } catch (error) {
      console.error("Error creating playlist:", error);
      toast.error(error.response?.data?.error || "Failed to create playlist", {
        position: "top-right",
      });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
