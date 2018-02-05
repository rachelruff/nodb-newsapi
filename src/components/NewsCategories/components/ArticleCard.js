import React from "react";
import "./ArticleCard.css";
// import newsIcon from "./news-icon.png";



const ArticleCard = props => (
  <div className="article-container">
    <a href={props.article.url} target="_blank" className="link-container" >
      <img src={props.article.urlToImage}  alt='No Pic' />
      <p>{props.article.title}</p>
    </a>
    <button onClick={() => props.saveArticle(props.article)}>Save For Later</button>
  </div>
);

export default ArticleCard;

//
