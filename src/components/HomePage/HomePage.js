import React, { Component } from "react";
import axios from "axios";
import NewsCategories from '../NewsCategories/NewsCategories';
import "./HomePage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ent: [],
      gen: [],
      health: [],
      sci: [],
      sports: [],
      tech: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/articles")
      .then(response =>
        this.setState({
          ent: response.data.ent,
          gen: response.data.gen,
          health: response.data.health,
          sci: response.data.sci,
          sports: response.data.sports,
          tech: response.data.tech
        })
      )
      .catch(console.log());
  }

  render() {
    return (
        
      <div className="category-container">
        <NewsCategories className='row-container' title="Entertainment" articles={this.state.ent}  />
        <NewsCategories className='row-container' title="General" articles={this.state.gen} />
        <NewsCategories className='row-container' title="Health" articles={this.state.health} />
        <NewsCategories className='row-container' title="Science" articles={this.state.sci} />
        <NewsCategories className='row-container' title="Sports" articles={this.state.sports} />
        <NewsCategories className='row-container' title="Tech" articles={this.state.tech} />
      </div>
    );
  }
}
