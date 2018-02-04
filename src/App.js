import React, { Component } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Saved from "./components/Saved/Saved";
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      library: [],
      home: true,
      saved: false,
      edit: false,
      title: ""
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentDidMount() {
    //request initial data and set that data to state
    axios
      .get("/api/get")
      .then(response => this.setState({ library: response.data }))
      .catch(console.log());
  }

  handleViewChange(val) {
    //conditional rendering - default to home page, sho and hide components based on boolean
    if (this.state[val]) return;
    switch (val) {
      case "home":
        this.setState({ home: true, saved: false });
        break;
      case "saved":
        this.setState({ home: false, saved: true });
        break;
      default:
        return;
    }
  }

  editTitle() {
    this.setState({ edit: !this.state.edit });
  }
  updateTitle(event) {
    axios
      .put(`/api/put?title=${event.target.value}`)
      .then(response => this.setState({ title: response.data }))
      .catch(console.log());
  }

  render() {
    const { library, home, saved, edit, title } = this.state;
    const homeProps = {
      articles: library
    }
    const saveProps = {
      edit,
      title,
      editTitle: this.editTitle,
      updateTitle: this.updateTitle
    };
    const changeView = event =>
      this.handleViewChange(event.target.innerText.toLowerCase());
    //grabs the name from header (Home, Saved) and lowercases them to match the value pairs defined on App.js
    return (
      <div className="App">
        <Header viewChange={changeView} />
        {home && <HomePage {...homeProps} />}
        {saved && <Saved {...saveProps} />}
      </div>
    );
  }
}

export default App;
