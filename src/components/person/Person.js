import React, { Component } from 'react';
import PersonHeader from './personHeader/person-header';
import PersonFooter from './personFooter/person-footer';
import PersonCurrentStatusMessage
  from './personCurrentStatusMessage/current-status-message';
import './Person.css';

class Person extends Component {
  render() {
    let person = this.props.person;
    person.avatar.image = this.props.avatar;
    return (
      <div className="Person" itemScope itemType={person.type}>
        <PersonHeader person={person} />
        <PersonCurrentStatusMessage person={person} />
        <div className="Person-affiliation">
        <span>Affiliation:</span> <span itemProp="affiliation">{person.affiliation}</span>
        </div>
        <PersonFooter person={person} />
      </div>
    );
  }
}

export default Person;
