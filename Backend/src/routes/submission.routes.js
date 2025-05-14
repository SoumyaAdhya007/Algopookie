import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getAllSubmissions,
  getAllSubmissionsCountForProblem,
  getSubmissionsForProblem,
} from "../controllers/submission.controllers.js";

const SubmissionRoutes = express.Router();

SubmissionRoutes.get("/get-all-submissions", authMiddleware, getAllSubmissions);

SubmissionRoutes.get(
  "/get-submissions/:problemId",
  authMiddleware,
  getSubmissionsForProblem
);

SubmissionRoutes.get(
  "/get-submissions-count/:problemId",
  authMiddleware,
  getAllSubmissionsCountForProblem
);

export default SubmissionRoutes;
