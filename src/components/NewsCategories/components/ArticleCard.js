import React from "react";
import "./ArticleCard.css";
import newsIcon from "./news-icon.png";
import { Link } from 'react-router-dom';


const ArticleCard = props => (
  <div className="article-container">
    <a href={props.article.url} target="_blank" className="link-container" >
      <img src={props.article.urlToImage}  alt='IMAGE NOT AVAILABLE' />
      <p>{props.article.title}</p>
    </a>
    <button >Save For Later</button>
  </div>
);

export default ArticleCard;

//onClick={saveArticle}
