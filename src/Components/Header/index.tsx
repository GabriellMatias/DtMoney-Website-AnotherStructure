import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import LogoImg from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <Dialog.Root>
          {/* aschild usa o botao dentro dele e nao cria outro botao */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal/>

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
