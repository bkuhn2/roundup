import React, { useCallback, useState } from 'react'
import '../HomePage/HomePage.css'
import Header from '../Header/Header'
import ListDisplay from '../ListDisplay/ListDisplay'
import FilterForm from '../FilterForm/FilterForm'

const HomePage = ({allArticles, error}) => {

  const [filteredArticles, setFilteredArticles] = useState([]);

  const filter = useCallback((category) => {
    if (category) {
      setFilteredArticles(allArticles.filter(art => art.section === category));
    } else {
      setFilteredArticles();
    }
  }, [allArticles, setFilteredArticles]);

  return (
    <main className='home-page'>
      <Header />
      {error && <h2>{error}</h2>}
      {(!error && !allArticles.length) && <h2>Loading...</h2>}
      {(!error && !!allArticles.length) && <>
        <FilterForm filter={filter}/>
        <h2>- Curated Articles -</h2>
        {!filteredArticles && <ListDisplay articles={allArticles}/>}
        {filteredArticles && <ListDisplay articles={filteredArticles}/>}
      </>}
    </main>
  )
}

export default HomePage
