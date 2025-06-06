/*
  Warnings:

  - Added the required column `difficulty` to the `Contest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contest" ADD COLUMN     "difficulty" "Difficulty" NOT NULL;
