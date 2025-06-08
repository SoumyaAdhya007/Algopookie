import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware.js";
import {
  adminCreateContest,
  adminDeleteContest,
  adminGetAllContests,
  adminGetContestById,
  adminUpdateContest,
  getContestDetails,
  getContestProblemSolvedUser,
  getContestProblemSubmissions,
  getContestSummaryStats,
  listActiveContests,
  registerForContest,
  submitContestProblem,
} from "../controllers/contest.controller.js";

const ContestRouter = express.Router();

ContestRouter.post(
  "/admin/add",
  authMiddleware,
  checkAdmin,
  adminCreateContest
);

ContestRouter.get("/admin", authMiddleware, checkAdmin, adminGetAllContests);

ContestRouter.get(
  "/admin/:contestId",
  authMiddleware,
  checkAdmin,
  adminGetContestById
);

ContestRouter.put(
  "/admin/:contestId",
  authMiddleware,
  checkAdmin,
  adminUpdateContest
);

ContestRouter.delete(
  "/admin/:contestId",
  authMiddleware,
  checkAdmin,
  adminDeleteContest
);

ContestRouter.get("/", authMiddleware, listActiveContests);

ContestRouter.get("/:contestId", authMiddleware, getContestDetails);

ContestRouter.post("/:contestId/register", authMiddleware, registerForContest);

ContestRouter.post("/:contestId/submit", authMiddleware, submitContestProblem);

ContestRouter.get(
  "/:contestId/:problemId/submission",
  authMiddleware,
  getContestProblemSubmissions
);
ContestRouter.get(
  "/:contestId/solved",
  authMiddleware,
  getContestProblemSolvedUser
);
ContestRouter.get("/:contestId/summary-stats", getContestSummaryStats);

export default ContestRouter;
