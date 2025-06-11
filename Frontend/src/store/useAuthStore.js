import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";
export const useAuthStore = create((set) => ({
  authUser: null,
  streaks: [],
  currentStreak: 0,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data.user });
    } catch (error) {
      console.error("Error checking auth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigninUp: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);

      set({ authUser: res.data.user });

      toast.success(res.data.message);
    } catch (error) {
      console.error("Error signing up", error);
      toast.error("Error signing up");
    } finally {
      set({ isSigninUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);

      set({ authUser: res.data.user });

      toast.success(res.data.message);
    } catch (error) {
      console.error("Error logging in", error);
      toast.error(error.response.data.error, { position: "top-right" });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });

      toast.success("Logout successful", { position: "top-right" });
    } catch (error) {
      console.error("Error logging out", error);
      toast.error("Error logging out", { position: "top-right" });
    }
  },
  getStreakDetails: async () => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.get("/streak");

      const { solvedDates, currentStreak } = res.data;

      set({
        streaks: solvedDates,
        currentStreak: currentStreak,
      });

      console.log("streak details", solvedDates, currentStreak);
    } catch (error) {
      console.error("Error getting streak details", error);
      toast.error("Error getting streak details", { position: "top-right" });
    } finally {
      set({ isLoggingIn: false });
    }
  },
}));
