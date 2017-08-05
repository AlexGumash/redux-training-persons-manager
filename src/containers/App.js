import React, { Component } from "react";
import PersonList from "./Person-list";
import AddBlock from "./Add-block";

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
