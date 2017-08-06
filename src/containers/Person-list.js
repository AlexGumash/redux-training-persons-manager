import React from "react";
import { connect } from "react-redux";
import Person from "../components/Person.js";

import store from "../reducers/persons.js";
import * as actionTypes from "../constants/actionTypes.js";

class PersonList extends React.Component {
  deletePerson(item) {
    store.dispatch({
      type: actionTypes.DELETE_PERSON,
      person: item
    });
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.persons).map((item, index) => {
          return (
            <div key={index}>
              <Person obj={this.props.persons[item]} />
              <button
                type="button"
                onClick={() =>
                  this.deletePerson(Object.keys(this.props.persons)[index])}
              >
                delete
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    persons: state
  };
}

export default connect(mapStateToProps)(PersonList);
