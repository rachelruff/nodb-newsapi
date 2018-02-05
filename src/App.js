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
    };
    this.handleViewChange = this.handleViewChange.bind(this);
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



  render() {
    const { library, home, saved} = this.state;
  
    const changeView = event =>
      this.handleViewChange(event.target.innerText.toLowerCase());
    //grabs the name from header (Home, Saved) and lowercases them to match the value pairs defined on App.js
    return (
      <div className="App">
        <Header viewChange={changeView} />
        {home && <HomePage />}
        {saved && <Saved  />}
      </div>
    );
  }
}

export default App;
