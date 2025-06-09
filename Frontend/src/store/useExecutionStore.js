import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useExecutionStore = create((set) => ({
  isCodeExecuting: false,
  isCodeSubmitting: false,
  submission: null,

  executeCode: async (
    source_code,
    language_id,
    stdin,
    expected_outputs,
    problemId
  ) => {
    try {
      set({ isCodeExecuting: true });
      const res = await axiosInstance.post("/execute-code/", {
        source_code,
        language_id,
        stdin,
        expected_outputs,
        problemId,
      });

      set({ submission: res.data.submission });

      toast.success(res.data.message, { position: "top-right" });
    } catch (error) {
      console.error("Error executing code", error);
      toast.error(error.response.data.error, { position: "top-center" });
    } finally {
      set({ isCodeExecuting: false });
    }
  },

  submitCode: async (
    source_code,
    language_id,
    stdin,
    expected_outputs,
    problemId
  ) => {
    try {
      set({ isCodeSubmitting: true });
      const res = await axiosInstance.post("/execute-code/submit", {
        source_code,
        language_id,
        stdin,
        expected_outputs,
        problemId,
      });

      set({ submission: res.data.submission });

      toast.success(res.data.message, { position: "top-right" });
      return res.data.submission;
    } catch (error) {
      console.error("Error submitting code", error);
      toast.error(error.response.data.error, { position: "top-center" });
    } finally {
      set({ isCodeSubmitting: false });
    }
  },
}));
