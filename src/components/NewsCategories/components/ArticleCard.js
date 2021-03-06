import React from "react";
import "./ArticleCard.css";
import newsIcon from "./news-icon.png";



const ArticleCard = props => (
  <div className="article-container">
    <a href={props.article.url} target="_blank" className="link-container" >
      <img src={props.article.urlToImage ? props.article.urlToImage : newsIcon}  alt='No Pic' />
      <p>{props.article.title.length > 80 ? props.article.title.substring(0, 80)+'...' : props.article.title}</p>
    </a>
    <button className = 'button' onClick={() => props.saveArticle(props.article)}>Save For Later</button>
  </div>
);

export default ArticleCard;

//
