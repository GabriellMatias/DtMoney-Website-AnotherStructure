import { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { TransactionContext } from "../../contexts/TransactionContext";
import { api } from "../../services/api";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
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
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.category}</td>
                  {/* Created at vem como string da API, converte para data para formatar */}
                  <td>{dateFormatter.format( new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
