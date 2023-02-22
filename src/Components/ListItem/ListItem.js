import React from 'react'
import { Link } from 'react-router-dom'
import '../ListItem/ListItem.css'

const ListItem = ({title, abstract, id}) => {
  return (
    <Link to={`/details/${id}`} className='list-item'>
      <h3>{title}</h3>
      <p>{abstract}</p>
    </Link>
  )
}

export default ListItem
