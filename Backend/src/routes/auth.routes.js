import express from "express";
import {
  check,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);

AuthRoutes.post("/login", login);

AuthRoutes.post("/logout",authMiddleware, logout);

AuthRoutes.get("/check",authMiddleware, check);

export default AuthRoutes;
