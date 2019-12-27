import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import $ from 'jquery';
import Colors from "../../components/Colors/Colors";
import EasyPieChart from 'easy-pie-chart';
import '../../components/Charts/EasyPieChart.scss';
// Knob charts
import 'jquery-knob/js/jquery.knob.js';


class Radial extends Component {

    componentWillMount() {
        this.props.setHeaderTitle('Radial');
    }

    componentDidMount() {

        let knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            thickness: 0.1,
            fgColor: Colors.byName('info'),
            bgColor: 'rgba(162,162,162, .09)'
        };
        $(this.refs.knobChart1).knob(knobLoaderOptions1);

        let knobLoaderOptions2 = {
            width: '50%', // responsive
            displayInput: true,
            thickness: 1,
            inputColor: '#fff',
            fgColor: Colors.byName('deepPurple-500'),
            bgColor: Colors.byName('green-500'),
            readOnly: true
        };
        $(this.refs.knobChart2).knob(knobLoaderOptions2);

        let knobLoaderOptions3 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: Colors.byName('pink-500'),
            bgColor: 'rgba(162,162,162, .09)',
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        $(this.refs.knobChart3).knob(knobLoaderOptions3);

        let knobLoaderOptions4 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: Colors.byName('info'),
            bgColor: 'rgba(162,162,162, .09)',
            angleOffset: -125,
            angleArc: 250
        };
        $(this.refs.knobChart4).knob(knobLoaderOptions4);

        let pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: Colors.byName('success'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie1, pieOptions1);

        let pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: Colors.byName('warning'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie2, pieOptions2);

        let pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: Colors.byName('danger'),
            trackColor: false,
            scaleColor: Colors.byName('gray'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie3, pieOptions3);

        let pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: Colors.byName('danger'),
            trackColor: 'rgba(162,162,162, .09)',
            scaleColor: Colors.byName('gray-dark'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie4, pieOptions4);
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid"><h4 className="page-header clearfix mt0">Knob</h4>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Default</div>
                                <div className="cardbox-body text-center">
                                    <input ref="knobChart1" id="knob-chart1" type="text" defaultValue="80" data-max="100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Ready only</div>
                                <div className="cardbox-body text-center">
                                    <input ref="knobChart2" id="knob-chart2" type="text" defaultValue="45" data-max="100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Offset and arc</div>
                                <div className="cardbox-body text-center">
                                    <input ref="knobChart3" id="knob-chart4" type="text" defaultValue="20" data-max="100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Display previous</div>
                                <div className="cardbox-body text-center">
                                    <input ref="knobChart4" id="knob-chart3" type="text" defaultValue="30" data-max="100" />
                                </div>
                            </div>
                        </div>
                    </div><h4 className="page-header clearfix">Easypie Charts</h4>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Default</div>
                                <div className="cardbox-body text-center">
                                    <div ref="easypie1" className="easypie-chart" data-percent="85"><span>85</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Slim</div>
                                <div className="cardbox-body text-center">
                                    <div ref="easypie2" className="easypie-chart" data-percent="45"><span>45</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Track color</div>
                                <div className="cardbox-body text-center">
                                    <div ref="easypie3" className="easypie-chart" data-percent="25"><span>25</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Scale color</div>
                                <div className="cardbox-body text-center">
                                    <div ref="easypie4" className="easypie-chart" data-percent="60"><span>60</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Radial);
