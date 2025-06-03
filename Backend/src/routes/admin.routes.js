import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware.js";
import {
  adminBlockUnblockUser,
  adminGetAllUsers,
} from "../controllers/admin.controller.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/users", authMiddleware, checkAdmin, adminGetAllUsers);

AdminRoutes.patch(
  "/users/:userId/block",
  authMiddleware,
  checkAdmin,
  adminBlockUnblockUser
);

export default AdminRoutes;
