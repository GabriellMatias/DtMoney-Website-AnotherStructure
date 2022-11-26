import { SearchFormContainer } from "./style";
import {MagnifyingGlass} from 'phosphor-react'
 

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for Transactions" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Search</button>

    </SearchFormContainer>
  );
}