-- DropForeignKey
ALTER TABLE "Layer" DROP CONSTRAINT "Layer_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Point" DROP CONSTRAINT "Point_createdById_fkey";

-- AlterTable
ALTER TABLE "Layer" ALTER COLUMN "createdById" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Point" ALTER COLUMN "createdById" DROP DEFAULT,
ALTER COLUMN "createdById" SET DATA TYPE TEXT;
DROP SEQUENCE "Point_createdById_seq";

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("auth0Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("auth0Id") ON DELETE RESTRICT ON UPDATE CASCADE;
