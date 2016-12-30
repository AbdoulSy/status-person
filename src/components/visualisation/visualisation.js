import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import d3Visualisation from './d3-visualisation';

class Visualisation extends Component {
  componentDidMount () {
    var el = ReactDOM.findDOMNode(this);
    d3Visualisation.create(el, {
      width: '950px',
      height: '400px'
    }, this.getVizState());
  }

  componentDidUpdate () {
    var el = ReactDOM.findDOMNode(this);
    d3Visualisation.update(el, this.getVizState());
  }

  getVizState () {
    return {
      data: this.props.data
    };
  }

  componentWillUnmount () {
    var el = ReactDOM.findDOMNode(this);
    d3Visualisation._destroy(el);
  }

  render () {
    return (
      <div className="Visualisation"></div>
    );
  }
}

Visualisation.propTypes = {
    data: PropTypes.object,
};

export default Visualisation;
