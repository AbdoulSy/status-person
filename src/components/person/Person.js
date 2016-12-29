import React, { Component } from 'react';
import avatar from './data/images/abdoulsy.jpg';
import PersonHeader from './personHeader/person-header';
import PersonFooter from './personFooter/person-footer'
import './Person.css';

class Person extends Component {
  constructor (props) {
    super(props);
    this.state = {
      person: {
        basic: {},
        avatar: {},
        currentStatus: {},
        longTermStatus: {},
        postalAddress: {}
      }
    };
  }

  componentWillMount () {
    this.setState({
      person: {
        type: "http://schema.org/Person",
        basic: {
          name: "Abdoul Sy",
          jobTitle: "Developer",
          email: "message@abdoulsy.eu"
        },
        avatar: {
          image: avatar
        },
        currentStatus: {
          statusMessage: `Lying down, refactoring \n
          the component Person, updating the status message`,
          statusLocation: "Lee @Malika's AirBnb",
          statusDate: "Thu 29/12 15:43 ",
        },
        affiliation: "Senforsce",
        longTermStatus: {
          telephone: "(+44) 07 810 763 236",
          url: "http://web.abdoulsy.eu"
        },
        postalAddress: {
          type: "http://schema.org/PostalAddress",
          streetAddress: `7 Burgess Park Mansions,
             Fortune Green Road. `,
          postalCode: "NW61DP",
          addressRegion: "Camden",
          addressLocality: "London"
        }
      }
    });
  }

  render() {
    let person = this.state.person;
    let currentStatus = person.currentStatus;
    return (
      <div className="Person" itemScope itemType={person.type}>
        <PersonHeader person={person} />
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
        <div className="Person-affiliation">
        <span>Affiliation:</span> <span itemProp="affiliation">{person.affiliation}</span>
        </div>
        <PersonFooter person={person} />
      </div>
    );
  }
}

export default Person;
