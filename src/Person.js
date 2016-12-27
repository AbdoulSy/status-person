import React, { Component } from 'react';
import avatar from '../public/images/abdoulsy.jpg';
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div className="person" itemScope itemType="http://schema.org/Person">
        <h1 itemProp="name">Abdoul Sy</h1>
        <h3 itemProp="jobTitle">Developer</h3>
        <h5 itemProp="email">message@abdoulsy.eu</h5>
        <div itemScope itemType="http://schema.org/PostalAddress">          <p itemProp="addressLocality">London</p>
          <p itemProp="addressRegion">Camden</p>
          <p itemProp="postalCode">NW61DP</p>
          <p itemProp="streetAddress">7 Burgess Park Mansions,
          <br/> Fortune Green Road. </p>
        </div>
        <p itemProp="telephone">(+44) 07 810 763 236</p>
        <p itemProp="url">http://web.abdoulsy.eu</p>
        <div itemProp="colleague">
          <p>Colleague </p>
          <div className="colleagueList">
            <p itemScope itemType="Person">Ozzy</p>
          </div>
        </div>
        <div itemProp="image" className="PersonImage">
          <img src={avatar} role="presentation"
            alt="Abdoul Sy"/>

        </div>
      </div>
    );
  }
}

export default Person;
