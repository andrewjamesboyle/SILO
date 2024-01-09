/*
  Warnings:

  - Changed the type of `createdById` on the `Layer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Layer" DROP CONSTRAINT "Layer_createdById_fkey";

-- AlterTable
ALTER TABLE "Layer" DROP COLUMN "createdById",
ADD COLUMN     "createdById" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
