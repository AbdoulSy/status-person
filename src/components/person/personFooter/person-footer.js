import React, { Component } from 'react';

class PersonFooter extends Component {
  render() {
    let { longTermStatus, postalAddress } = this.props.person;

    return (
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
    );
  }
}

export default PersonFooter;
