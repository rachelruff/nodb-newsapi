import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => (
  <div className="flex article-card-container">
    <img src={article.urlToImage} alt={article.description} />
    <p>{article.title}</p>
    <button onClick={this.saveArticle}>Save For Later</button>
  </div>
);

export default ArticleCard;
