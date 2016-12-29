import React, { Component } from 'react';
import avatar from './data/images/abdoulsy.jpg';
import abdoulsy from './data/abdoulsy.json';
import PersonHeader from './personHeader/person-header';
import PersonFooter from './personFooter/person-footer';
import PersonCurrentStatusMessage
  from './personCurrentStatusMessage/current-status-message';
import './Person.css';

class Person extends Component {
  constructor (props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  componentWillMount () {
    //shouldn't mutate the imported data
    abdoulsy.avatar.image = avatar;
    this.setState({person: abdoulsy});
  }

  render() {
    let person = this.state.person;
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
