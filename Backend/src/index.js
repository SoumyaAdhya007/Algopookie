import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRoutes from "./routes/auth.routes.js";
import ProblemRoutes from "./routes/problem.routes.js";
import ExecutionRoute from "./routes/executeCode.routes.js";
import SubmissionRoutes from "./routes/submission.routes.js";
import PlaylistRoutes from "./routes/playlist.routes.js";
import StreakRoutes from "./routes/streak.routes.js";
import LeaderboardRoutes from "./routes/leaderboard.routes.js";
import AdminRoutes from "./routes/admin.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/problems", ProblemRoutes);
app.use("/api/v1/execute-code", ExecutionRoute);
app.use("/api/v1/submission", SubmissionRoutes);
app.use("/api/v1/playlist", PlaylistRoutes);
app.use("/api/v1/streak", StreakRoutes);
app.use("/api/v1/leaderboard", LeaderboardRoutes);
app.use("/api/v1/admin", AdminRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is running on 8080");
});
