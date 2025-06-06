import { Transaction } from "../types/transactions";

export const groupTransactionsByCategory = (transactions: Transaction[]) => {
    const grouped: Record<string, Transaction[]> = {};

    transactions.forEach((tx) => {
        const cat = tx.category || "Other";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(tx);
    });

    // Convert to SectionList format
    return Object.keys(grouped).map((category) => ({
        category,
        data: grouped[category],
    }));
}

export const getUniqueCategories = (transactions: Transaction[]) => {
    return Array.from(new Set(transactions.map((transaction) => transaction.category)));
}

export const getCategorySpending = (transactions: Transaction[], category: string) => {
    return transactions.filter((tx) => tx.category === category).reduce((sum, tx) => sum + tx.amount, 0);
}

export const getTotalSpending = (transactions: Transaction[]) => {
    return transactions.reduce((sum, tx) => sum + tx.amount, 0);
}

export const dateFormatter = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}