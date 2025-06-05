import express from "express";
import {
  deleteDiscussion,
  downvoteDiscussion,
  getDiscussions,
  upvoteDiscussion,
} from "../controllers/discussion.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const DiscussionRouter = express.Router();

DiscussionRouter.get("/:problemId", authMiddleware, getDiscussions);

DiscussionRouter.post(
  "/:discussionId/upvote",
  authMiddleware,
  upvoteDiscussion
);

DiscussionRouter.post(
  "/:discussionId/downvote",
  authMiddleware,
  downvoteDiscussion
);
DiscussionRouter.delete("/:discussionId", authMiddleware, deleteDiscussion);

export default DiscussionRouter;
