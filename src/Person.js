import React, { Component } from 'react';
import avatar from '../public/images/abdoulsy.jpg';
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
          statusMessage: `Sitting at Costa's, coding a Person's Current Status message
              This is pertty Meta right now.`,
          statusLocation: "Costa's Clapham South",
          statusDate: "Tue 27/12 14:38 ",
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
    let basic = person.basic;
    let a = person.avatar;
    let currentStatus = person.currentStatus;
    let longTermStatus = person.longTermStatus;
    let postalAddress = person.postalAddress;
    return (
      <div className="Person" itemScope itemType={person.type}>
        <header className="Person-header">
          <div className="Person-basic">
            <h1 itemProp="name">{basic.name}</h1>
            <h3 itemProp="jobTitle">{basic.jobTitle}</h3>
            <h5 itemProp="email">{basic.email}</h5>
          </div>
          <div className="Person-avatar">
            <div itemProp="image" className="PersonImage">
              <img src={a.image} role="presentation"
                alt="{basic.name}"/>
            </div>
          </div>
        </header>
        <div className="currentStatus">
          <header>
            <p>current status message:</p>
            <div className="statusMessage">
              <p>{currentStatus.statusMessage}</p>
              <small>at:
                <span>{currentStatus.statusLocation}</span>
                <span>{currentStatus.statusDate}</span>
                </small>
            </div>
          </header>
        </div>

        <div className="Person-affiliation">
        <span>Affiliation:</span> <span itemProp="affiliation">{person.affiliation}</span>
        </div>

        <footer className="longTermStatus">
          <p className="Person-telephone" itemProp="telephone">{longTermStatus.telephone}</p>
          <p itemProp="url">
            <a href="{longTermStatus.url}">
             {longTermStatus.url}
            </a>
          </p>
          <div className="Person-postalAddress" itemScope itemType="{postalAddress.type}">
            <p itemProp="streetAddress">{postalAddress.streetAddress}</p>
            <span itemProp="addressRegion">{postalAddress.addressRegion}</span>,
            <span itemProp="postalCode">{postalAddress.postalCode}</span>,
            <span itemProp="addressLocality">{postalAddress.addressLocality}</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Person;
