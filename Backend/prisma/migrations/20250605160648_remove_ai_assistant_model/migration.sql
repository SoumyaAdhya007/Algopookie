/*
  Warnings:

  - You are about to drop the `AssistanceRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AssistanceRequest" DROP CONSTRAINT "AssistanceRequest_problemId_fkey";

-- DropForeignKey
ALTER TABLE "AssistanceRequest" DROP CONSTRAINT "AssistanceRequest_userId_fkey";

-- DropTable
DROP TABLE "AssistanceRequest";
