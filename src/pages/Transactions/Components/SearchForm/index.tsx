import { SearchFormContainer } from './style'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

/**
 * **Por que componente renderiza:
 * -Hooks changed
 * -props changed
 * -Parent rerendered
 *
 * **Fluxo de renderizacao:
 * 1 react recria html do componente
 * 2 compara as versoes do html
 * se mudou algo ele reescreve o html em tela
 *
 * **Memo:
 * 0: hook changed, props changed
 * 0.1 compara as versoes do html
 * 0.2 se mudou algo ele permite a nova renderizacao
 * */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  /* subistiui o useContext por useContextSelector, recebe o contexto e uma funcao
  essa funcao recebe como parametro o contexto e retorna qual funcao dentro do contexto
  voce quer que o reeact ficque de olho, ou seja, o componente so vai renderizar quando
  aquela funcao em especifico que voce retornou mudar, isso aumenta a performace */
  const loadTransactionsData = useContextSelector(
    TransactionContext,
    (context) => {
      return context.loadTransactionsData
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchTransactions(data: SearchFormInputs) {
    await loadTransactionsData()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for Transactions"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}

/* memoria o componente para que nao haja renderizacao desnecessaria, evita usar 
em componentes simples */
export const SearchForm = memo(SearchFormComponent)
