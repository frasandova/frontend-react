import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { withHeaderTitle } from "../../components/Header/HeaderTitle";
import {
    Line as LineChart,
    Bar as BarChart,
    Doughnut as DoughnutChart,
    Pie as PieChart,
    Polar as PolarChart,
    Radar as RadarChart
} from "react-chartjs-2";

import Colors from "../../components/Colors/Colors";

// random values for demo
const rFactor = () => Math.round(Math.random() * 100);

class ChartJS extends Component {
    constructor(props) {
        super(props);

        // Line chart
        // -----------------------------------
        this.Line = {
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July"
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: Colors.asRgba('deepPurple-800',0.2),
                        borderColor: Colors.byName('deepPurple-800'),
                        pointBorderColor: "#fff",
                        data: [
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor()
                        ]
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: Colors.asRgba('lightBlue-400', .2),
                        borderColor: Colors.byName('lightBlue-400'),
                        pointBorderColor: "#fff",
                        data: [
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor()
                        ]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };

        // Bar chart
        // -----------------------------------
        this.Bar = {
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July"
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: Colors.byName('blue-500'),
                        borderColor: Colors.byName('blue-500'),
                        data: [
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor()
                        ]
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: Colors.byName('blue-900'),
                        borderColor: Colors.byName('blue-900'),
                        data: [
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor(),
                            rFactor()
                        ]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };

        //  Doughnut chart
        // -----------------------------------
        this.Doughnut = {
            data: {
                labels: ["Purple", "Yellow", "Blue"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [300, 50, 100],
                        backgroundColor: [Colors.byName('deepPurple-500'), Colors.byName('yellow-400'), Colors.byName('blue-500')],
                        hoverBackgroundColor: [Colors.byName('deepPurple-500'), Colors.byName('yellow-400'), Colors.byName('blue-500')]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };

        // Pie chart
        // -----------------------------------
        this.Pie = {
            data: {
                labels: ["Purple", "Yellow", "Blue"],
                datasets: [
                    {
                        label: "My First dataset",
                        data: [300, 50, 100],
                        backgroundColor: [Colors.byName('deepPurple-500'), Colors.byName('yellow-400'), Colors.byName('blue-500')],
                        hoverBackgroundColor: [Colors.byName('deepPurple-500'), Colors.byName('yellow-400'), Colors.byName('blue-500')]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };

        // Polar chart
        // -----------------------------------
        this.Polar = {
            data: {
                datasets: [
                    {
                        data: [11, 16, 7, 3],
                        backgroundColor: [
                            Colors.byName('purple-a200'),
                            Colors.byName('deepPurple-500'),
                            Colors.byName('purple-a200'),
                            Colors.byName('deepPurple-500')
                        ],
                        label: "My dataset" // for legend
                    }
                ],
                labels: ["Label 1", "Label 2", "Label 3", "Label 4"]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };

        // Radar chart
        // -----------------------------------
        this.Radar = {
            data: {
                labels: [
                    "Eating",
                    "Drinking",
                    "Sleeping",
                    "Designing",
                    "Coding",
                    "Cycling",
                    "Running"
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: Colors.asRgba('deepPurple-800',0.2),
                        borderColor: Colors.byName('deepPurple-800'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        backgroundColor: Colors.asRgba('lightBlue-800',0.2),
                        borderColor: Colors.byName('lightBlue-800'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        };
    }

    componentWillMount() {
        this.props.setHeaderTitle('ChartJS');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid container-lg">
                    <Row className="mb-3">
                        <Col lg={6}>
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="cardbox-title">Line Chart</div>
                                </div>
                                <div className="cardbox-body">
                                    <LineChart
                                        key={1}
                                        data={this.Line.data}
                                        options={this.Line.options}
                                        width={600}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div className="cardbox">
                                    <div className="cardbox-heading">
                                        <div className="cardbox-title">Bar Chart</div>
                                    </div>
                                    <div className="cardbox-body">
                                        <BarChart
                                            key={2}
                                            data={this.Bar.data}
                                            options={this.Bar.options}
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <div>
                                <div className="cardbox">
                                    <div className="cardbox-heading">
                                        <div className="cardbox-title">Polar Area Chart</div>
                                    </div>
                                    <div className="cardbox-body">
                                        <PolarChart
                                            key={3}
                                            data={this.Polar.data}
                                            options={this.Polar.options}
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div className="cardbox">
                                    <div className="cardbox-heading">
                                        <div className="cardbox-title">Radar Chart</div>
                                    </div>
                                    <div className="cardbox-body">
                                        <RadarChart
                                            key={4}
                                            data={this.Radar.data}
                                            options={this.Radar.options}
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <div>
                                <div className="cardbox">
                                    <div className="cardbox-heading">
                                        <div className="cardbox-title">Pie Chart</div>
                                    </div>
                                    <div className="cardbox-body">
                                        <PieChart
                                            key={5}
                                            data={this.Pie.data}
                                            options={this.Pie.options}
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div className="cardbox">
                                    <div className="cardbox-heading">
                                        <div className="cardbox-title">Doughnut Chart</div>
                                    </div>
                                    <div className="cardbox-body">
                                        <DoughnutChart
                                            key={6}
                                            data={this.Doughnut.data}
                                            options={this.Doughnut.options}
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(ChartJS);
