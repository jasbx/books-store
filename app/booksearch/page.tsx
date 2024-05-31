interface MYAnyProps {
  searchprams: { params: String },
}
import React from 'react'

const SearchBooks = ({ searchprams }: MYAnyProps) => {

  return (
    <div>
      <div>
        {searchprams.params}
      </div>
    </div>
  )
}

export default SearchBooks
