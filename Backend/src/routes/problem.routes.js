import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware.js";
import {
  createProblem,
  deleteProblem,
  getAllProblems,
  getAllSolvedProblemsByUser,
  getProblemById,
  updateProblem,
} from "../controllers/problem.controller.js";

const ProblemRoutes = express.Router();

ProblemRoutes.post(
  "/create-problem",
  authMiddleware,
  checkAdmin,
  createProblem
);

ProblemRoutes.get("/get-all-problems", authMiddleware, getAllProblems);

ProblemRoutes.get("/get-problem/:id", authMiddleware, getProblemById);

ProblemRoutes.put(
  "/update-problem/:id",
  authMiddleware,
  checkAdmin,
  updateProblem
);

ProblemRoutes.delete(
  "/delete-problem/:id",
  authMiddleware,
  checkAdmin,
  deleteProblem
);

ProblemRoutes.get(
  "/get-solved-problems",
  authMiddleware,
  getAllSolvedProblemsByUser
);

export default ProblemRoutes;
