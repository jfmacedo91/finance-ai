import { TotalEnpenseCategory } from "@/data/get-dashboard/types";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/constants/transactions";

interface ExpensesCategoryProps {
  expensesPerCategory: TotalEnpenseCategory[];
}

export function ExpensesPerCategory({
  expensesPerCategory,
}: ExpensesCategoryProps) {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border pb-6">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm font-bold">
                {TRANSACTION_CATEGORY_LABELS[category.category]}
              </p>
              <p className="text-sm font-bold">{category.percentageOfTotal}%</p>
            </div>
            <Progress value={category.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}
