import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-primary/10 font-bold text-primary hover:bg-primary/10">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-bold text-danger hover:bg-[muted]">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Gasto
      </Badge>
    );
  }

  return (
    <Badge className="bg-muted font-bold text-white hover:bg-muted">
      <CircleIcon className="mr-2 fill-white text-white" size={10} />
      Investimento
    </Badge>
  );
}
