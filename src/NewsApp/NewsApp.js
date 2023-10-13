import React, { useState, useEffect } from 'react'
import NewsArticle from '../component/NewsArticle/NewsArticle';
import axios from 'axios';
import './NewsApp.css';

function NewsApp() {
  const [news, setNews] = useState([])
  const[searchquery, setSearchquery]= useState("Pune")
  const loadNews = async () => {

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchquery}&from=2023-09-13&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error loading news:", error);
    }
  }
  
  useEffect(() => {
    loadNews()
  }, [])
  useEffect(() => {
    loadNews()
  }, [searchquery])

  return (
    <>
      <div>
        <h1>NewsApp</h1>
        <input type='text'
        className='search-input' 
        value={searchquery} 
        onChange={(e)=>{
          setSearchquery(e.target.value)
        }}/>
        <div className='news-container'>
        {
          news.map((newsArticle, index) => {
            const { author, title, description, url, urlToImage, publishedAt } = newsArticle
            return (

              <NewsArticle author={author} title={title}
                description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt}  key={index} />
            )
          })
        }
        </div>

      </div>
    </>
  )
}

export default NewsApp