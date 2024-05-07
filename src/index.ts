import * as d3 from 'd3';

document.body.innerHTML = '<h1>D3 + TypeScript Project</h1>';

const svg = d3.select('body').append('svg')
    .attr('width', 800)
    .attr('height', 600);

svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 70)
    .attr('r', 50)
    .style('fill', 'red');
