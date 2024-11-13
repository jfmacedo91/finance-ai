import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalEnpenseCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
