import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({searchTerm, handleInput}) => {
  return (
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" 
  value={searchTerm} onInput={handleInput}
   placeholder="Search pokemon"
    aria-label="Search" aria-describedby="search-addon" />
</div>
  )
}

export default SearchBar