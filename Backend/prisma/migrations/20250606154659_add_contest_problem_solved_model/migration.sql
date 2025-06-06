-- CreateTable
CREATE TABLE "ContestProblemSolved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContestProblemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContestProblemSolved_userId_problemId_contestId_key" ON "ContestProblemSolved"("userId", "problemId", "contestId");

-- AddForeignKey
ALTER TABLE "ContestProblemSolved" ADD CONSTRAINT "ContestProblemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContestProblemSolved" ADD CONSTRAINT "ContestProblemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContestProblemSolved" ADD CONSTRAINT "ContestProblemSolved_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
