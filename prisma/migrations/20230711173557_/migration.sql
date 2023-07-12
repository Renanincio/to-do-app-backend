/*
  Warnings:

  - You are about to drop the column `checked` on the `task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "checked",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
