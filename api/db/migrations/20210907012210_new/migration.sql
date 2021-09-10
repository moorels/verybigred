-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vault" (
    "id" SERIAL NOT NULL,
    "vaultname" TEXT NOT NULL,
    "vaultusername" TEXT NOT NULL,
    "vaultpassword" TEXT NOT NULL,
    "vaultpassword2" TEXT NOT NULL,
    "userEmailId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "landline" TEXT,
    "mobile" TEXT,
    "website" TEXT,
    "street" TEXT,
    "suburb" TEXT,
    "notes" TEXT,
    "contactEmailId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "appointEmailId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fields1" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "field5" TEXT,
    "field6" TEXT,
    "field7" TEXT,
    "field8" TEXT,
    "field9" TEXT,
    "field10" TEXT,
    "field11" TEXT,
    "field12" TEXT,
    "field13" TEXT,
    "field14" TEXT,
    "field15" TEXT,
    "fields1Id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fields2" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "field5" TEXT,
    "field6" TEXT,
    "field7" TEXT,
    "field8" TEXT,
    "field9" TEXT,
    "field10" TEXT,
    "field11" TEXT,
    "field12" TEXT,
    "field13" TEXT,
    "field14" TEXT,
    "field15" TEXT,
    "fields2Id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fields3" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "field5" TEXT,
    "field6" TEXT,
    "field7" TEXT,
    "field8" TEXT,
    "field9" TEXT,
    "field10" TEXT,
    "field11" TEXT,
    "field12" TEXT,
    "field13" TEXT,
    "field14" TEXT,
    "field15" TEXT,
    "fields3Id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fields4" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "field5" TEXT,
    "field6" TEXT,
    "field7" TEXT,
    "field8" TEXT,
    "field9" TEXT,
    "field10" TEXT,
    "field11" TEXT,
    "field12" TEXT,
    "field13" TEXT,
    "field14" TEXT,
    "field15" TEXT,
    "fields4Id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fields5" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,
    "field3" TEXT,
    "field4" TEXT,
    "field5" TEXT,
    "field6" TEXT,
    "field7" TEXT,
    "field8" TEXT,
    "field9" TEXT,
    "field10" TEXT,
    "field11" TEXT,
    "field12" TEXT,
    "field13" TEXT,
    "field14" TEXT,
    "field15" TEXT,
    "fields5Id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contact.email_unique" ON "Contact"("email");

-- AddForeignKey
ALTER TABLE "Vault" ADD FOREIGN KEY ("userEmailId") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("contactEmailId") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("appointEmailId") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fields1" ADD FOREIGN KEY ("fields1Id") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fields2" ADD FOREIGN KEY ("fields2Id") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fields3" ADD FOREIGN KEY ("fields3Id") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fields4" ADD FOREIGN KEY ("fields4Id") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fields5" ADD FOREIGN KEY ("fields5Id") REFERENCES "Contact"("email") ON DELETE CASCADE ON UPDATE CASCADE;
