import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  executeCode,
  submitCode,
} from "../controllers/executeCode.controller.js";

const ExecutionRoute = express.Router();

ExecutionRoute.post("/", authMiddleware, executeCode);
ExecutionRoute.post("/submit", authMiddleware, submitCode);

export default ExecutionRoute;
