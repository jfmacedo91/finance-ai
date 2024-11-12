import { db } from "@/lib/prisma";

import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "@/components/add-transaction-button";
import { NavBar } from "@/components/navbar";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
}
