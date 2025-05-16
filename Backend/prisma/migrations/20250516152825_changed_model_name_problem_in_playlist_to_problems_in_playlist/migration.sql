/*
  Warnings:

  - You are about to drop the `ProblemInPlaylist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProblemInPlaylist" DROP CONSTRAINT "ProblemInPlaylist_playListId_fkey";

-- DropForeignKey
ALTER TABLE "ProblemInPlaylist" DROP CONSTRAINT "ProblemInPlaylist_problemId_fkey";

-- DropTable
DROP TABLE "ProblemInPlaylist";

-- CreateTable
CREATE TABLE "ProblemsInPlaylist" (
    "id" TEXT NOT NULL,
    "playListId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProblemsInPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProblemsInPlaylist_playListId_problemId_key" ON "ProblemsInPlaylist"("playListId", "problemId");

-- AddForeignKey
ALTER TABLE "ProblemsInPlaylist" ADD CONSTRAINT "ProblemsInPlaylist_playListId_fkey" FOREIGN KEY ("playListId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProblemsInPlaylist" ADD CONSTRAINT "ProblemsInPlaylist_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
