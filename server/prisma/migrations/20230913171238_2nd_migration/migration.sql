/*
  Warnings:

  - The values [friends,online_search,advertisement] on the enum `How_found` will be removed. If these variants are still used in the database, this will fail.
  - The values [english,spanish,french,german] on the enum `Preferred_language` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "How_found_new" AS ENUM ('FRIENDS', 'ONLINE_SEARCH', 'ADVERTISEMENT');
ALTER TABLE "Response" ALTER COLUMN "how_found" TYPE "How_found_new" USING ("how_found"::text::"How_found_new");
ALTER TYPE "How_found" RENAME TO "How_found_old";
ALTER TYPE "How_found_new" RENAME TO "How_found";
DROP TYPE "How_found_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Preferred_language_new" AS ENUM ('ENGLISH', 'SPANISH', 'FRENCH', 'GERMAN');
ALTER TABLE "Response" ALTER COLUMN "preferred_language" TYPE "Preferred_language_new" USING ("preferred_language"::text::"Preferred_language_new");
ALTER TYPE "Preferred_language" RENAME TO "Preferred_language_old";
ALTER TYPE "Preferred_language_new" RENAME TO "Preferred_language";
DROP TYPE "Preferred_language_old";
COMMIT;
