import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/person/Person';
import abdoulsy from './data/abdoulsy.json';
import avatar from './data/images/abdoulsy.jpg';
import Visualisation from './components/visualisation/visualisation';
import './index.css';

ReactDOM.render(
  <div className="App">
    <Person person={abdoulsy} avatar={avatar} />
    <Visualisation data={abdoulsy} />
  </div>,
  document.getElementById('root')
);
