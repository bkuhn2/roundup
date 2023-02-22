import React from 'react'
import '../HomePage/HomePage.css'
import Header from '../Header/Header'
import ListDisplay from '../ListDisplay/ListDisplay'

const HomePage = ({allArticles}) => {
  return (
    <main className='home-page'>
      <Header />
      <h2>Articles:</h2>
      <ListDisplay allArticles={allArticles}/>
    </main>
  )
}

export default HomePage
