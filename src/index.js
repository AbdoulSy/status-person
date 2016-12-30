/* jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import Person from './components/person/Person';
import someone from './data/abdoulsy.json';
import avatar from './data/images/abdoulsy.jpg';
import Visualisation from './components/visualisation/visualisation';
import './index.css';

// Action
const showPersonAction = {type: "SHOW_OTHER_PERSON"};

//Reducer
function personStore(state = {person: {}, avatar: {}}, action) {
  const person = state.person;
  switch (action.type) {
    case 'SHOW_OTHER_PERSON':
      return {person: person, avatar: avatar};
    default:
      return {person: someone, avatar: avatar};
  }
}

// Store
const store = createStore(personStore);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    person: state.person,
    avatar: avatar
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onShowPerson: () => dispatch(showPersonAction)
  };
}
//Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);



ReactDOM.render(
  <div className="App">
    <Provider store={store}>
      <App />
    </Provider>
    <Visualisation data={someone} />
  </div>,
  document.getElementById('root')
);
