import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useDashboard = create((set, get) => ({
  isLoading: false,
  users: [],

  getUsers: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/admin/users");

      set({ users: res.data.users });
    } catch (error) {
      console.log("Error getting users", error);
      toast.error("Error getting users", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },
  changeUserStatus: async (userId, isBlocked) => {
    try {
      set({ isLoading: true });
      await axiosInstance.patch(`/admin/users/${userId}/block`, { isBlocked });
    } catch (error) {
      console.log("Error getting users", error);
      toast.error("Error getting users", { position: "top-right" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
