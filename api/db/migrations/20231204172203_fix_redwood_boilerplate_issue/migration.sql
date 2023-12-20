/*
  Warnings:

  - You are about to drop the `Layer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `line` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `point` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `polygon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `soils` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Layer" DROP CONSTRAINT "Layer_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Layer" DROP CONSTRAINT "Layer_projectId_fkey";

-- DropForeignKey
ALTER TABLE "line" DROP CONSTRAINT "line_layerId_fkey";

-- DropForeignKey
ALTER TABLE "point" DROP CONSTRAINT "point_layerId_fkey";

-- DropForeignKey
ALTER TABLE "polygon" DROP CONSTRAINT "polygon_layerId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "layers" TEXT[];

-- DropTable
DROP TABLE "Layer";

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

-- CreateTable
CREATE TABLE "Contours" (
    "gid" SERIAL NOT NULL,
    "elevation" DECIMAL(10,0),
    "type" DECIMAL(5,0),
    "update_sta" DECIMAL(19,11),
    "shape_leng" DECIMAL(19,11),
    "geometry" TEXT NOT NULL,

    CONSTRAINT "Contours_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "Soils" (
    "ogc_fid" SERIAL NOT NULL,
    "areasymbol" VARCHAR(20),
    "spatialver" DECIMAL(10,0),
    "musym" VARCHAR(6),
    "mukey" VARCHAR(30),
    "geometry" TEXT NOT NULL,

    CONSTRAINT "Soils_pkey" PRIMARY KEY ("ogc_fid")
);

-- CreateTable
CREATE TABLE "Line" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "inpPrj" VARCHAR,
    "notes" TEXT,
    "geom" TEXT NOT NULL,
    "layerId" INTEGER,
    "layer" VARCHAR,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Point" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "inPrj" VARCHAR,
    "notes" TEXT,
    "geom" TEXT NOT NULL,
    "layerId" INTEGER,
    "layer" VARCHAR,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Polygon" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "inPrj" VARCHAR,
    "notes" TEXT,
    "geom" TEXT NOT NULL,
    "layerId" INTEGER,
    "layer" VARCHAR,

    CONSTRAINT "Polygon_pkey" PRIMARY KEY ("id")
);
