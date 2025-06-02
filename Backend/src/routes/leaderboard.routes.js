import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getDailyLeaderboard } from "../controllers/leaderboard.controller.js";

const LeaderboardRoutes = express.Router();

LeaderboardRoutes.get("/today", authMiddleware, getDailyLeaderboard);

export default LeaderboardRoutes;
