import React, {Component} from 'react';
import {array} from 'prop-types';

import './index.scss';
import * as d3 from "d3";

class PieChart extends Component {
    static propTypes = {
        pokemonStats: array.isRequired,
    };

    componentDidMount() {
        let width = 156,
            height = 156,
            radius = 78,
            color = d3.scaleOrdinal(d3.schemeCategory10);

        let data = this.props.pokemonStats.map(item => ({
            'label': item.stat.name,
            'value': item.base_stat
        }));

        let pie = d3.pie()
            .value(function (d) {
                return d.value;
            })
            .sort(null);

        let arc = d3.arc()
            .innerRadius(radius - 40)
            .outerRadius(radius - 10);

        let svg = d3.select(this.pie)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let tooltip = d3.select(this.pie)
            .append('div')
            .attr('class', 'tooltip');

        tooltip.append('div')
            .attr('class', 'label');

        tooltip.append('div')
            .attr('class', 'value');

        let path = svg.datum(data).selectAll("path")
            .data(pie)
            .enter()
            .append("path")
            .attr("fill", function (d, i) {
                return color(i);
            })
            .attr("d", arc);

        path.on('mouseover', function (d) {
            console.log(d);
            tooltip.select('.label').html(d.data.label);
            tooltip.select('.value').html(d.data.value);
            tooltip.style('display', 'block');
        });

        path.on('mouseout', function (d) {
            tooltip.style('display', 'none');
        });
    };


    render() {
        return (
            <div
                className="pie-chart"
                ref={pie => this.pie = pie}
            >
            </div>
        );
    }
}

export default PieChart;
