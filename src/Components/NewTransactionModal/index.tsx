import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

/* nao e escalavel usar essa tipagem exportada para o contexto, se usar o contexto fica
atrelado a esse componente, o contexto deve ser desacoplado para compartilhar funcionalidade
com varios componentes */
type newTransactionTypeInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    /* quando precisar incluir uma informacao no formulario que nao vem de inpu ou elemento
    nativo html */
    control,
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionTypeInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction
    },
  )

  async function handleCreateNewTransaction(data: newTransactionTypeInputs) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />
          {/* usa o controller para chamar o control do useForm,
           name para o nome do campo */}
          <Controller
            control={control}
            name="type"
            /* render funcao que retorna o html que vai ser renderizado */
            render={({ field }) => {
              /* puxa o field que e uma das propriedades do render, e 
              quando o valor mudar vc chama o onchange do field, assim o valor e gravado
              para usar no formulario mas deve passar o value como field.value */

              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Incoming
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcoming
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
