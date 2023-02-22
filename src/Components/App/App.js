import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ArticleDetailsPage from '../ArticleDetailsPage/ArticleDetailsPage'
import { getArticles } from '../../Utility/APIcalls';


const App = () => {

  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    Promise.all([
      getArticles('sports'),
      getArticles('travel'),
      getArticles('arts')
    ])
      .then(data => {
        console.log('PromiseAll DATA: ', data);
      })
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/details/:id' element={<ArticleDetailsPage />}/>
      {/* Bad Path route? */}
    </Routes>
  )
}

export default App
