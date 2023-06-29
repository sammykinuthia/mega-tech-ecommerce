/*
  Warnings:

  - You are about to drop the column `images` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `image` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "images",
DROP COLUMN "image",
ADD COLUMN     "image" BYTEA NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentCategory" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
