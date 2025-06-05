import mongoose from "mongoose";

const AIAssistantChatSchema = new mongoose.Schema({
  username: { type: String, required: true },
  userId: { type: String, required: true },
  problemId: { type: String, required: true },
  sender: { type: String, enum: ["user", "ai"], required: true },
  content: { type: String, required: true },
  codeJSON: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const AIAssistantChatModel = mongoose.model(
  "AIAssistantChat",
  AIAssistantChatSchema
);
