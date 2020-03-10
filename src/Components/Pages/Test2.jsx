import React, { Component } from "react";


function WarningBanner(props) {
    console.log(props)
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
          </button>
        </div>
      );
    }
  }
  