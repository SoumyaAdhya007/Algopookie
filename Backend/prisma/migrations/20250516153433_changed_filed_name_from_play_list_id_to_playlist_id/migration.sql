/*
  Warnings:

  - You are about to drop the column `playListId` on the `ProblemsInPlaylist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[playlistId,problemId]` on the table `ProblemsInPlaylist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playlistId` to the `ProblemsInPlaylist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProblemsInPlaylist" DROP CONSTRAINT "ProblemsInPlaylist_playListId_fkey";

-- DropIndex
DROP INDEX "ProblemsInPlaylist_playListId_problemId_key";

-- AlterTable
ALTER TABLE "ProblemsInPlaylist" DROP COLUMN "playListId",
ADD COLUMN     "playlistId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProblemsInPlaylist_playlistId_problemId_key" ON "ProblemsInPlaylist"("playlistId", "problemId");

-- AddForeignKey
ALTER TABLE "ProblemsInPlaylist" ADD CONSTRAINT "ProblemsInPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
