import React from "react";
import store from "../reducers/persons.js";

import * as actionTypes from "../constants/actionTypes.js";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPerson: {
        name: "",
        surname: "",
        age: "",
        skill: ""
      }
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.surnameChangeHandler = this.surnameChangeHandler.bind(this);
    this.ageChangeHandler = this.ageChangeHandler.bind(this);
    this.skillChangeHandler = this.skillChangeHandler.bind(this);
  }
  addPerson(e) {
    e.preventDefault();
    store.dispatch({
      type: actionTypes.ADD_PERSON,
      person: this.state.currentPerson
    });
    this.setState({
      currentPerson: {
        name: "",
        surname: "",
        age: "",
        skill: ""
      }
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
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.addPerson(e);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            onChange={this.nameChangeHandler}
            value={this.state.currentPerson.name}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Surname"
            onChange={this.surnameChangeHandler}
            value={this.state.currentPerson.surname}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            onChange={this.ageChangeHandler}
            value={this.state.currentPerson.age}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Skill"
            onChange={this.skillChangeHandler}
            value={this.state.currentPerson.skill}
            required
          />
          <br />
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
