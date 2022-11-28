import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionsProps[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    async function loadTransactionsData() {
      const transactionData = await api.get("/transactions");
      setTransactions(transactionData.data);
    }

    loadTransactionsData();
  }, []);
  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  );
}
