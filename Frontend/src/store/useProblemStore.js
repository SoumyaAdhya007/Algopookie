import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { tost } from "react-hot-toast";

export const useProblemStore = create((set) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemsLoading: false,
  isProblemLoading: false,

  getAllProblem: async () => {
    try {
      set({ isProblemLoading: true });
      const res = await axiosInstance.get("/problems/get-all-problems");
      set({ problems: res.data.problems });
    } catch (error) {
      console.log("Error getting all problems", error);
      tost.error("Error in getting problems");
    } finally {
      set({ isProblemsLoading: false });
    }
  },
  getProblemById: async (id) => {
    try {
      set({ isProblemLoading: true });
      const res = await axiosInstance.get(`/problems/get-problem/${id}`);
      set({ problem: res.data.problem });
      tost.success(res.data.message);
    } catch (error) {
      console.log("Error getting all problems", error);
      tost.error("Error in getting problems");
    } finally {
      set({ isProblemLoading: false });
    }
  },
  getSolvedProblemByUser: async () => {
    try {
      const res = await axiosInstance.get("/problems/get-solved-problems");
      set({ solvedProblems: res.data.problems });
    } catch (error) {
      console.log("Error getting solved problems", error);
      tost.error("Error getting solved problems");
    }
  },
}));
