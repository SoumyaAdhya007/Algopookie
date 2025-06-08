import { db } from "../libs/db.js";
import { scheduleContestEvents } from "../libs/contestScheduler.js";

export const adminCreateContest = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { title, description, difficulty, startTime, endTime, problemIds } =
      req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Contest title is required." });
    }
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
      return res
        .status(400)
        .json({ error: "Invalid startTime/endTime. Ensure end > start." });
    }
    if (
      !Array.isArray(problemIds) ||
      problemIds.some((pid) => typeof pid !== "string")
    ) {
      return res
        .status(400)
        .json({ error: "problemIds must be string array." });
    }

    const contest = await db.contest.create({
      data: {
        title,
        description: description || null,
        difficulty,
        startTime: start,
        endTime: end,
        createdBy: adminId,
        userId: adminId,
        problems: {
          create: problemIds.map((pid) => ({ problemId: pid })),
        },
      },
      include: {
        problems: {
          include: { problem: { select: { id: true, title: true } } },
        },
      },
    });

    scheduleContestEvents(contest);

    return res.status(201).json({
      success: true,
      message: "Contest created successfully",
      contest,
    });
  } catch (error) {
    console.error("Error while creating contest:", error);
    return res.status(500).json({ error: "Error while creating contest" });
  }
};

export const adminGetAllContests = async (req, res) => {
  try {
    const contests = await db.contest.findMany({
      include: {
        creator: { select: { id: true, name: true, email: true } },
        problems: {
          include: { problem: true },
        },
      },
    });
    return res.status(200).json({
      success: true,
      message: "Contest fetched Successfully",
      contests,
    });
  } catch (error) {
    console.error("Error while fetching contests:", error);
    return res.status(500).json({ error: "Error while fetching contests" });
  }
};

export const adminGetContestById = async (req, res) => {
  try {
    const contestId = req.params.contestId;

    if (!contestId) {
      return res.status(400).json({ error: "ContestId ID is required." });
    }

    const contest = await db.contest.findUnique({
      where: { id: contestId },
      include: {
        creator: { select: { id: true, name: true, email: true } },
        problems: { include: { problem: true } },
        registrations: {
          include: { user: { select: { id: true, name: true } } },
        },
        contestSubmissions: {
          include: {
            submission: {
              include: {
                user: { select: { id: true, name: true, email: true } },
                problem: true,
              },
            },
          },
        },
      },
    });
    if (!contest) {
      return res.status(404).json({ error: "Contest not found." });
    }
    return res.status(200).json({
      success: true,
      message: "Contest fetched Successfully",
      contest,
    });
  } catch (error) {
    console.error("Error while fetching contest:", error);
    return res.status(500).json({ error: "Error while fetching contest" });
  }
};

export const adminUpdateContest = async (req, res) => {
  try {
    const contestId = req.params.contestId;

    if (!contestId) {
      return res.status(400).json({ error: "ContestId ID is required." });
    }

    const { title, description, startTime, endTime, problemIds } = req.body;

    const existing = await db.contest.findUnique({
      where: { id: contestId },
      select: { startTime: true },
    });
    if (!existing) {
      return res.status(404).json({ error: "Contest not found." });
    }

    if (new Date() >= existing.startTime) {
      return res
        .status(400)
        .json({ error: "Cannot update a contest that has started." });
    }

    const data = {};
    if (title) data.title = title;
    if (description !== undefined) data.description = description;
    if (startTime) data.startTime = new Date(startTime);
    if (endTime) data.endTime = new Date(endTime);

    if (Array.isArray(problemIds)) {
      await db.contestProblem.deleteMany({ where: { contestId } });
      data.problems = {
        create: problemIds.map((pid) => ({ problemId: pid })),
      };
    }

    const updated = await db.contest.update({
      where: { id: contestId },
      data,
      include: {
        problems: {
          include: { problem: { select: { id: true, title: true } } },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Contest updated Successfully",
      contest: updated,
    });
  } catch (error) {
    console.error("Error while updating contest:", error);
    return res.status(500).json({ error: "Error while updating contest" });
  }
};

export const adminDeleteContest = async (req, res) => {
  try {
    const contestId = req.params.contestId;

    if (!contestId) {
      return res.status(400).json({ error: "ContestId ID is required." });
    }

    const existing = await db.contest.findUnique({
      where: { id: contestId },
      select: { startTime: true },
    });
    if (!existing) {
      return res.status(404).json({ error: "Contest not found." });
    }

    if (new Date() >= existing.startTime) {
      return res
        .status(400)
        .json({ error: "Cannot delete a contest that has started." });
    }

    await db.contest.delete({ where: { id: contestId } });

    return res
      .status(200)
      .json({ success: true, message: "Contest deleted successfully" });
  } catch (error) {
    console.error("Error while deleting contest:", error);
    return res.status(500).json({ error: "Error while deleting contest" });
  }
};

export const listActiveContests = async (req, res) => {
  try {
    const contests = await db.contest.findMany({
      include: {
        creator: {
          select: { id: true, name: true },
        },
        registrations: {
          select: { userId: true },
        },
        problems: {
          include: {
            problem: true, // The actual problem details
          },
        },
        contestSubmissions: true, // Submissions made in the contest
      },
      orderBy: {
        startTime: "asc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Contest fetched Successfully",
      contests,
    });
  } catch (error) {
    console.error("Error while fetching contests:", error);
    return res.status(500).json({ error: "Error while fetching contests" });
  }
};

export const getContestDetails = async (req, res) => {
  try {
    const contestId = req.params.contestId;

    if (!contestId) {
      return res.status(400).json({ error: "ContestId ID is required." });
    }

    const contest = await db.contest.findUnique({
      where: { id: contestId },
      include: {
        creator: { select: { id: true, name: true } },
        problems: { include: { problem: true } },
        registrations: { where: { userId: req.user.id } },
      },
    });

    if (!contest) {
      return res.status(404).json({ error: "Contest not found." });
    }

    const isRegistered = contest.registrations.length > 0;
    if (!isRegistered)
      return res.status(403).json({ error: "Not registered." });

    return res.status(200).json({
      success: true,
      message: "Contest fetched Successfully",
      contest,
    });
  } catch (error) {
    console.error("Error while fetching contests:", error);
    return res.status(500).json({ error: "Error while fetching contests" });
  }
};

export const registerForContest = async (req, res) => {
  try {
    const userId = req.user.id;
    const contestId = req.params.contestId;

    if (!contestId) {
      return res.status(400).json({ error: "ContestId ID is required." });
    }

    const contest = await db.contest.findUnique({
      where: { id: contestId },
      select: { startTime: true },
    });
    if (!contest) {
      return res.status(404).json({ error: "Contest not found." });
    }

    const now = new Date();
    if (now >= contest.endTime) {
      return res
        .status(400)
        .json({ error: "Cannot register after contest has ended." });
    }

    await db.contestRegistration.upsert({
      where: {
        userId_contestId: { userId, contestId },
      },
      update: {},
      create: { userId, contestId },
    });

    return res
      .status(201)
      .json({ success: true, message: "Registered successfully." });
  } catch (error) {
    console.error("Error while register contest:", error);
    return res.status(500).json({ error: "Error while register contest" });
  }
};

export const submitContestProblem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { contestId, problemId, submissionId } = req.body;

    const contest = await db.contest.findUnique({
      where: { id: contestId },
      select: { startTime: true, endTime: true },
    });

    if (!contest) {
      return res.status(404).json({ error: "Contest not found." });
    }

    const now = new Date();
    if (now < contest.startTime || now > contest.endTime) {
      return res
        .status(400)
        .json({ error: "Contest is not accepting submissions at this time." });
    }

    const contestSubmission = await db.contestSubmission.create({
      data: {
        userId,
        contestId,
        problemId,
        submissionId,
      },
    });
    await db.contestProblemSolved.upsert({
      where: {
        userId_problemId_contestId: {
          userId,
          problemId,
          contestId,
        },
      },
      update: {},
      create: {
        userId,
        problemId,
        contestId,
      },
    });
    return res.status(201).json({
      success: true,
      message: "Submission received for contest.",
      submission: contestSubmission,
    });
  } catch (error) {
    console.error("Error in submitContestProblem:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getContestProblemSubmissions = async (req, res) => {
  try {
    const { contestId, problemId } = req.params;
    const userId = req.user.id;

    const submissions = await db.contestSubmission.findMany({
      where: {
        userId,
        contestId,
        problemId,
      },
      include: {
        submission: true,
        User: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({ success: true, submissions });
  } catch (error) {
    console.error("Error in getContestProblemSubmissions:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getContestProblemSolvedUser = async (req, res) => {
  try {
    const { contestId } = req.params;
    const userId = req.user.id;

    const problemSolved = await db.contestProblemSolved.findMany({
      where: {
        userId,
        contestId,
      },
    });

    return res.status(200).json({ success: true, problemSolved });
  } catch (error) {
    console.error("Error in getContestProblemSolvedUsers:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getContestSummaryStats = async (req, res) => {
  const { contestId } = req.params;
  try {
    const totalProblems = await db.contest
      .findUnique({ where: { id: contestId } })
      .problems()
      .then((list) => list.length);

    const totalSubmissions = await db.contestSubmission.count({
      where: { contestId },
    });

    const totalSolved = await db.contestProblemSolved.count({
      where: { contestId },
    });

    return res.status(200).json({
      success: true,
      summary: { totalProblems, totalSubmissions, totalSolved },
    });
  } catch (error) {
    console.error("Error in getContestSummaryStats:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
