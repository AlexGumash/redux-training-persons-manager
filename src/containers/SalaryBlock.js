import React, { Component } from "react";
import Salary from "../components/SalaryForm";

class SalaryBlock extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: false
    };
  }
  toggleVisible() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.toggleVisible()}>
          Distribute salary
        </button>
        {this.state.formVisible ? <Salary /> : null}
      </div>
    );
  }
}

export default SalaryBlock;
