import { io } from "../index.js";
import { db } from "./db.js";

export const scheduleContestEvents = (contestObj) => {
  const now = new Date().getTime();
  const startMs = new Date(contestObj.startTime).getTime();
  const endMs = new Date(contestObj.endTime).getTime();

  const msUntilStart = startMs - now;
  const msUntilEnd = endMs - now;

  if (msUntilStart > 0) {
    setTimeout(() => {
      io.emit("contestStarted", {
        contestId: contestObj.id,
        title: contestObj.title,
      });
      console.log(`Emitted contestStarted for ${contestObj.id}`);
    }, msUntilStart);
  } else {
    io.emit("contestStarted", {
      contestId: contestObj.id,
      title: contestObj.title,
    });
    console.log(`contestStarted (late) for ${contestObj.id}`);
  }

  if (msUntilEnd > 0) {
    setTimeout(() => {
      io.emit("contestEnded", {
        contestId: contestObj.id,
      });
      console.log(`Emitted contestEnded for ${contestObj.id}`);
    }, msUntilEnd);
  } else {
    io.emit("contestEnded", {
      contestId: contestObj.id,
    });
    console.log(`contestEnded (late) for ${contestObj.id}`);
  }
};

export const initAllContestSchedules = async () => {
  const upcomingContests = await db.contest.findMany({
    where: { endTime: { gt: new Date() } },
    select: { id: true, title: true, startTime: true, endTime: true },
  });

  for (const contest of upcomingContests) {
    scheduleContestEvents(contest);
  }
};
