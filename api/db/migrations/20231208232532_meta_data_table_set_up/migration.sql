/*
  Warnings:

  - You are about to drop the column `geom` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `inpPrj` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `layer` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `layerId` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `geom` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `inPrj` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `layer` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `layerId` on the `Point` table. All the data in the column will be lost.
  - You are about to drop the column `geom` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the column `inPrj` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the column `layer` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the column `layerId` on the `Polygon` table. All the data in the column will be lost.
  - You are about to drop the column `layers` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Contours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Soils` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Line" DROP COLUMN "geom",
DROP COLUMN "inpPrj",
DROP COLUMN "layer",
DROP COLUMN "layerId",
ADD COLUMN     "departmentId" INTEGER,
ALTER COLUMN "notes" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "Point" DROP COLUMN "geom",
DROP COLUMN "inPrj",
DROP COLUMN "layer",
DROP COLUMN "layerId",
ADD COLUMN     "departmentId" INTEGER,
ALTER COLUMN "notes" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "Polygon" DROP COLUMN "geom",
DROP COLUMN "inPrj",
DROP COLUMN "layer",
DROP COLUMN "layerId",
ADD COLUMN     "departmentId" INTEGER,
ALTER COLUMN "notes" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "layers";

-- DropTable
DROP TABLE "Contours";

-- DropTable
DROP TABLE "Soils";

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Polygon" ADD CONSTRAINT "Polygon_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
