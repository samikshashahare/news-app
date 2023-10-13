import React from 'react';
import './NewsArticle.css';

    function NewsArticle({author,title,description,url,urlToImage,publishedAt}) {
        return (
            <div className='news-article-card'>
                <img src={urlToImage} className='new-article-image' />
                <h3 className='article-title'>{title}</h3>
                <div className='article-info'>
                    <p className='article-author'>{author}</p>
                    <p className='article-publishedAt'>{publishedAt}</p>
                </div>
                <p className='article-description'>{description}</p>

                <a href={url} target='blank' className='btn-read-more'>Read More</a>
              </div>
        )
    }

export default NewsArticle