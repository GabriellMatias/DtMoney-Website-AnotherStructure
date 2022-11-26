import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({theme})=> theme['gray-800']};
  
  position: fixed;
  /* gambiarra pra centralizar o modal*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled(Dialog.Overlay)`
/* se trata da parte escura atras do modal*/
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* mesma coisa de top,right,left.. 0*/
  inset: 0;
  background: rgba(0,0,0,0.75);
  
`;
