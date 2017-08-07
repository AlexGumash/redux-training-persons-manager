import React from "react";
import { connect } from "react-redux";
import store from "../reducers/";

import * as actionTypes from "../constants/actionTypes.js";

class Salary extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSalary: 0
    };
    this.salaryChangeHandle = this.salaryChangeHandle.bind(this);
  }
  salaryChangeHandle(e) {
    this.setState({
      currentSalary: e.target.value
    });
    store.dispatch({
      type: actionTypes.CHANGE_SALARY,
      usedMoney: this.state.currentSalary
    });
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.persons).map((item, index) => {
          return (
            <div key={index}>
              <div>
                {item}
              </div>
              <input
                type="number"
                value={this.state.currentSalary}
                onChange={this.salaryChangeHandle}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    persons: state.person,
    salary: state.salary
  };
}

export default connect(mapStateToProps)(Salary);
