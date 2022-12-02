import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/api'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionsProps {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: TransactionsProps[]
  loadTransactionsData: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionsProps) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  const loadTransactionsData = useCallback(async (query?: string) => {
    const transactionData = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(transactionData.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionsProps) => {
      const { description, price, category, type } = data
      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })
      /* response data vem primeiro por causa da ordem descresente */
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    loadTransactionsData()
  }, [loadTransactionsData])

  return (
    <TransactionContext.Provider
      value={{ transactions, loadTransactionsData, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
