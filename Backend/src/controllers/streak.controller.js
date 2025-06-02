import { db } from "../libs/db.js";
import { userIdSchema } from "../validators/auth.validators.js";
import { formatZodError } from "../validators/formatZodError.js";

function formatUTCDate(date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export const getUserStreak = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;

    const activities = await db.userDailyActivity.findMany({
      where: { userId },
      select: { date: true },
      orderBy: { date: "asc" },
    });

    if (!activities.length) {
      return res.status(200).json({
        success: true,
        message: "User streak fetched successfully",
        solvedDates: [],
        currentStreak: 0,
      });
    }

    const uniqueDates = activities.map((act) => formatUTCDate(act.date));

    let streak = 1;
    let lastDate = new Date(uniqueDates[uniqueDates.length - 1] + "T00:00:00Z");

    for (let i = uniqueDates.length - 2; i >= 0; i--) {
      const thisDate = new Date(uniqueDates[i] + "T00:00:00Z");
      const diffInMs = lastDate.getTime() - thisDate.getTime();
      const diffDays = diffInMs / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        streak += 1;
        lastDate.setUTCDate(lastDate.getUTCDate() - 1);
      } else {
        break;
      }
    }

    return res.status(200).json({
      success: true,
      message: "User streak fetched successfully",
      solvedDates: uniqueDates,
      currentStreak: streak,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while fetching getUserStreak:", error);
    return res
      .status(500)
      .json({ error: "Error while fetching getUserStreak:" });
  }
};
