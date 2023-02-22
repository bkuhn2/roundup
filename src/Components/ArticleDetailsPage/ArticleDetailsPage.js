import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../ArticleDetailsPage/ArticleDetailsPage.css'
import Header from '../Header/Header'


const ArticleDetailsPage = ({allArticles}) => {

  const specificID = useParams().id;
  const [specificArticle, setSpecificArticle] = useState();

  useEffect(() => {
    if (specificID && allArticles.length) {
      setSpecificArticle(allArticles.find(art => art.id === specificID))
    }
  }, [specificID, allArticles, setSpecificArticle]);

  return (
    <main className='details-page'>
      <Header />
      {!specificArticle && <h2>loading...</h2>}
      {specificArticle && 
      <section className='article-detail-section'>
        <div className='text-area'>
          <h1 className='s-title'>{specificArticle.title}</h1>
          <h2 className='s-abstract'>{specificArticle.abstract}</h2>
          <p>{specificArticle.byAuthor}</p>
          <p>Originally published {specificArticle.publishedDate}</p>
          <Link to={specificArticle.url} className='s-link'>Click here to read the article!</Link>
        </div>
        <div className='image-area'>
          <img src={specificArticle.img} className='article-img'/>
          <p className='s-caption'>{specificArticle.imgCaption}</p>
        </div>
      </section>}
    </main>
  )
}

export default ArticleDetailsPage
