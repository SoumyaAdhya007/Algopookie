import mongoose from "mongoose";
const DiscussionSchema = new mongoose.Schema(
  {
    problemId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    upvotedBy: {
      type: [String], // array of userId strings
      default: [],
    },
    downvotedBy: {
      type: [String], // array of userId strings
      default: [],
    },
  },
  { timestamps: true }
);

const DiscussionModel = mongoose.model("Discussion", DiscussionSchema);
export default DiscussionModel;
