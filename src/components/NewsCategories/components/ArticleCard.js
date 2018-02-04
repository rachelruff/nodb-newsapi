import React from "react";
import "./ArticleCard.css";
import newsIcon from "./news-icon.png";


const ArticleCard = props => (
  <div className='article-container'>
  <Link to={this.props.articles.url} className="link-container">
    <img src={this.props.articles.urlToImage} alt={newsIcon} />
    <p>{this.props.articles.title}</p>
  </Link>
  <button onClick={this.saveArticle}>Save For Later</button>
  </div>
);

export default ArticleCard;

//
