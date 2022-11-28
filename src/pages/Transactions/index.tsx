import { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { TransactionContext } from "../../contexts/TransactionContext";
import { api } from "../../services/api";
import { SearchForm } from "./Components/SearchForm";
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
