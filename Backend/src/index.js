import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
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
import ContestRouter from "./routes/contest.routes.js";
import DiscussionRouter from "./routes/discussion.routes.js";
import connectDB from "./libs/mongodb.js";
import { initAllContestSchedules } from "./libs/contestScheduler.js";
import { registerSocketEvents } from "./controllers/discussion.controller.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new SocketIOServer(
  server,
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("New socket connected:", socket.id);
  registerSocketEvents(socket, io);
});

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
app.use("/api/v1/contests", ContestRouter);
app.use("/api/v1/discussions", DiscussionRouter);

export { io };

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("Server is running on 8080");

      initAllContestSchedules()
        .then(() => console.log("Contest schedules initialized."))
        .catch((err) => console.error("Scheduler init error:", err));
    });
  })
  .catch((err) => {
    console.error("Mongodb connection error", err);
    process.exit(1);
  });
