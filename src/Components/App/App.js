import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ArticleDetailsPage from '../ArticleDetailsPage/ArticleDetailsPage'
import { getArticles } from '../../Utility/APIcalls';
import { formatRawData } from '../../Utility/CleanUp';


const App = () => {

  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      getArticles('sports'), getArticles('travel'), getArticles('arts')
    ])
      .then(data => {
        setError('');
        setAllArticles([...formatRawData(data[0]), ...formatRawData(data[1]), ...formatRawData(data[2])
        ].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }))
      })
      .catch(err => {
        setAllArticles([]);
        setError(err.message);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage allArticles={allArticles} error={error}/>}/>
      <Route path='/details/:id' element={<ArticleDetailsPage allArticles={allArticles}/>}/>
      {/* Bad Path route? */}
    </Routes>
  )
}

export default App
