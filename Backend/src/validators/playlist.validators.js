import { z } from "zod";

export const createPlaylistSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  description: z.string().optional(),
});

export const addProblemToPlaylistSchema = z.object({
  problemIds: z
    .array(
      z.string().min(1, { message: "problemId must be a nonempty string" })
    )
    .nonempty({ message: "At least one problemId is required" }),
});
