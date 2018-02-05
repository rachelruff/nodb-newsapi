import React from "react";
import "./ArticleCard.css";
import newsIcon from "./news-icon.png";
import { Link } from 'react-router-dom';


const ArticleCard = props => (
  <div className="article-container">
    <a href={props.article.url} className="link-container" >
      <img src={props.article.urlToImage} alt= {newsIcon} />
      <p>{props.article.title}</p>
    </a>
    {/* <button onClick={saveArticle}>Save For Later</button> */}
  </div>
);

export default ArticleCard;

//
