import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Person from '../components/person/Person';
import PersonHeader from '../components/person/personHeader/person-header';
import PersonFooter from '../components/person/personFooter/person-footer';
import PersonCurrentStatusMessage
  from '../components/person/personCurrentStatusMessage/current-status-message';
import abdoulsy from '../data/abdoulsy.json';
import avatar from '../data/images/abdoulsy.jpg';
import Visualisation from '../components/visualisation/visualisation';
import '../index.css';


storiesOf('Person', module)
  .add('full component', () => (
    <Person person={abdoulsy} avatar={avatar} />
  ))
  .add('only the header', () => (
    <PersonHeader person={abdoulsy} />
  ))
  .add('only the current status message', () => (
    <PersonCurrentStatusMessage person={abdoulsy} />
  ))
  .add('only the footer', () => (
    <PersonFooter person={abdoulsy} />
  ));

storiesOf('Visualisation', module)
  .add('full component', () => (
    <Visualisation data={abdoulsy}/>
  ));
