import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import AuthRoutes from "./routes/auth.routes.js";
import ProblemRoutes from "./routes/problem.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "A fun, student-focused platform to master Data Structures and Algorithms with interactive challenges and clear explanations. Built with React and Node.js for a seamless learning experience."
    );
});

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/problems", ProblemRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is running on 8080");
});
