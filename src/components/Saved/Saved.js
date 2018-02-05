import React, { Component } from "react";
import axios from "axios";
import SavedArticleCard from "./components/SavedArticleCard";

export default class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: []
    };
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  //grabs the articles that have been saved when this component renders. It won't render until the link for the page is clicked so I need to use conditional rendering to get this working. 

  componentDidMount() {
    axios
      .get("/api/getSaved", )
      .then(response => this.setState({ savedArticles: response.data }))
      .catch(console.log());
  }


  deleteArticle(article) {
    axios
      .delete(`/api/delete/${article.title}`)
      .then(response => {
        this.setState({
          savedArticles: response.data
        });
      })
      .catch(console.log());
  }

  render() {
    const articleCards =
      this.props.articles &&
      this.props.articles.map((c, i) => (
        <SavedArticleCard key={i} article={c} />
      ));

    return (
      <div className="body">
        <h1>My Saved Articles</h1>
        <div className="articles grid">{articleCards}</div>
      </div>
    );
  }
}
