import React, { Component } from "react";
import "./NewsCategories.css";
import ArticleCard from "./components/ArticleCard";
import "./NewsCategories.css";

export default class NewsCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      Articles: [],
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
    //map through this.props.articles
    //render article card and pass donw this.props.articles
    const articles = this.props.articles.map((c,i)=><ArticleCard key={i} article={c}/>
)
    return (
      <div className="category-container">
        <h1>{this.props.title}</h1>
        <div className="articles grid">{articles}</div>
      </div>
    );
  }
}

//
