import React, { Component } from "react";
import PersonList from "./PersonList";
import AddBlock from "./AddBlock";
import SalaryBlock from "./SalaryBlock";

class App extends Component {
  render() {
    return (
      <div>
        <PersonList />
        <AddBlock />
        <SalaryBlock />
      </div>
    );
  }
}

export default App;
