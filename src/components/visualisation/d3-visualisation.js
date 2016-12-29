/* jshint esversion:6 */

import * as d3 from "d3";

export default class d3Visualisation {
  static create (el, props, state) {
    let width = parseInt(props.width, 10);
    let height = parseInt(props.height, 10);
    var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

    svg.append('g')
        .attr('class', 'd3-points')
        .attr('transform', `translate(${width/2}, ${height/2})`);

    this.update(el, state);
  }

  static update (el, state) {
    // Re-compute the scales, and render the data points
    this._drawPoints(el, state.data);
  }

  _destroy () {
    //do nothing
  }

  static _drawPoints (el, data) {
    var g = d3.select(el).selectAll('.d3-points');
      console.log(data);

    var rootNode = g
      .append('g')
      .attr('className', 'person-node')

   var rootCirle =
   rootNode.append('circle')
      .attr('className', 'root-circle');

   var rootTitle = rootNode.append('text')
    .attr('className', 'rootName')
    .text(data.basic.name);

  rootTitle.attr('transform', 'translate(-35, 0)');

   rootCirle.attr('r', 50);
   rootCirle.attr('fill','steelblue');
   rootCirle.attr('stroke-width','2');
   rootCirle.attr('stroke','#CCC');

  }

}

