/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Line" DROP CONSTRAINT "Line_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Point" DROP CONSTRAINT "Point_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Polygon" DROP CONSTRAINT "Polygon_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_organizationId_fkey";

-- AlterTable
ALTER TABLE "Line" DROP COLUMN "departmentId",
DROP COLUMN "notes",
ADD COLUMN     "description" VARCHAR,
ADD COLUMN     "layerId" INTEGER,
ADD COLUMN     "project" VARCHAR;

-- AlterTable
ALTER TABLE "Point" DROP COLUMN "departmentId",
DROP COLUMN "notes",
ADD COLUMN     "description" VARCHAR,
ADD COLUMN     "layerId" INTEGER,
ADD COLUMN     "project" VARCHAR;

-- AlterTable
ALTER TABLE "Polygon" DROP COLUMN "departmentId",
DROP COLUMN "notes",
ADD COLUMN     "description" VARCHAR,
ADD COLUMN     "layerId" INTEGER,
ADD COLUMN     "project" VARCHAR;

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Layer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdById" INTEGER NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "Layer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Polygon" ADD CONSTRAINT "Polygon_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
