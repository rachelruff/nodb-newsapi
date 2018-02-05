import React, { Component } from "react";
import axios from "axios";
import SavedArticleCard from "./components/SavedArticleCard";

export default class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: [],
      title: ''
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

  changeTitle(){
    const {title} = this.state;
    axios
    .put('/api/changeTitle/${id}', title)
    .then(response=> this.setState({
      title:response.data
    }))
    .catch(console.log())
  }

  deleteArticle(article) {
    // console.log(article)
    axios
      .delete(`/api/delete/${article.title}`)
      .then(response => {
        this.setState({
          savedArticles: response.data
        });
      })
      .catch(console.log());
      // console.log(this.state.savedArticles)
  }

  render() {
    console.log(this.state.savedArticles)
    const articleCards =
      this.state.savedArticles &&
      this.state.savedArticles.map((c, i) => (
        <SavedArticleCard key={i} article={c} deleteArticle={this.deleteArticle}/>
      ));
      
    return (
      <div className="body">
        <h1 className='title'>My Saved Articles</h1>
        <div className="articles grid">{articleCards}</div>
      </div>
    );
  }
}
