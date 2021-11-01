-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'PUBLISHER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isAssistant" TEXT NOT NULL,
    "teamId" TEXT,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "number" TEXT,
    "position" TEXT,
    "teamId" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorScheme" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "primary" TEXT NOT NULL,
    "secondary" TEXT NOT NULL,
    "teamId" TEXT,

    CONSTRAINT "ColorScheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "conference" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "established" TEXT NOT NULL,
    "wins" INTEGER,
    "losses" INTEGER,
    "winPercentage" DOUBLE PRECISION,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RW_DataMigration_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_role_userId_key" ON "UserRole"("role", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_handle_key" ON "Coach"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Player_handle_key" ON "Player"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Player_slug_key" ON "Player"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ColorScheme_teamId_key" ON "ColorScheme"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "ColorScheme_primary_secondary_key" ON "ColorScheme"("primary", "secondary");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_handle_key" ON "Team"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team_abbreviation_key" ON "Team"("abbreviation");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorScheme" ADD CONSTRAINT "ColorScheme_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
