import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
      
  render() {
    return (
      <div className="App">
      <Header/>
        <HomePage />
    
        
      </div>
    );
  }
}

export default App;
