-- CreateTable
CREATE TABLE "contours" (
    "gid" SERIAL NOT NULL,
    "elevation" DECIMAL(10,0),
    "type" DECIMAL(5,0),
    "update_sta" DECIMAL(19,11),
    "shape_leng" DECIMAL(19,11),

    CONSTRAINT "contours_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "soils" (
    "ogc_fid" SERIAL NOT NULL,
    "areasymbol" VARCHAR(20),
    "spatialver" DECIMAL(10,0),
    "musym" VARCHAR(6),
    "mukey" VARCHAR(30),

    CONSTRAINT "soils_pkey" PRIMARY KEY ("ogc_fid")
);

-- CreateTable
CREATE TABLE "line" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "in_prj" VARCHAR,
    "notes" TEXT,
    "layerId" INTEGER NOT NULL,

    CONSTRAINT "line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "point" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "in_prj" VARCHAR,
    "notes" TEXT,
    "layerId" INTEGER NOT NULL,

    CONSTRAINT "point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "polygon" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR,
    "in_prj" VARCHAR,
    "notes" TEXT,
    "layerId" INTEGER NOT NULL,

    CONSTRAINT "polygon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "line" ADD CONSTRAINT "line_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "point" ADD CONSTRAINT "point_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "polygon" ADD CONSTRAINT "polygon_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
