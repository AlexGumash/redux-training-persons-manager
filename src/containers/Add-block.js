import React from "react";
import AddForm from "../components/Add-form.js";

class AddBlock extends React.Component {
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
          Add person
        </button>
        {this.state.formVisible ? <AddForm /> : null}
      </div>
    );
  }
}

export default AddBlock;
