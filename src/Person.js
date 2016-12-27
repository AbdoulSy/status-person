import React, { Component } from 'react';
import avatar from '../public/images/abdoulsy.jpg';
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div className="Person" itemScope itemType="http://schema.org/Person">
        <header className="Person-header">
          <div className="Person-basic">
            <h1 itemProp="name">Abdoul Sy</h1>
            <h3 itemProp="jobTitle">Developer</h3>
            <h5 itemProp="email">message@abdoulsy.eu</h5>
          </div>
          <div className="Person-avatar">
            <div itemProp="image" className="PersonImage">
              <img src={avatar} role="presentation"
                alt="Abdoul Sy"/>
            </div>
          </div>
        </header>
        <div className="currentStatus">
          <header>
            <p>current status message:</p>
            <div className="statusMessage">
              <p>Sitting at Costa's, coding a Person's Current Status message
              This is pertty Meta right now.
              </p>
              <small>at:
                <span>Costa's Clapham South</span>
                <span> Tue 27/12 14:38 </span>
                </small>
            </div>
          </header>
        </div>
        <p itemProp="telephone">(+44) 07 810 763 236</p>
        <p itemProp="url">
          <a href="http://web.abdoulsy.eu">
           http://web.abdoulsy.eu
          </a>
        </p>
        <div className="Person-postalAddress" itemScope itemType="http://schema.org/PostalAddress">
          <p itemProp="streetAddress">7 Burgess Park Mansions,
          <br/> Fortune Green Road. </p>
          <span itemProp="addressRegion">Camden</span>,
          <span itemProp="postalCode">NW61DP</span>,
          <span itemProp="addressLocality">London</span>
        </div>
      </div>
    );
  }
}

export default Person;
