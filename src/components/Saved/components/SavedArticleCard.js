import React from "react";
import "./SavedArticleCard.css";
import newsIcon from "./news-icon.png";


const SavedArticleCard = props => (
  <div className="article-container">
    <a href={props.article.url} target="_blank" className="link-container" >
      <img src={props.article.urlToImage ? props.article.urlToImage : newsIcon}  alt='No Pic' />
      <p>{props.article.title.length > 80 ? props.article.title.substring(0, 80)+'...' : props.article.title}</p>
    </a>
    <button onClick={() => props.deleteArticle(props.article)}>Remove</button>
  </div>
);

export default SavedArticleCard;

//
