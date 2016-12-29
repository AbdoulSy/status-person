import React, { Component } from 'react';

class PersonHeader extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let { person, basic, avatar } = this.props.person;

    return (
      <header className="Person-header">
        <div className="Person-basic">
          <h1 itemProp="name">{basic.name}</h1>
          <h3 itemProp="jobTitle">{basic.jobTitle}</h3>
          <h5 itemProp="email">{basic.email}</h5>
        </div>
        <div className="Person-avatar">
          <div itemProp="image" className="PersonImage">
            <img src={avatar.image} role="presentation"
              alt="{basic.name}"/>
          </div>
        </div>
      </header>
    );
  }
}

export default PersonHeader;
