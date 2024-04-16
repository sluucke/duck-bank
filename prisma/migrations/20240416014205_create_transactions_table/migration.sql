-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" DECIMAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromFinantialAccountId" TEXT NOT NULL,
    "destinationFinantialAccountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "transactions_fromFinantialAccountId_fkey" FOREIGN KEY ("fromFinantialAccountId") REFERENCES "finantial_accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transactions_destinationFinantialAccountId_fkey" FOREIGN KEY ("destinationFinantialAccountId") REFERENCES "finantial_accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
