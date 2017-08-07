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
    this.personChangeHandle = this.personChangeHandle.bind(this);
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
  personChangeHandle(e) {
    const { currentPerson } = this.state;

    currentPerson[e.target.id] = e.target.value;
    this.setState({
      currentPerson: { ...currentPerson }
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
            onChange={this.personChangeHandle}
            value={this.state.currentPerson.name}
            id="name"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Surname"
            onChange={this.personChangeHandle}
            value={this.state.currentPerson.surname}
            id="surname"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            onChange={this.personChangeHandle}
            value={this.state.currentPerson.age}
            id="age"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Skill"
            onChange={this.personChangeHandle}
            value={this.state.currentPerson.skill}
            id="skill"
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
