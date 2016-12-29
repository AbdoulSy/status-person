import React from 'react';
import ReactDOM from 'react-dom';
import Person from './PersonHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonHeader />, div);
});
