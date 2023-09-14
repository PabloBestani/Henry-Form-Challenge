-- CreateEnum
CREATE TYPE "Preferred_language" AS ENUM ('english', 'spanish', 'french', 'german');

-- CreateEnum
CREATE TYPE "How_found" AS ENUM ('friends', 'online_search', 'advertisement');

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "start_date" TIMESTAMP(3),
    "preferred_language" "Preferred_language" NOT NULL,
    "how_found" "How_found" NOT NULL,
    "newsletter_subscription" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);
