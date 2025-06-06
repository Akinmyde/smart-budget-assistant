import React, { createContext, useContext, useState, ReactNode } from "react";
import transactionsDummyData from "../data/transactions.json";
import { Transaction } from "../types/transaction";
import { getCategorySpending, getUniqueCategories } from "../utils";
import { Category } from "../types/category";

interface AppContextType {
  transactions: Transaction[];
  categories: Category[];
  totalSpending: number;
  updateCategoryBudget: (categoryName: string, budget: number) => void;
  addTransaction: (transaction: Transaction) => void;
}

const initialCategories = getUniqueCategories(transactionsDummyData).map(
  (category) => ({
    name: category,
    spent: getCategorySpending(transactionsDummyData, category),
    budget: 0,
  })
);

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    transactionsDummyData
  );
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const totalSpending = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  const updateCategoryBudget = (categoryName: string, budget: number) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.name === categoryName ? { ...category, budget } : category
      )
    );
  };

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    // Update category spent amount
    setCategories((prev) =>
      prev.map((category) =>
        category.name === transaction.category
          ? { ...category, spent: category.spent + transaction.amount }
          : category
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        categories,
        totalSpending,
        updateCategoryBudget,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
