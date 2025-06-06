import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { toast } from "react-hot-toast";

export const useProblemStore = create((set) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemsLoading: false,
  isProblemLoading: false,

  getAllProblems: async () => {
    try {
      set({ isProblemLoading: true });
      const res = await axiosInstance.get("/problems/get-all-problems");
      set({ problems: res.data.problems });
    } catch (error) {
      console.error("Error getting all problems", error);
      toast.error("Error in getting problems", { position: "top-right" });
    } finally {
      set({ isProblemsLoading: false });
    }
  },
  getProblemById: async (id) => {
    try {
      set({ isProblemLoading: true });
      const res = await axiosInstance.get(`/problems/get-problem/${id}`);
      set({ problem: res.data.problem });
    } catch (error) {
      console.error("Error getting all problems", error);
      toast.error("Error in getting problems", { position: "top-right" });
    } finally {
      set({ isProblemLoading: false });
    }
  },
  getSolvedProblemsByUser: async () => {
    try {
      const res = await axiosInstance.get("/problems/get-solved-problems");
      set({ solvedProblems: res.data.problems });
    } catch (error) {
      console.error("Error getting solved problems", error);
      toast.error("Error getting solved problems", { position: "top-right" });
    }
  },
}));
