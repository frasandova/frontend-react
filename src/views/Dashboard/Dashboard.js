import React, { Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withNamespaces, Trans } from 'react-i18next';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import EasyPieChart from 'easy-pie-chart';
import '../../components/Charts/EasyPieChart.scss';

import Sparkline from '../../components/Common/Sparkline';
import Colors from '../../components/Colors/Colors';
import FlotChart from '../../components/Charts/Flot';
import VectorMap from '../../components/Maps/VectorMap';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.sparkValue1 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
        this.sparkValue2 = [2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5];
        this.sparkValue3 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
        this.sparkValue4 = [6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2];
        this.sparkOpts1 = {
            type: 'line',
            height: 20,
            width: '70',
            lineWidth: 2,
            valueSpots: {
                '0:': Colors.byName('blue-700'),
            },
            lineColor: Colors.byName('success'),
            spotColor: Colors.byName('blue-700'),
            fillColor: 'transparent',
            highlightLineColor: Colors.byName('blue-700'),
            spotRadius: 0
        };
        this.sparkOpts2 = {
            ...this.sparkOpts1,
            lineColor: Colors.byName('info')
        }
        this.sparkOpts3 = {
            ...this.sparkOpts1,
            lineColor: "#ab47bc"
        }
        this.sparkOpts4 = {
            ...this.sparkOpts1,
            lineColor: "#e91e63"
        }

        // Main Flot chart
        this.splineData = [{
            'label': 'Clicks',
            'color': Colors.byName('purple-300'),
            data: [
                ['1', 40],
                ['2', 50],
                ['3', 40],
                ['4', 50],
                ['5', 66],
                ['6', 66],
                ['7', 76],
                ['8', 96],
                ['9', 90],
                ['10', 105],
                ['11', 125],
                ['12', 135]

            ]
        }, {
            'label': 'Unique',
            'color': Colors.byName('green-400'),
            data: [
                ['1', 30],
                ['2', 40],
                ['3', 20],
                ['4', 40],
                ['5', 80],
                ['6', 90],
                ['7', 70],
                ['8', 60],
                ['9', 90],
                ['10', 150],
                ['11', 130],
                ['12', 160]
            ]
        }, {
            'label': 'Recurrent',
            'color': Colors.byName('blue-500'),
            data: [
                ['1', 10],
                ['2', 20],
                ['3', 10],
                ['4', 20],
                ['5', 6],
                ['6', 10],
                ['7', 32],
                ['8', 26],
                ['9', 20],
                ['10', 35],
                ['11', 30],
                ['12', 56]

            ]
        }];
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: false,
                    radius: 3
                },
                splines: {
                    show: true,
                    tension: 0.39,
                    lineWidth: 5,
                    fill: 1,
                    fillColor: Colors.byName('primary')
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 0,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 220, // optional: use it for a clear representation
                tickColor: 'transparent',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        // Bar chart stacked
        // ------------------------
        this.stackedChartData = [{
            data: [
                [1, 45],
                [2, 42],
                [3, 45],
                [4, 43],
                [5, 45],
                [6, 47],
                [7, 45],
                [8, 42],
                [9, 45],
                [10, 43]
            ]
        }, {
            data: [
                [1, 35],
                [2, 35],
                [3, 17],
                [4, 29],
                [5, 10],
                [6, 7],
                [7, 35],
                [8, 35],
                [9, 17],
                [10, 29]
            ]
        }];

        this.stackedChartOptions = {
            bars: {
                show: true,
                fill: true,
                barWidth: 0.3,
                lineWidth: 1,
                align: 'center',
                // order : 1,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            colors: [Colors.byName('blue-100'), Colors.byName('blue-500')],
            series: {
                shadowSize: 3
            },
            xaxis: {
                show: true,
                position: 'bottom',
                ticks: 10,
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 60,
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: 'rgba(120,120,120,0.5)'
            },
            tooltip: true,
            tooltipOpts: {
                content: 'Value %x.0 is %y.0',
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: -20
                }
            }
        };

        // Flot bar chart
        // ------------------
        this.barChartOptions = {
            series: {
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 0.2,
                    lineWidth: 0,
                    align: 'center'
                },
                highlightColor: 'rgba(255,255,255,0.2)'
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: '#8394a9'
            },
            tooltip: true,
            tooltipOpts: {
                content: function getTooltip(label, x, y) {
                    return 'Visitors for ' + x + ' was ' + (y * 1000);
                }
            },
            xaxis: {
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                tickColor: 'transparent',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            legend: {
                show: false
            },
            shadowSize: 0
        };

        this.barChartData = [{
            'label': 'New',
            bars: {
                order: 0,
                fillColor: Colors.byName('primary')
            },
            data: [
                ['Jan', 20],
                ['Feb', 15],
                ['Mar', 25],
                ['Apr', 30],
                ['May', 40],
                ['Jun', 35]
            ]
        }, {
            'label': 'Recurrent',
            bars: {
                order: 1,
                fillColor: Colors.byName('green-400')
            },
            data: [
                ['Jan', 35],
                ['Feb', 25],
                ['Mar', 45],
                ['Apr', 25],
                ['May', 30],
                ['Jun', 15]
            ]
        }];

        // Small flot chart
        // ---------------------
        this.chartTaskData = [{
            'label': 'Total',
            color: Colors.byName('primary'),
            data: [
                ['Jan', 14],
                ['Feb', 14],
                ['Mar', 12],
                ['Apr', 16],
                ['May', 13],
                ['Jun', 14],
                ['Jul', 19]
                //4, 4, 3, 5, 3, 4, 6
            ]
        }];
        this.chartTaskOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: false
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 3,
                    fill: 1
                },
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 30, // optional: use it for a clear representation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        // Vector Map
        // -----------------

        // USA Map
        this.usa_markers = [{
            latLng: [40.71, -74.00],
            name: 'New York'
        }, {
            latLng: [34.05, -118.24],
            name: 'Los Angeles'
        }, {
            latLng: [41.87, -87.62],
            name: 'Chicago',
            style: {
                fill: Colors.byName('pink-500'),
                r: 15
            }
        }, {
            latLng: [29.76, -95.36],
            name: 'Houston',
            style: {
                fill: Colors.byName('purple-500'),
                r: 10
            }
        }, {
            latLng: [39.95, -75.16],
            name: 'Philadelphia'
        }, {
            latLng: [38.90, -77.03],
            name: 'Washington'
        }, {
            latLng: [37.36, -122.03],
            name: 'Silicon Valley',
            style: {
                fill: Colors.byName('green-500'),
                r: 20
            }
        }];

        this.usa_options = {
            map: 'us_mill_en',
            normalizeFunction: 'polynomial',
            backgroundColor: '#fff',
            regionsSelectable: false,
            markersSelectable: false,
            zoomButtons: false,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: Colors.byName('blueGrey-200')
                },
                hover: {
                    fill: Colors.byName('gray-light'),
                    stroke: '#fff'
                },
            },
            markerStyle: {
                initial: {
                    fill: Colors.byName('blue-500'),
                    stroke: '#fff',
                    r: 10
                },
                hover: {
                    fill: Colors.byName('orange-500'),
                    stroke: '#fff'
                }
            }
        };

    }

    componentDidMount() {
        // Easy Pie chart
        // -----------------
        let pieOptionsTask = {
            lineWidth: 6,
            trackColor: 'transparent',
            barColor: Colors.byName('primary'),
            scaleColor: false,
            size: 90,
            lineCap: 'round',
            animate: {
                duration: 3000,
                enabled: true
            }
        };
        new EasyPieChart(this.refs.easypie, pieOptionsTask);
    }

    componentWillMount() {
        this.props.setHeaderTitle('Dashboard');
    }

    /**
     * Returns a string formatted date
     */
    today(type) {
        const t = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (type === 'month') return months[t.getMonth()]
        if (type === 'date') return t.getDate();
        if (type === 'day') return days[t.getDay()];
    }

    render() {
        return (
            <section className="section-container">
                <div className="content-heading bg-white">
                    <div className="row">
                        <div className="col-sm-9">
                            <h4 className="m0 text-thin">
                                <Trans i18nKey='WELCOME'></Trans> Centric dashboard
                            </h4>
                            <small>Bootstrap admin dashboard template</small>
                        </div>
                        <div className="col-sm-3 text-right d-none d-sm-block">
                            <button
                                className="mt-sm btn btn-labeled btn-secondary ripple"
                                type="button"
                            >
                                Apps
                                <span className="btn-label btn-label-right">
                                    <i className="ion-plus-round" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-6 col-xl-3">
                            <div className="cardbox">
                                <div className="cardbox-body pv">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <h4 className="m0 text-thin">
                                                350
                                            </h4>
                                            <small className="m0 text-muted">
                                                <em className="mr-sm ion-arrow-up-b" />
                                                New visitors
                                            </small>
                                        </div>
                                        <div className="float-right mt-lg">
                                            <Sparkline options={this.sparkOpts1}
                                                values={this.sparkValue1}
                                                className="sparkline"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-3">
                            <div className="cardbox">
                                <div className="cardbox-body pv">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <h4 className="m0 text-thin">
                                                10,200
                                            </h4>
                                            <small className="m0 text-muted">
                                                <em className="mr-sm ion-arrow-down-b" />
                                                Page views
                                            </small>
                                        </div>
                                        <div className="float-right mt-lg">
                                            <Sparkline options={this.sparkOpts2}
                                                values={this.sparkValue2}
                                                className="sparkline"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-3 d-none d-xl-block">
                            <div className="cardbox">
                                <div className="cardbox-body pv">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <h4 className="m0 text-thin">
                                                880
                                            </h4>
                                            <small className="m0 text-muted">
                                                <em className="mr-sm ion-arrow-up-b" />
                                                Last income
                                            </small>
                                        </div>
                                        <div className="float-right mt-lg">
                                            <Sparkline options={this.sparkOpts3}
                                                values={this.sparkValue3}
                                                className="sparkline"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-3 d-none d-xl-block">
                            <div className="cardbox">
                                <div className="cardbox-body pv">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <h4 className="m0 text-thin">
                                                780
                                            </h4>
                                            <small className="m0 text-muted">
                                                <em className="mr-sm ion-arrow-up-b" />
                                                Reservations
                                            </small>
                                        </div>
                                        <div className="float-right mt-lg">
                                            <Sparkline options={this.sparkOpts4}
                                                values={this.sparkValue4}
                                                className="sparkline"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9 col-lg-12">
                            <div className="row">
                                <div className="col-xl-8 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <UncontrolledDropdown className="float-right">
                                                <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-secondary btn-flat btn-flat-icon ripple"
                                                >
                                                    <em className="ion-android-more-vertical" />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>Last 30 days</DropdownItem>
                                                    <DropdownItem>Last week</DropdownItem>
                                                    <DropdownItem>Last year</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <div className="cardbox-title">
                                                Analytic board
                                            </div>
                                            <small>
                                                Nulla commodo blandit cursus.
                                            </small>
                                        </div>
                                        <div className="cardbox-body">
                                            <div
                                                className="float-right pr-sm btn-group btn-group-sm"
                                                role="group"
                                                aria-label="..."
                                            >
                                                <button
                                                    className="btn btn-secondary btn-sm btn-secondary"
                                                    type="button"
                                                >
                                                    Total
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-sm btn-secondary"
                                                    type="button"
                                                >
                                                    Average
                                                </button>
                                            </div>
                                            <FlotChart
                                                className="flot-chart flot-chart-lg flot-legend-left"
                                                data={this.splineData} options={this.splineOptions}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right">
                                                <p className="m0 text-muted">
                                                    <em className="mr-sm ion-arrow-up-b" />
                                                    20%
                                                </p>
                                            </div>
                                            <div className="cardbox-title">
                                                Earnings
                                            </div>
                                            <small>
                                                Based on last month analytics.
                                            </small>
                                        </div>
                                        <div className="cardbox-body">
                                            <div
                                                className="btn-group btn-group-sm"
                                                role="group"
                                                aria-label="..."
                                            >
                                                <button
                                                    className="btn btn-secondary btn-sm btn-secondary"
                                                    type="button"
                                                >
                                                    2015
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-sm btn-secondary"
                                                    type="button"
                                                >
                                                    2016
                                                </button>
                                            </div>
                                            <FlotChart
                                                className="flot-chart"
                                                data={this.stackedChartData} options={this.stackedChartOptions}
                                                height="245px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-xl-4">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right">
                                                <span className="mr">
                                                    <em className="ion-record spr text-primary" />
                                                    <small className="va-middle">
                                                        2016
                                                    </small>
                                                </span>
                                                <span>
                                                    <em className="ion-record spr text-success" />
                                                    <small className="va-middle">
                                                        2015
                                                    </small>
                                                </span>
                                            </div>
                                            <div className="cardbox-title">
                                                Sales
                                            </div>
                                        </div>
                                        <div className="cardbox-body">
                                            <FlotChart
                                                className="flot-chart flot-chart-md"
                                                data={this.barChartData} options={this.barChartOptions}
                                                height="235px"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-8">
                                    <div className="cardbox">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Project</th>
                                                        <th>Completion</th>
                                                        <th className="text-right">
                                                            Trend
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="va-middle">
                                                            <span className="badge bg-pink-500">
                                                                1
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <p className="m0">
                                                                Vestibulum
                                                                <br />
                                                                <small className="text-thin">
                                                                    Nunc posuere
                                                                    eleifend
                                                                    lobortis.
                                                                </small>
                                                            </p>
                                                        </td>
                                                        <td className="va-middle">
                                                            50%
                                                        </td>
                                                        <td className="text-right va-middle">
                                                            <em className="ion-arrow-graph-up-right text-success" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="va-middle">
                                                            <span className="badge bg-purple-400">
                                                                2
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <p className="m0">
                                                                Runfaster
                                                                <br />
                                                                <small className="text-thin">
                                                                    Nunc posuere
                                                                    eleifend
                                                                    lobortis.
                                                                </small>
                                                            </p>
                                                        </td>
                                                        <td className="va-middle">
                                                            30%
                                                        </td>
                                                        <td className="text-right va-middle">
                                                            <em className="ion-arrow-graph-down-right text-warning" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="va-middle">
                                                            <span className="badge bg-indigo-500">
                                                                3
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <p className="m0">
                                                                Medic Healthcare
                                                                <br />
                                                                <small className="text-thin">
                                                                    Nunc posuere
                                                                    eleifend
                                                                    lobortis.
                                                                </small>
                                                            </p>
                                                        </td>
                                                        <td className="va-middle">
                                                            80%
                                                        </td>
                                                        <td className="text-right va-middle">
                                                            <em className="ion-arrow-graph-up-right text-success" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="va-middle">
                                                            <span className="badge bg-info">
                                                                4
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <p className="m0">
                                                                Videotubeyou
                                                                <br />
                                                                <small className="text-thin">
                                                                    Nunc posuere
                                                                    eleifend
                                                                    lobortis.
                                                                </small>
                                                            </p>
                                                        </td>
                                                        <td className="va-middle">
                                                            50%
                                                        </td>
                                                        <td className="text-right va-middle">
                                                            <em className="ion-arrow-graph-down-right text-warning" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <UncontrolledDropdown className="float-right">
                                        <DropdownToggle
                                            tag="button"
                                            className="btn btn-secondary btn-flat btn-flat-icon ripple"
                                        >
                                            <em className="ion-android-more-vertical" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Last 30 days</DropdownItem>
                                            <DropdownItem>Last week</DropdownItem>
                                            <DropdownItem>Last year</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <div className="cardbox-title">
                                        Activity
                                    </div>
                                    <small>What's people doing right now</small>
                                </div>
                                <div className="cardbox-body bb">
                                    <p className="float-left mr">
                                        <a href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="spr">
                                                Adam
                                            </strong>
                                            <span className="spr">
                                                posted in
                                            </span>
                                            <a href="#">Material</a>
                                        </p>
                                        <p className="bl pl">
                                            <i>That's awesome!</i>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>2 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body bb">
                                    <p className="float-left mr">
                                        <a href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="spr">
                                                Dora
                                            </strong>
                                            <span>added a new task</span>
                                        </p>
                                        <p>
                                            <em className="ion-calendar icon-fw" />
                                            <a href="#">Start migration</a>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>3 hours ago</span>
                                            </div>
                                            <div className="float-right">
                                                <span>2</span>
                                                <em className="ion-star ml-sm text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body bb">
                                    <p className="float-left mr">
                                        <a href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="spr">
                                                Kathryn
                                            </strong>
                                            <span className="spr">
                                                published
                                            </span>
                                            <a href="#">Trip</a>
                                        </p>
                                        <p>
                                            <a href="#">
                                                <img
                                                    className="mr-sm thumb48"
                                                    src="img/pic1.jpg"
                                                    alt="Pic"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    className="mr-sm thumb48"
                                                    src="img/pic2.jpg"
                                                    alt="Pic"
                                                />
                                            </a>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>4 hours ago</span>
                                            </div>
                                            <div className="float-right">
                                                <span>2</span>
                                                <em className="ion-ios-heart ml-sm text-danger" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body bb">
                                    <p className="float-left mr">
                                        <a href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/02.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="spr">
                                                Daniel
                                            </strong>
                                            <span className="spr">
                                                joined to
                                            </span>
                                            <a href="#">Group</a>
                                        </p>
                                        <p>
                                            <span className="image-list">
                                                <a href="#">
                                                    <img
                                                        className="rounded-circle thumb32"
                                                        src="img/user/03.jpg"
                                                        alt="User"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="rounded-circle thumb32"
                                                        src="img/user/04.jpg"
                                                        alt="User"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="rounded-circle thumb32"
                                                        src="img/user/05.jpg"
                                                        alt="User"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="rounded-circle thumb32"
                                                        src="img/user/07.jpg"
                                                        alt="User"
                                                    />
                                                </a>
                                                <strong>
                                                    <a
                                                        className="ml-sm link-unstyled"
                                                        href="#"
                                                    >
                                                        +3
                                                    </a>
                                                </strong>
                                            </span>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>yesterday</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body bb">
                                    <p className="float-left mr">
                                        <a href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="spr">
                                                Leroy Day
                                            </strong>
                                            <span className="spr">
                                                wakes up!
                                            </span>
                                        </p>
                                        <p className="bl pl">
                                            <i>That's awesome!</i>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>2 weeks ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="cardbox-footer btn btn-flat btn-secondary"
                                    href="#"
                                >
                                    <small className="text-center text-muted lh1">
                                        See more activities
                                    </small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="cardbox">
                                <div className="cardbox-heading bg-pink-500 ripple ripple-block">
                                    <div className="cardbox-title text-center">
                                        <small>{this.today('month')}</small>
                                        <h4 className="mv-sm text-md">{this.today('date')}</h4>
                                        <span>{this.today('day')}</span>
                                    </div>
                                </div>
                                <div className="ui-datepicker">
                                    <DatePicker inline/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">
                                        <div className="float-right">
                                            <em className="ion-ios-people text-soft icon-lg" />
                                        </div>
                                        Resources distribution
                                    </div>
                                </div>
                                <div className="cardbox-body pt0">
                                    <VectorMap
                                        height="240px"
                                        options={this.usa_options}
                                        series={{}}
                                        markers={this.usa_markers}/>
                                </div>
                                <ul className="list-group m0">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Silicon Valley</span>
                                        <span className="ml-auto badge badge-xs bg-green-500">
                                            15
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Chicago</span>
                                        <span className="ml-auto badge badge-xs bg-pink-500">
                                            9
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Houston</span>
                                        <span className="ml-auto badge badge-xs bg-purple-500">
                                            3
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Others</span>
                                        <span className="ml-auto badge badge-xs bg-blue-500">
                                            25
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">
                                        <div className="float-right">
                                            <a href="#">
                                                <em className="ion-plus-round text-soft" />
                                            </a>
                                        </div>
                                        Tasks
                                    </div>
                                </div>
                                <div className="cardbox-body text-center pt0">
                                    <div ref="easypie" data-percent="85"
                                        className="easypie-chart block-center">
                                        <small className="percentage">
                                            Goal
                                        </small>
                                    </div>
                                    <p className="mv">85% productivity</p>
                                </div>
                                <div className="list-group m0">
                                    <a
                                        className="list-group-item bt0 justify-content-between"
                                        href="#"
                                    >
                                        <span className="text-sm">
                                            Work on project presentation
                                        </span>
                                        <span className="float-right">
                                            <em className="ion-ios-arrow-right" />
                                        </span>
                                    </a>
                                    <a
                                        className="list-group-item justify-content-between"
                                        href="#"
                                    >
                                        <span className="text-sm">
                                            Prepare a call with Robert
                                        </span>
                                        <span className="float-right">
                                            <em className="ion-ios-arrow-right" />
                                        </span>
                                    </a>
                                    <a
                                        className="list-group-item justify-content-between"
                                        href="#"
                                    >
                                        <span className="text-sm">
                                            Release a new version
                                        </span>
                                        <span className="float-right">
                                            <em className="ion-ios-arrow-right" />
                                        </span>
                                    </a>
                                    <a
                                        className="list-group-item bb0 justify-content-between"
                                        href="#"
                                    >
                                        <span className="text-sm">
                                            Tell Houston there's no problem
                                        </span>
                                        <span className="float-right">
                                            <em className="ion-ios-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                                <FlotChart
                                    className="flot-chart flot-chart-sm"
                                    data={this.chartTaskData} options={this.chartTaskOptions}
                                    height="90px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withNamespaces('translations')(withHeaderTitle(Dashboard));
