// utils/contestScheduler.js

import { io } from "../index.js";
import { db } from "./db.js";

/**
 * Schedules two timeouts for a given contest:
 *  - At contest.startTime: emit "contestStarted"
 *  - At contest.endTime: emit "contestEnded"
 *
 * @param {object} contestObj  A Prisma Contest record with { id, title, startTime, endTime }
 */
export const scheduleContestEvents = (contestObj) => {
  const now = new Date().getTime();
  const startMs = new Date(contestObj.startTime).getTime();
  const endMs = new Date(contestObj.endTime).getTime();

  const msUntilStart = startMs - now;
  const msUntilEnd = endMs - now;

  // If startTime is in the future, schedule "contestStarted"
  if (msUntilStart > 0) {
    setTimeout(() => {
      // Emit to all connected clients (you can also emit to a namespace or room)
      io.emit("contestStarted", {
        contestId: contestObj.id,
        title: contestObj.title,
      });
      console.log(`Emitted contestStarted for ${contestObj.id}`);
    }, msUntilStart);
  } else {
    // If startTime <= now, it’s already “started”—you might still emit immediately
    io.emit("contestStarted", {
      contestId: contestObj.id,
      title: contestObj.title,
    });
    console.log(`contestStarted (late) for ${contestObj.id}`);
  }

  // If endTime is in the future, schedule "contestEnded"
  if (msUntilEnd > 0) {
    setTimeout(() => {
      io.emit("contestEnded", {
        contestId: contestObj.id,
      });
      console.log(`Emitted contestEnded for ${contestObj.id}`);
    }, msUntilEnd);
  } else {
    // If endTime <= now, it's already ended—emit immediately
    io.emit("contestEnded", {
      contestId: contestObj.id,
    });
    console.log(`contestEnded (late) for ${contestObj.id}`);
  }
};

/**
 * Call this once on server start to schedule events for all future contests.
 */
export const initAllContestSchedules = async () => {
  // Fetch all contests whose endTime is still in the future
  const upcomingContests = await db.contest.findMany({
    where: { endTime: { gt: new Date() } },
    select: { id: true, title: true, startTime: true, endTime: true },
  });

  for (const contest of upcomingContests) {
    scheduleContestEvents(contest);
  }
};
