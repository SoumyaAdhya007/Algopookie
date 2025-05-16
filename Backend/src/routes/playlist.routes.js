import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  addProblemToPlaylist,
  createPlaylist,
  deletePlaylist,
  getAllListDetails,
  getPlaylistDetails,
  removeProblemFromPlaylist,
} from "../controllers/playlist.controller.js";

const PlaylistRoutes = express.Router();

PlaylistRoutes.get("/", authMiddleware, getAllListDetails);

PlaylistRoutes.get("/:playlistId", authMiddleware, getPlaylistDetails);

PlaylistRoutes.post("/create-playlist", authMiddleware, createPlaylist);

PlaylistRoutes.post(
  "/:playlistId/add-problem",
  authMiddleware,
  addProblemToPlaylist
);

PlaylistRoutes.delete("/:playlistId", authMiddleware, deletePlaylist);

PlaylistRoutes.delete(
  "/:playlistId/remove-problem",
  authMiddleware,
  removeProblemFromPlaylist
);

export default PlaylistRoutes;
