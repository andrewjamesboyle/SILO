/*
  Warnings:

  - You are about to drop the `contours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `line` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `point` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `polygon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `soils` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "line" DROP CONSTRAINT "line_layerId_fkey";

-- DropForeignKey
ALTER TABLE "point" DROP CONSTRAINT "point_layerId_fkey";

-- DropForeignKey
ALTER TABLE "polygon" DROP CONSTRAINT "polygon_layerId_fkey";

-- DropTable
DROP TABLE "contours";

-- DropTable
DROP TABLE "line";

-- DropTable
DROP TABLE "point";

-- DropTable
DROP TABLE "polygon";

-- DropTable
DROP TABLE "soils";
