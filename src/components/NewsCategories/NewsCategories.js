import React, { Component } from "react";
import axios from "axios";

export default class NewsCategories extends Component {
  constructor(props) {
    super(props);

 

  render() {
    return (
      <div className="category-container">
        <h1>{this.props.title}</h1>
        <div className ='articles'>
        <p>{this.props.category}</p>
        </div>
      </div>
    );
  }
}
