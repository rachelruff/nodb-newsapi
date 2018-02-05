import React, { Component } from "react";
import "./NewsCategories.css";
import ArticleCard from "./components/ArticleCard";
import "./NewsCategories.css";

export default class NewsCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      savedArticles: []
    };
    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle(article) {
    let savedArticles = this.state.savedArticles;
    savedArticles.push(article);
    this.setState({
      savedArticles: [...this.state.savedArticles, savedArticles]
    });
  }

  render() {
    //map through this.props.articles to display individual article cards
    console.log(this.props.articles.articles)
  const articles = this.props.articles.articles && this.props.articles.articles.map( ( c , i ) => <ArticleCard key={i} article={c}/> )

    return (
      <div className="category-container">
        <h2>{this.props.title}</h2>
        <div className="articles grid">{articles}</div>
      </div>
    );
  }
}

//
