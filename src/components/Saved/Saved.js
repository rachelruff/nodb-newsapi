import React, { Component } from "react";
import axios from "axios";
// import ArticleCard from "../NewsCategories/components/ArticleCard";

export default class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedArticles: [],
      input: ""
    };
    this.deleteSaved = this.deleteSaved.bind(this);
  }

  //grabs the articles that have been saved when this component renders. It won't render until the link for the page is clicked so I need to use conditional rendering to get this working. saved=true is the req.query and it will build an object with the key being saved and the value being the string true.

  componentDidMount() {
    axios
      .get("/api/get?saved=true")
      .then(response => this.setState({ savedArticles: response.data }))
      .catch(console.log());
  }
//******* */
//need to look into how to get an id available for the savedArticles contents

  deleteSaved(id) {
    axios
      .delete("api/articles" + id)
      .then(response => {
        this.setState({
          savedArticles: response.data
        });
      })
      .catch(console.log());
  }

  render() {
    const { savedArticles } = this.state;
    const { editTitle, updateTitle, edit, title } = this.props;
    //props from app.js
    const props = {
      savedArticles,
      saveArticle: this.deleteSaved,
      action: "Unsave",
      defaultVal: "Looks like you're all caught up!"
    };
    return (
      <div className="body">
        {!edit ? (
          <h1 className="pointer" title="Click To Change" onClick={editTitle}>
            {title || "My Articles"}
          </h1>
        ) : (
          <input
            className="title-change"
            placeholder={title || "My Articles"}
            onChange={event => updateTitle(event)}
            onBlur={editTitle}
//onBlur is a change effect that will let you edit the box when pointer is over it
            maxLength="15"
          />
        )}
        {/* <ArticleCard {...props} /> */}
        ) )}
      </div>
    );
  }
}
