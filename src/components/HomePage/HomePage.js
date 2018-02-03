import React, { Component } from "react";
import axios from "axios";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
   this.state = {
    article: "",
    saved: []
  };
}
componentDidMount(){
    axios
    .get('/api/articles')
    .then(response => console.log(response))
    .catch(console.log())
}

render() {
    return (
      <div className="category-container">
       
      
      </div>
    );
  }
}

