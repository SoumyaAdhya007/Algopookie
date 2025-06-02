import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getUserStreak } from "../controllers/streak.controller.js";

const StreakRoutes = express.Router();

StreakRoutes.get("/", authMiddleware, getUserStreak);

export default StreakRoutes;
