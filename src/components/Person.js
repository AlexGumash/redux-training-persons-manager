import React from "react";
import PropTypes from "prop-types";
import store from "../reducers/persons.js";
import { connect } from "react-redux";
import * as actionTypes from "../constants/actionTypes.js";

class Person extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isEditNow: true,
      currentPerson: {
        name: props.obj.name,
        surname: props.obj.surname,
        age: props.obj.age,
        skill: props.obj.skill
      }
    };
  }
  editPerson(e) {
    store.dispatch({
      type: actionTypes.EDIT_PERSON,
      person: this.state.currentPerson,
      name: this.props.obj.name
    });
    this.setState({
      isEditNow: !this.state.isEditNow
    });
  }
  nameChangeHandler(e) {
    const { currentPerson } = this.state;

    const name = e.target.value;
    this.setState({
      currentPerson: { ...currentPerson, name }
    });
  }

  surnameChangeHandler(e) {
    const { currentPerson } = this.state;

    const surname = e.target.value;
    this.setState({
      currentPerson: { ...currentPerson, surname }
    });
  }

  ageChangeHandler(e) {
    const { currentPerson } = this.state;

    const age = e.target.value;
    this.setState({
      currentPerson: { ...currentPerson, age }
    });
  }

  skillChangeHandler(e) {
    const { currentPerson } = this.state;

    const skill = e.target.value;
    this.setState({
      currentPerson: { ...currentPerson, skill }
    });
  }
  toggleEdit() {
    this.setState({
      isEditNow: !this.state.isEditNow
    });
  }
  render() {
    return (
      <div>
        <div>
          Name:{" "}
          {this.state.isEditNow
            ? this.props.obj.name
            : <input
                value={this.state.currentPerson.name}
                onChange={this.nameChangeHandler.bind(this)}
              />}
        </div>
        <div>
          Surname:{" "}
          {this.state.isEditNow
            ? this.props.obj.surname
            : <input
                value={this.state.currentPerson.surname}
                onChange={this.surnameChangeHandler.bind(this)}
              />}
        </div>
        <div>
          Age:{" "}
          {this.state.isEditNow
            ? this.props.obj.age
            : <input
                value={this.state.currentPerson.age}
                onChange={this.ageChangeHandler.bind(this)}
              />}
        </div>
        <div>
          Skill:{" "}
          {this.state.isEditNow
            ? this.props.obj.skill
            : <input
                value={this.state.currentPerson.skill}
                onChange={this.skillChangeHandler.bind(this)}
              />}
        </div>
        <button type="button" onClick={() => this.toggleEdit()}>
          edit
        </button>
        <div>
          {this.state.isEditNow
            ? null
            : <button type="button" onClick={() => this.editPerson()}>
                OK
              </button>}
        </div>
      </div>
    );
  }
}

Person.propTypes = {
  obj: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    persons: state
  };
}

export default connect(mapStateToProps)(Person);
