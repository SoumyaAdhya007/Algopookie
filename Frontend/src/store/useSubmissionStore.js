import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useSubmissionStore = create((set, get) => ({
  isLoading: false,
  submissions: [],
  submission: null,
  submissionCount: null,

  getAllSubmissions: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/submission/get-all-submissions");

      set({ submissions: res.data.submissions });
    } catch (error) {
      console.log("Error getting all submissions", error);
      toast.error("Error getting all submissions", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },

  getSubmissionForProblem: async (problemId) => {
    try {
      const res = await axiosInstance.get(
        `/submission/get-submissions/${problemId}`
      );

      set({ submission: res.data.submissions });
    } catch (error) {
      console.error("Error getting submissions for problem", error);

      toast.error("Error getting submissions for problem", {
        position: "top-right",
      });
    } finally {
      set({ isLoading: false });
    }
  },

  getSubmissionCountForProblem: async (problemId) => {
    try {
      const res = await axiosInstance.get(
        `/submission/get-submissions-count/${problemId}`
      );

      set({ submissionCount: res.data.count });
    } catch (error) {
      console.error("Error getting submission count for problem", error);
      toast.error("Error getting submission count for problem", {
        position: "top-right",
      });
    }
  },
}));
