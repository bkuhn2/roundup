import React from 'react'
import '../ListDisplay/ListDisplay.css'
import ListItem from '../ListItem/ListItem'

const ListDisplay = ({articles}) => {

  const displayArticles = articles ? articles.map((art, index) => {
    return <ListItem title={art.title} abstract ={art.abstract} id={art.id} key={index}/>
  })
  : ''

  return (
    <section className='list-display'>
      {displayArticles}
    </section>
  )
}

export default ListDisplay
