import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";


/* esse calculo podera ir no componente summary, mas por regras de codigo  mais limpo
e boas praticas de programacao, fazemos um hook para esse calculo*/
export function useSummary(){
  const { transactions } = useContext(TransactionContext);

  /* reduce, reduz um dado para outro tipo de dado, recebe uma funcao e o valor inicial
  de quais dados vc vai utilizar. Na funcao, o primeiro parametro (ACC) e o que vai ser retornado
  para a const summary. o segundo parametro recebe o dado inteiro*/
  const summary = transactions.reduce((acc, transaction) => {


    if (transaction.type === 'income'){
      acc.income += transaction.price
      acc.total += transaction.price
    } else{
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  return summary
}