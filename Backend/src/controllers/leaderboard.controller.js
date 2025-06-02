import { db } from "../libs/db.js";

function formatUTCDate(date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export const getDailyLeaderboard = async (req, res) => {
  try {
    const now = new Date();
    const todayY = now.getUTCFullYear();
    const todayM = now.getUTCMonth();
    const todayD = now.getUTCDate();
    let targetDate = new Date(Date.UTC(todayY, todayM, todayD, 0, 0, 0));

    const startOfDay = targetDate;
    const endOfDay = new Date(startOfDay);
    endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);

    const submissionPairs = await db.submission.groupBy({
      by: ["userId", "problemId"],
      where: {
        createdAt: {
          gte: startOfDay,
          lt: endOfDay,
        },
      },
      _count: {
        _all: true,
      },
    });
    const userProblemCountMap = new Map();
    for (const pair of submissionPairs) {
      const userId = pair.userId;
      userProblemCountMap.set(
        userId,
        (userProblemCountMap.get(userId) || 0) + 1
      );
    }

    const leaderboardRaw = Array.from(userProblemCountMap.entries()).map(
      ([userId, solvedCount]) => ({ userId, solvedCount })
    );
    leaderboardRaw.sort((a, b) => b.solvedCount - a.solvedCount);

    const leaderboard = await Promise.all(
      leaderboardRaw.map(async (entry) => {
        const user = await db.user.findUnique({
          where: { id: entry.userId },
          select: { id: true, name: true, email: true },
        });
        return {
          userId: entry.userId,
          userName: user.name,
          solvedCount: entry.solvedCount,
        };
      })
    );

    return res.status(200).json({
      success: true,
      message: "Leaderboard fetched successfully",
      date: formatUTCDate(startOfDay),
      leaderboard,
    });
  } catch (error) {
    console.error("Error while getting daily Leaderboard:", error);
    return res
      .status(500)
      .json({ error: "Error while getting daily Leaderboard" });
  }
};
