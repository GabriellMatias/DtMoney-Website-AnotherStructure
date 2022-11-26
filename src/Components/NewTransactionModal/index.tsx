import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from "./style";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form action="">
          <input type="text" placeholder="description" required/>
          <input type="number" placeholder="Price" required/>
          <input type="text" placeholder="Category" required/>
        
        <button type="submit">Register</button>
        </form> 

        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  );
}
