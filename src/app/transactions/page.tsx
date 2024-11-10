import { db } from "@/lib/prisma";

import { Button } from "@/components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
