import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";


export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary/>

     <TransactionsContainer>
      <SearchForm/>
     <TransactionsTable>
        <tbody>
          <tr>
            <td width='50%'>Site develope</td>
            <td>
              <PriceHightLight variant="income">
              R$ 12.000.00
              </PriceHightLight>
            </td>
            <td>Sell</td>
            <td>13/04/2202</td>
          </tr>
          <tr>
            <td width='50%'>Site develope</td>
            <td>
              <PriceHightLight variant="outcome">
              R$ 12.000.00
              </PriceHightLight>
            </td>
            <td>Sell</td>
            <td>13/04/2202</td>
          </tr>
          <tr>
            <td width='50%'>Site develope</td>
            <td>
              <PriceHightLight variant="income">
              R$ 12.000.00
              </PriceHightLight>
            </td>
            <td>Sell</td>
            <td>13/04/2202</td>
          </tr>
          <tr>
            <td width='50%'>Site develope</td>
            <td>
              <PriceHightLight variant="outcome">
              R$ 12.000.00
              </PriceHightLight>
            </td>
            <td>Sell</td>
            <td>13/04/2202</td>
          </tr>
         
        </tbody>
      </TransactionsTable>
     </TransactionsContainer>


      
    </div>
  );
}