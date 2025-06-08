import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useContestStore = create((set) => ({
  isLoading: false,
  contests: [],
  currentContest: null,
  contestSubmissions: [],
  contestSummary: null,
  contestSolvedProblems: [],

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
  getContestDetails: async (id) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get(`/contests/${id}`);
      const now = new Date().toISOString();

      const c = response.data.contest;
      const start = new Date(c.startTime);
      const end = new Date(c.endTime);
      let status = "registration";
      if (now >= c.startTime && now < c.endTime) status = "live";
      if (now >= c.endTime) status = "ended";

      set({ currentContest: { ...c, status } });
    } catch (error) {
      console.error("Error fetching contest details:", error);
      toast.error("Failed to fetch contest details", { position: "top-right" });
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
  submitContestProblem: async (contestId, problemId, submissionId) => {
    try {
      set({ isLoading: true });
      await axiosInstance.post(`/contests/${contestId}/submit`, {
        contestId,
        problemId,
        submissionId,
      });
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
  getContestProblemSubmissions: async (contestId, problemId) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get(
        `/contests/${contestId}/${problemId}/submission`
      );
      const rawSubmissions = response.data.submissions || [];
      const submissions = rawSubmissions.map((sub) => ({
        id: sub.submission.id,
        status: sub.submission.status,
        memory: sub.submission.memory,
        time: sub.submission.time,
        stdin: sub.submission.stdin,
        stdout: sub.submission.stdout,
        sourceCode: sub.submission.sourceCode,
        createdAt: sub.submission.createdAt,
      }));

      set({ contestSubmissions: submissions });
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
  getContestProblemSolvedUser: async (contestId) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get(`/contests/${contestId}/solved`);
      const problemIds = response.data.problemSolved.map(
        (record) => record.problemId
      );
      set({ contestSolvedProblems: problemIds });
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
  getContestSummaryStats: async (contestId) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get(
        `/contests/${contestId}/summary-stats`
      );
      set({ contestSummary: response.data.summary });
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
