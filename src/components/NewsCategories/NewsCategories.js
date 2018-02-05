import React, { Component } from "react";
import "./NewsCategories.css";
import ArticleCard from "./components/ArticleCard";
import "./NewsCategories.css";
import axios from 'axios';

export default class NewsCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      savedArticles: []
    };
    this.saveArticle = this.saveArticle.bind(this);
  }


  // saveArticle() {
  //   let savedArticles = {
  //     article: this.state.article
  //   };
  //   axios
  //     .post("/api/add/", article)
  //     .then(response => {
  //       this.state.savedArticles.push(`/articles/${response.data.id}`);
  //     })
  //     .catch(console.log());
  // }



    saveArticle(article) {
      let savedArticles = this.state.savedArticles;
      savedArticles.push(article);
      this.setState({
        savedArticles: [...this.state.savedArticles, savedArticles]
      });
    }

  render() {
    //map through this.props.articles to display individual article cards
    const articles =
      this.props.articles.articles &&
      this.props.articles.articles.map((c, i) => (
        <ArticleCard key={i} article={c} />
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
