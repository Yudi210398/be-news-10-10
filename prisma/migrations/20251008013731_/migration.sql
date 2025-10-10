-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "image" VARCHAR(100) NOT NULL,
    "waktuBikin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);
