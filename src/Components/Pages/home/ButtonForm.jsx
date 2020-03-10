import React, { Component } from "react";
import Form from "./Form"

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="container">
       <Form />
    </div>

  );
}

class ButtonForm extends Component {
  state = { showWarning: true };

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };

  render() {
    return (
      <div>
        <button className="button is-primary " onClick={this.handleToggleClick}>
          Contactez nous
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    );
  }
}

export default ButtonForm;
