import DiscussionModel from "../models/discussion.model.js";

export const registerSocketEvents = (socket, io) => {
  socket.on("joinRoom", (problemId) => {
    socket.join(problemId);
    console.log(`Socket ${socket.id} joined room ${problemId}`);
  });

  socket.on("newMessage", async (data) => {
    try {
      const { problemId, userId, username, message } = data;
      const created = await DiscussionModel.create({
        problemId,
        userId,
        username,
        message,
      });
      io.to(problemId).emit("messageAdded", created);
    } catch (err) {
      console.error("Error while saving new discussion:", err);
      socket.emit("errorMessage", {
        error: "Error while saving new discussion",
      });
    }
  });
};

export const getDiscussions = async (req, res) => {
  try {
    const { problemId } = req.params;
    const messages = await DiscussionModel.find({ problemId }).sort({
      createdAt: 1,
    });
    return res.status(200).json({
      success: true,
      message: "Discussions fetched Successfully",
      messages,
    });
  } catch (err) {
    console.error("Error while fetching discussions:", err);
    return res.status(500).json({ error: "Error while fetching discussions" });
  }
};

export const upvoteDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { discussionUserId } = req.body;
    const userId = req.user.id;

    if (!discussionUserId) {
      return res.status(400).json({ error: "Missing msgUserId in body" });
    }

    const discussion = await DiscussionModel.findById({ _id: discussionId });
    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }
    if (userId === discussion.userId) {
      return res
        .status(400)
        .json({ error: "You are not allowed to upvote your own discussion" });
    }

    if (discussion.upvotedBy.includes(userId)) {
      return res
        .status(400)
        .json({ error: "User already upvoted this message" });
    }

    if (discussion.downvotedBy.includes(userId)) {
      discussion.downvotedBy.pull(userId);
      discussion.downvotes = Math.max(msg.downvotes - 1, 0);
    }

    discussion.upvotedBy.push(userId);
    discussion.upvotes += 1;

    await discussion.save();
    return res.status(200).json({
      success: true,
      message: "Discussion upvoted Successfully",
      discussion,
    });
  } catch (err) {
    console.error("Error while upvoting discussion:", err);
    return res.status(500).json({ error: "Error while upvoting discussion" });
  }
};

export const downvoteDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { discussionUserId } = req.body;
    const userId = req.user.id;

    if (!discussionUserId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const discussion = await DiscussionModel.findById({ _id: discussionId });

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }
    if (userId === discussion.userId) {
      return res
        .status(400)
        .json({ error: "You are not allowed to downvote your own discussion" });
    }
    if (discussion.downvotedBy.includes(userId)) {
      return res
        .status(400)
        .json({ error: "User already downvoted this discussion" });
    }

    if (discussion.upvotedBy.includes(discussionUserId)) {
      discussion.upvotedBy.pull(discussionUserId);
      discussion.upvotes = Math.max(msg.upvotes - 1, 0);
    }

    discussion.downvotedBy.push(discussionUserId);
    discussion.downvotes += 1;

    await discussion.save();
    return res.status(200).json({
      success: true,
      message: "Discussion downvoted Successfully",
      discussion,
    });
  } catch (err) {
    console.error("Error while downvoting discussion:", err);
    return res.status(500).json({ error: "Error while downvoting discussion" });
  }
};

export const deleteDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const discussion = await DiscussionModel.findById({ _id: discussionId });

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }
    await DiscussionModel.findOneAndDelete({ _id: discussionId });

    return res.status(200).json({
      success: true,
      message: "Discussion deleted Successfully",
    });
  } catch (error) {
    console.error("Error while deleting discussion:", err);
    return res.status(500).json({ error: "Error while deleting discussion" });
  }
};
