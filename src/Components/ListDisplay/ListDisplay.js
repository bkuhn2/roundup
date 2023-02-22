import React from 'react'
import '../ListDisplay/ListDisplay.css'
import ListItem from '../ListItem/ListItem'

const ListDisplay = ({allArticles}) => {

  const articles = allArticles.map((art, index) => {
    return <ListItem title={art.title} abstract ={art.abstract} id={art.id} key={index}/>
  })

  return (
    <section className='list-display'>
      {articles}
    </section>
  )
}

export default ListDisplay
