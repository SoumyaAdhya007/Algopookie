import { db } from "../libs/db.js";

export const getAllSubmissions = async (req, res) => {
  const userId = req.user.id;
  try {
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
    console.error("Error while fetching submissions", error);
    res.status(500).json({
      error: "Error while fetching submissions",
    });
  }
};

export const getSubmissionsForProblem = async (req, res) => {
  const userId = req.user.id;
  const problemId = req.params.problemId;
  try {
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
    console.error("Error while fetching submissions", error);
    res.status(500).json({
      error: "Error while fetching submissions",
    });
  }
};

export const getAllSubmissionsCountForProblem = async (req, res) => {
  const problemId = req.params.problemId;
  try {
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
