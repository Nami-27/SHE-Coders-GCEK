import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: " "
    }
    this.displayMessage = this.displayMessage.bind(this)
  };

  displayMessage() {
    var Today = new Date()
    var hour = Today.getHours()

    if (hour < 12) {
      this.setState({ data: "Good Morning Namitha " })
    } else if (hour < 18) {
      this.setState({ data: "Good Afternoon Namitha" })
    } else {
      this.setState({ data: "Good Evening Namitha" })
    }
  }
  render() {
    return (
      <div className="App">
        <h1> <p><p> </p></p></h1>
        <button onClick={this.displayMessage}>Click Here</button>
        <h1>{this.state.data}</h1>

      </div>
    );
  }
}

export default App;