import React, { Component } from "react";
import Stories from "./components/Stories";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="News" />
        <div className="container">
          <Stories />
        </div>
      </div>
    );
  }
}

export default App;
