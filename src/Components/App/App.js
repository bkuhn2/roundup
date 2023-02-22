import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ArticleDetailsPage from '../ArticleDetailsPage/ArticleDetailsPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/details/:id' element={<ArticleDetailsPage />}/>
      {/* Bad Path route? */}
    </Routes>
  )
}

export default App
