-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "domainStartDate" TIMESTAMP(3) NOT NULL,
    "domainEndDate" TIMESTAMP(3) NOT NULL,
    "domainRegistrar" TEXT NOT NULL,
    "hostingProvider" TEXT NOT NULL,
    "hostingStartDate" TIMESTAMP(3) NOT NULL,
    "hostingEndDate" TIMESTAMP(3) NOT NULL,
    "wordpresUsername" TEXT NOT NULL,
    "wordpressPassword" TEXT NOT NULL,
    "exsistingClient" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
