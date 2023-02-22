import React, { useEffect, useState } from 'react'
import './FilterForm.css'

const FilterForm = ({filter}) => {

  const [category, setCategory] = useState('')

  useEffect(()=> {
    filter(category)
  }, [category, filter]);

  return (
    <form>
      <h2>Filter By Category</h2>
      <select id='categoryInput' value={category} onChange={event => {setCategory(event.target.value)}}>
        <option value=''>Select a category</option>
        <option value='Sports'>Sports</option>
        <option value='Travel'>Travel</option>
        <option value='Arts'>Arts</option>
      </select>
      <button type='button' onClick={() => setCategory('')}>Clear filter</button>
    </form>
  )
}

export default FilterForm
