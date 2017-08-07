import React, { Component } from "react";
import PersonList from "./PersonList";
import AddBlock from "./AddBlock";

class App extends Component {
  render() {
    return (
      <div>
        <PersonList />
        <AddBlock />
      </div>
    );
  }
}

export default App;
