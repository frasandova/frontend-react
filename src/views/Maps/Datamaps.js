import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import Datamap from "datamaps";
import Colors from '../../components/Colors/Colors';

class Datamaps extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Datamaps');
    }

    componentDidMount() {
        this.elMapBasic = this.refs.datamapBasic;
        this.elMapArc = this.refs.datamapArc;

        this.mapBasic = new Datamap({
            element: this.elMapBasic,
            scope: "usa",
            responsive: true,
            options: {
                width: 1110,
                legendHeight: 60 // optionally set the padding for the legend
            },
            geographyConfig: {
                highlightFillColor: Colors.byName("info"),
                highlightBorderWidth: 0
            },
            fills: {
                HIGH: Colors.byName("info"),
                MEDIUM: Colors.byName("info"),
                LOW: Colors.byName("info"),
                defaultFill: Colors.byName("gray-lighter")
            },
            data: {
                AZ: {
                    fillKey: "MEDIUM"
                },
                CO: {
                    fillKey: "HIGH"
                },
                DE: {
                    fillKey: "LOW"
                },
                GA: {
                    fillKey: "MEDIUM"
                }
            }
        });

        this.mapArc = new Datamap({
            element: this.elMapArc,
            scope: "usa",
            responsive: true,
            fills: {
                defaultFill: Colors.byName("blue-500"),
                win: Colors.byName("blueGrey-700")
            },
            geographyConfig: {
                borderWidth: 0,
                highlightFillColor: Colors.byName("blue-100"),
                highlightBorderWidth: 0
            },
            data: {
                TX: {
                    fillKey: "win"
                },
                FL: {
                    fillKey: "win"
                },
                NC: {
                    fillKey: "win"
                },
                CA: {
                    fillKey: "win"
                },
                NY: {
                    fillKey: "win"
                },
                CO: {
                    fillKey: "win"
                }
            }
        });

        this.mapArc.arc([
            {
                origin: "CA",
                destination: "TX",
                options: {
                    strokeWidth: 3,
                    strokeColor: "#fff"
                }
            },
            {
                origin: "OR",
                destination: "TX",
                options: {
                    strokeWidth: 3,
                    strokeColor: "#fff"
                }
            },
            {
                origin: "NY",
                destination: "TX",
                options: {
                    strokeWidth: 3,
                    strokeColor: "#fff"
                }
            }
        ]);

        // Allow resize by hooking window resize event
        window.addEventListener("resize", this.responsiveMap);
    }

    responsiveMap = e => {
        this.mapArc.resize();
        this.mapBasic.resize();
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.responsiveMap);
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <div className="cardbox">
                        <div className="cardbox-heading">Basic Map</div>
                        <div className="cardbox-body">
                            <div ref="datamapBasic" />
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            Customized Arc Map
                        </div>
                        <div className="cardbox-body">
                            <div ref="datamapArc" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Datamaps);
