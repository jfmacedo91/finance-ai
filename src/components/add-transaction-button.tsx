"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

export function AddTransactionButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação <PlusIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
