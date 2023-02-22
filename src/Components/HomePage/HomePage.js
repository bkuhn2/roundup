import React from 'react'
import '../HomePage/HomePage.css'
import Header from '../Header/Header'
import ListDisplay from '../ListDisplay/ListDisplay'

const HomePage = () => {
  return (
    <main className='home-page'>
      <Header />
      <h2>Articles:</h2>
      <ListDisplay />
    </main>
  )
}

export default HomePage
