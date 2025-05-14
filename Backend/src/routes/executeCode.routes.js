import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { executeCode } from "../controllers/executeCode.controller.js";

const ExecutionRoute = express.Router();

ExecutionRoute.post("/", authMiddleware, executeCode);

export default ExecutionRoute;
