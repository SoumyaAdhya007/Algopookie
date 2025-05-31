import { db } from "../libs/db.js";
import { userIdSchema } from "../validators/auth.validators.js";

export const getAllSubmissions = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;

    const submissions = await db.submission.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Submissions fetched successfully",
      submissions,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while fetching submissions", error);
    res.status(500).json({
      error: "Error while fetching submissions",
    });
  }
};

export const getSubmissionsForProblem = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;
    const problemId = req.params.problemId;

    if (!problemId) {
      return res.status(400).json({ error: "Problem ID is required." });
    }

    const problem = await db.problem.findUnique({
      where: {
        id: problemId,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    const submissions = await db.submission.findMany({
      where: {
        userId,
        problemId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Submissions fetched successfully",
      submissions,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while fetching submissions", error);
    res.status(500).json({
      error: "Error while fetching submissions",
    });
  }
};

export const getAllSubmissionsCountForProblem = async (req, res) => {
  try {
    const problemId = req.params.problemId;

    if (!problemId) {
      return res.status(400).json({ error: "Problem ID is required." });
    }
    
    const problem = await db.problem.findUnique({
      where: {
        id: problemId,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    const count = await db.submission.count({
      where: {
        problemId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Submissions fetched successfully",
      count,
    });
  } catch (error) {
    console.error("Error while fetching submissions", error);
    res.status(500).json({
      error: "Error while fetching submissions",
    });
  }
};
