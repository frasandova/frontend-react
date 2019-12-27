import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import Colors from "../../components/Colors/Colors";
import FlotChart from "../../components/Charts/Flot";

class Flot extends Component {
    constructor(props) {
        super(props);

        // BAR
        // -----------------------------------
        this.barData = [
            {
                label: "Sales",
                color: "#009688",
                data: [
                    ["Jan", 27],
                    ["Feb", 82],
                    ["Mar", 56],
                    ["Apr", 14],
                    ["May", 28],
                    ["Jun", 77],
                    ["Jul", 23],
                    ["Aug", 49],
                    ["Sep", 81],
                    ["Oct", 20]
                ]
            }
        ];

        this.barOptions = {
            series: {
                bars: {
                    align: "center",
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.8
                            },
                            {
                                opacity: 0.5
                            }
                        ]
                    }
                }
            },
            grid: {
                borderColor: "rgba(162,162,162,.26)",
                borderWidth: 1,
                hoverable: true,
                backgroundColor: "transparent"
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + " : " + y;
                }
            },
            xaxis: {
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                mode: "categories"
            },
            yaxis: {
                // position: (isRTL ? 'right' : 'left'),
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                }
            },
            shadowSize: 0
        };

        // BAR STACKED
        // -----------------------------------
        this.barStackeData = [
            {
                label: "Sales",
                color: "#009688",
                data: [
                    ["Jan", 27],
                    ["Feb", 82],
                    ["Mar", 56],
                    ["Apr", 14],
                    ["May", 28],
                    ["Jun", 77],
                    ["Jul", 23],
                    ["Aug", 49],
                    ["Sep", 81],
                    ["Oct", 20]
                ]
            }
        ];
        this.barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: "center",
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: "rgba(162,162,162,.26)",
                borderWidth: 1,
                hoverable: true,
                backgroundColor: "transparent"
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + " : " + y;
                }
            },
            xaxis: {
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                mode: "categories"
            },
            yaxis: {
                min: 0,
                max: 200, // optional: use it for a clear represetation
                // position: (isRTL ? 'right' : 'left'),
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                }
            },
            shadowSize: 0
        };

        // SPLINE
        // -----------------------------------
        this.splineData = [
            {
                label: "Uniques",
                color: "#3F51B5",
                data: [
                    ["Mar", 70],
                    ["Apr", 85],
                    ["May", 59],
                    ["Jun", 93],
                    ["Jul", 66],
                    ["Aug", 86],
                    ["Sep", 60]
                ]
            },
            {
                label: "Recurrent",
                color: "#2196F3",
                data: [
                    ["Mar", 21],
                    ["Apr", 12],
                    ["May", 27],
                    ["Jun", 24],
                    ["Jul", 16],
                    ["Aug", 39],
                    ["Sep", 15]
                ]
            }
        ];
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 2
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 1
                }
            },
            grid: {
                borderColor: "rgba(162,162,162,.26)",
                borderWidth: 1,
                hoverable: true,
                backgroundColor: "transparent"
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + " : " + y;
                }
            },
            xaxis: {
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                mode: "categories"
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                // position: (isRTL ? 'right' : 'left'),
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };

        // AREA
        // -----------------------------------
        this.areaData = [
            {
                label: "Uniques",
                color: "#0277BD",
                data: [
                    ["Mar", 50],
                    ["Apr", 84],
                    ["May", 52],
                    ["Jun", 88],
                    ["Jul", 69],
                    ["Aug", 92],
                    ["Sep", 58]
                ]
            },
            {
                label: "Recurrent",
                color: "#80DEEA",
                data: [
                    ["Mar", 13],
                    ["Apr", 44],
                    ["May", 24],
                    ["Jun", 47],
                    ["Jul", 38],
                    ["Aug", 11],
                    ["Sep", 39]
                ]
            }
        ];
        this.areaOptions = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.5
                            },
                            {
                                opacity: 0.9
                            }
                        ]
                    }
                },
                points: {
                    show: false
                }
            },
            grid: {
                borderColor: "rgba(162,162,162,.26)",
                borderWidth: 1,
                hoverable: true,
                backgroundColor: "transparent"
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + " : " + y;
                }
            },
            xaxis: {
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                mode: "categories"
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                }
                // position: (isRTL ? 'right' : 'left')
            },
            shadowSize: 0
        };

        // LINE
        // -----------------------------------
        this.lineData = [
            {
                label: "Complete",
                color: "#00BCD4",
                data: [
                    ["Jan", 50],
                    ["Feb", 93],
                    ["Mar", 120],
                    ["Apr", 140],
                    ["May", 130],
                    ["Jun", 110],
                    ["Jul", 80],
                    ["Aug", 70],
                    ["Sep", 80]
                ]
            },
            {
                label: "In Progress",
                color: "#CDDC39",
                data: [
                    ["Jan", 153],
                    ["Feb", 116],
                    ["Mar", 136],
                    ["Apr", 119],
                    ["May", 148],
                    ["Jun", 133],
                    ["Jul", 118],
                    ["Aug", 161],
                    ["Sep", 130]
                ]
            },
            {
                label: "Cancelled",
                color: "#FF5722",
                data: [
                    ["Jan", 111],
                    ["Feb", 97],
                    ["Mar", 93],
                    ["Apr", 110],
                    ["May", 90],
                    ["Jun", 75],
                    ["Jul", 92],
                    ["Aug", 92],
                    ["Sep", 44]
                ]
            }
        ];
        this.lineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: "rgba(162,162,162,.26)",
                borderWidth: 1,
                hoverable: true,
                backgroundColor: "transparent"
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + " : " + y;
                }
            },
            xaxis: {
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                },
                mode: "categories"
            },
            yaxis: {
                // position: (isRTL ? 'right' : 'left'),
                tickColor: "rgba(162,162,162,.26)",
                font: {
                    color: Colors.byName("blueGrey-200")
                }
            },
            shadowSize: 0
        };

        // PIE
        // -----------------------------------
        this.pieData = [
            {
                label: "CSS",
                color: "#009688",
                data: 40
            },
            {
                label: "LESS",
                color: "#FFC107",
                data: 90
            },
            {
                label: "SASS",
                color: "#FF7043",
                data: 75
            }
        ];
        this.pieOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function(label, series) {
                            return (
                                '<div class="flot-pie-label">' +
                                //label + ' : ' +
                                Math.round(series.percent) +
                                "%</div>"
                            );
                        },
                        background: {
                            opacity: 0.8,
                            color: "#222"
                        }
                    }
                }
            }
        };

        // DONUT
        // -----------------------------------
        this.donutData = [
            {
                color: "#4CAF50",
                data: 60,
                label: "Coffee"
            },
            {
                color: "#009688",
                data: 90,
                label: "CSS"
            },
            {
                color: "#FFC107",
                data: 50,
                label: "LESS"
            },
            {
                color: "#FF7043",
                data: 80,
                label: "Jade"
            },
            {
                color: "#3949AB",
                data: 116,
                label: "AngularJS"
            }
        ];
        this.donutOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };

        // Generate random data for realtime demo
        this.data = [];
        this.totalPoints = 300;
        /* For real time updates is necessary to use the component
        state in order to trigger the component life cycle on every update */
        this.state = {
            // REALTIME
            // -----------------------------------
            realTimeOptions: {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: ["#3F51B5", "#3F51B5"]
                        }
                    },
                    shadowSize: 0 // Drawing is faster without shadows
                },
                grid: {
                    show: false,
                    borderWidth: 0,
                    minBorderMargin: 20,
                    labelMargin: 10
                },
                xaxis: {
                    tickFormatter: function() {
                        return "";
                    }
                },
                yaxis: {
                    min: 0,
                    max: 110
                },
                legend: {
                    show: true
                },
                colors: ["#3F51B5"]
            },
            realTimeData: this.getRandomData()
        }

    }

    componentWillMount() {
        this.props.setHeaderTitle('Flot');
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                realTimeData: this.getRandomData()
            })
            // console.log(this.realTimeData)
        }, 30);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    getRandomData() {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // Do a random walk
        while (this.data.length < this.totalPoints) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }
            this.data.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i) {
            res.push([i, this.data[i]]);
        }
        return [res];
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Area</div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.areaData}
                                        options={this.areaOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">
                                        Area Spline
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.splineData}
                                        options={this.splineOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Bar</div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.barData}
                                        options={this.barOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Pie</div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.pieData}
                                        options={this.pieOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Donut</div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.donutData}
                                        options={this.donutOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">
                                        Bar - Stacked
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.barStackeData}
                                        options={this.barStackedOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">
                                        Real Time
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.state.realTimeData}
                                        options={this.state.realTimeOptions}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Line</div>
                                </div>
                                <div className="cardbox-body">
                                    <FlotChart
                                        className="flot-chart flot-chart-lg"
                                        data={this.lineData}
                                        options={this.lineOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Flot);
