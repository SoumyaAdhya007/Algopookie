import { db } from "../libs/db.js";

export const getAllListDetails = async (req, res) => {
  const userId = req.user.id;
  try {
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
    console.error("Error fetching playlists", error);
    res.status(500).json({
      error: "Error fetching playlists",
    });
  }
};

export const getPlaylistDetails = async (req, res) => {
  const { playlistId } = req.params;
  try {
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
  const { name, description } = req.body;
  const userId = req.user.id;
  try {
    const playlist = await db.playlist.create({
      data: {
        name,
        description,
        userId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Playlist created successfully",
      playlist,
    });
  } catch (error) {
    console.error("Error creating playlist", error);
    res.status(500).json({
      error: "Error creating playlist",
    });
  }
};

export const addProblemToPlaylist = async (req, res) => {
  const { playlistId } = req.params;
  const { problemIds } = req.body;
  try {
    if (!Array.isArray(problemIds) || problemIds.length === 0) {
      return res.status(400).json({
        error: "Invalid or missing problemId",
      });
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
    console.error("Error while adding problems to playlist", error);
    res.status(500).json({
      error: "Error while adding problems to playlist",
    });
  }
};

export const deletePlaylist = async (req, res) => {
  const { playlistId } = req.params;
  try {
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
    console.error("Error while deleting playlist", error);
    res.status(500).json({
      error: "Error while deleting playlist",
    });
  }
};

export const removeProblemFromPlaylist = async (req, res) => {
  const { playlistId } = req.params;
  const { problemIds } = req.body;
  try {
    if (!Array.isArray(problemIds) || problemIds.length === 0) {
      return res.status(404).json({
        error: "Invalid or missing problemsId",
      });
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
    console.error("Error while removing problem from playlist", error);
    res.status(500).json({
      error: "Error while removing problem from playlist",
    });
  }
};
