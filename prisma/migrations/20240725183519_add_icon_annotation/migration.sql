/*
  Warnings:

  - Added the required column `icon` to the `Annotation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Annotation" ADD COLUMN     "icon" VARCHAR(40) NOT NULL;
