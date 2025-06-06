import { db } from "../libs/db.js";
import { userIdSchema } from "../validators/auth.validators.js";
import { formatZodError } from "../validators/formatZodError.js";
import {
  addProblemToPlaylistSchema,
  createPlaylistSchema,
} from "../validators/playlist.validators.js";

export const getAllListDetails = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;

    const playlists = await db.playlist.findMany({
      where: {
        userId,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Playlists fetched successfully",
      playlists,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error fetching playlists", error);
    res.status(500).json({
      error: "Error fetching playlists",
    });
  }
};

export const getPublicPlaylists = async (req, res) => {
  try {
    const playlists = await db.playlist.findMany({
      where: { isPublic: true },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Playlist fetched successfully",
      playlists,
    });
  } catch (error) {
    console.error("Error fetching public playlists:", error);
    return res.status(500).json({ error: "Error fetching public playlists" });
  }
};

export const getPlaylistDetails = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const viewerId = req.user.id;

    if (!playlistId) {
      return res.status(400).json({ error: "Playlist ID is required." });
    }

    const playlist = await db.playlist.findUnique({
      where: {
        id: playlistId,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });

    if (!playlist.isPublic && playlist.userId !== viewerId) {
      return res.status(403).json({ error: "Access denied." });
    }

    if (!playlist) {
      return res.status(404).json({
        error: "Playlist not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Playlist fetched successfully",
      playlist,
    });
  } catch (error) {
    console.error("Error fetching playlist", error);
    res.status(500).json({
      error: "Error fetching playlist",
    });
  }
};

export const createPlaylist = async (req, res) => {
  try {
    const { name, description, isPublic } = createPlaylistSchema.parse(
      req.body
    );
    const userId = userIdSchema.parse(req.user).id;

    const playlist = await db.playlist.create({
      data: {
        name,
        description,
        isPublic,
        userId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Playlist created successfully",
      playlist,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error creating playlist", error);
    res.status(500).json({
      error: "Error creating playlist",
    });
  }
};

export const addProblemToPlaylist = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;
    const { playlistId } = req.params;
    const { problemIds } = addProblemToPlaylistSchema.parse(req.body);

    if (!playlistId) {
      return res.status(400).json({ error: "Playlist ID is required." });
    }

    const existing = await db.playlist.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Playlist not found." });
    }

    if (existing.userId !== userId) {
      return res.status(403).json({ error: "Not your playlist." });
    }

    const problemsInPlaylist = await db.problemsInPlaylist.createMany({
      data: problemIds.map((problemId) => ({
        playlistId,
        problemId,
      })),
    });

    res.status(201).json({
      success: true,
      message: "Problems added to playlist successfully",
      problemsInPlaylist,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while adding problems to playlist", error);
    res.status(500).json({
      error: "Error while adding problems to playlist",
    });
  }
};

export const deletePlaylist = async (req, res) => {
  try {
    const userId = userIdSchema(req.user).id;
    const { playlistId } = req.params;

    if (!playlistId) {
      return res.status(400).json({ error: "Playlist ID is required." });
    }

    const existing = await db.playlist.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Playlist not found." });
    }

    if (existing.userId !== userId) {
      return res.status(403).json({ error: "Not your playlist." });
    }
    const deletePlaylist = await db.playlist.delete({
      where: {
        id: playlistId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Playlist deleted successfully",
      deletePlaylist,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while deleting playlist", error);
    res.status(500).json({
      error: "Error while deleting playlist",
    });
  }
};

export const removeProblemFromPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { problemIds } = addProblemToPlaylistSchema.parse(req.body);

    if (!playlistId) {
      return res.status(400).json({ error: "Playlist ID is required." });
    }

    const existing = await db.playlist.findUnique({
      where: { id: playlistId },
      select: { userId: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Playlist not found." });
    }

    if (existing.userId !== userId) {
      return res.status(403).json({ error: "Not your playlist." });
    }

    const deleteProblem = await db.problemsInPlaylist.deleteMany({
      where: {
        playlistId,
        problemId: {
          in: problemIds,
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Problem removed from playlist successfully",
      deleteProblem,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while removing problem from playlist", error);
    res.status(500).json({
      error: "Error while removing problem from playlist",
    });
  }
};
