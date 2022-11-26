import { SummaryCard, SummaryContainer } from "./style";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incoming</span>
          <ArrowCircleUp size={32} color={"#00b37e"} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>OutComing</span>
          {/* preferir modificar cor de icones pelo css para usar o Theme */}
          <ArrowCircleDown size={32} color={"#f75a68"} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={"#fff"} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}