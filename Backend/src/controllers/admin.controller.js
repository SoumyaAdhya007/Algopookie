import { db } from "../libs/db.js";

export const adminGetAllUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        plan: true,
        isBlocked: true,
        createdAt: true,
      },
      orderBy: { createdAt: "asc" },
    });

    const solvedCounts = await db.problemSolved.groupBy({
      by: ["userId"],
      _count: { problemId: true },
    });

    const submissionCounts = await db.submission.groupBy({
      by: ["userId"],
      _count: { id: true },
    });

    const solvedMap = new Map(
      solvedCounts.map((row) => [row.userId, row._count.problemId])
    );
    const submissionMap = new Map(
      submissionCounts.map((row) => [row.userId, row._count.id])
    );

    // Assemble final array
    const result = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      plan: u.plan,
      isBlocked: u.isBlocked,
      totalProblemsSolved: solvedMap.get(u.id) || 0,
      totalSubmissions: submissionMap.get(u.id) || 0,
      createdAt: u.createdAt,
    }));

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users: result,
    });
  } catch (error) {
    console.error("Error while fetching all users:", error);
    return res.status(500).json({ error: "Error while fetching all users" });
  }
};

export const adminBlockUnblockUser = async (req, res) => {
  try {
    const targetUserId = req.params.userId;
    const { isBlocked } = req.body;

    if (req.body == undefined || typeof isBlocked !== "boolean") {
      return res.status(400).json({ error: "isBlocked must be boolean." });
    }

    if (req.user.id === targetUserId) {
      return res
        .status(400)
        .json({ error: "Admin cannot block/unblock themselves" });
    }

    const targetUser = await db.user.findUnique({
      where: { id: targetUserId },
      select: { id: true, role: true },
    });

    if (!targetUser) {
      return res.status(404).json({ error: "User not found." });
    }

    if (targetUser.role === "ADMIN") {
      return res
        .status(403)
        .json({ error: "Cannot block another admin user." });
    }

    await db.user.update({
      where: { id: targetUserId },
      data: { isBlocked },
    });

    return res.status(200).json({
      success: true,
      message: `User ${isBlocked ? "blocked" : "unblocked"} successfully`,
    });
  } catch (error) {
    console.error("Error while blocking or unblocking user:", error);
    return res
      .status(500)
      .json({ error: "Error while blocking or unblocking user" });
  }
};
