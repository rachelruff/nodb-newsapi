import React, { Component } from "react";
import "./NewsCategories.css";
import ArticleCard from "./components/ArticleCard";
import "./NewsCategories.css";
import axios from "axios";

export default class NewsCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // article: "",
      savedArticles: []
    };
    this.saveArticle = this.saveArticle.bind(this);
  }

  saveArticle(article) {
    // let savedArticles = {
    //   article: this.state.article
    // };
    console.log(article)
  
    axios
      .post("/api/add/", article)
      .then(response => {
        this.setState({
          savedArticles: response.data
        });
      })
      .catch(console.log());
  }

  render() {
    console.log(this.state.savedArticles);
    //map through this.props.articles to display individual article cards
    const articles =
      this.props.articles.articles &&
      this.props.articles.articles.map((c, i) => (
        <ArticleCard key={i} article={c} saveArticle={this.saveArticle}/>
      ));

    return (
      <div className="category-container">
        <div className="title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="articles grid">{articles}</div>
      </div>
    );
  }
}

//
