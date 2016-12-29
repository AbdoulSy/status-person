import React, { Component } from 'react';

class PersonCurrentStatusMessage extends Component {
  render() {
    let { currentStatus } = this.props.person;

    return (
      <div className="currentStatusMessage">
          <header>
            <p>current status message:</p>
            <small>at:
              <span>{currentStatus.statusLocation}</span>
              <span>{currentStatus.statusDate}</span>
            </small>
          </header>
          <div className="statusMessage">
            <p>{currentStatus.statusMessage}</p>
          </div>
        </div>
    );
  }
}

export default PersonCurrentStatusMessage;
