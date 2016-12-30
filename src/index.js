import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/person/Person';
import someone from './data/abdoulsy.json';
import avatar from './data/images/abdoulsy.jpg';
import Visualisation from './components/visualisation/visualisation';
import './index.css';

ReactDOM.render(
  <div className="App">
    <Person person={someone} avatar={avatar} />
    <Visualisation data={someone} />
  </div>,
  document.getElementById('root')
);
