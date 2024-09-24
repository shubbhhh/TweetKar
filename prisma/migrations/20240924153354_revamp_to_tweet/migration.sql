/*
  Warnings:

  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnPost" DROP CONSTRAINT "TagsOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPost" DROP CONSTRAINT "TagsOnPost_tagId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "published";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TagsOnPost";
