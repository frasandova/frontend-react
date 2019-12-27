import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import VectorMap from "../../components/Maps/VectorMap";
import Colors from "../../components/Colors/Colors";

class VectorMapView extends Component {
    state = {
        world_markers: [
            { latLng: [47.14, 9.52], name: "Liechtenstein" },
            { latLng: [7.11, 171.06], name: "Marshall Islands" },
            { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
            { latLng: [3.2, 73.22], name: "Maldives" },
            { latLng: [35.88, 14.5], name: "Malta" },
            { latLng: [12.05, -61.75], name: "Grenada" },
            {
                latLng: [13.16, -61.23],
                name: "Saint Vincent and the Grenadines"
            },
            { latLng: [13.16, -59.55], name: "Barbados" },
            { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
            { latLng: [-4.61, 55.45], name: "Seychelles" },
            { latLng: [7.35, 134.46], name: "Palau" },
            { latLng: [42.5, 1.51], name: "Andorra" }
        ],
        world_options: {
            map: "world_mill_en",
            normalizeFunction: "polynomial",
            backgroundColor: "#fff",
            regionsSelectable: true,
            markersSelectable: true,
            regionStyle: {
                initial: {
                    fill: Colors.byName("gray-lighter")
                },
                hover: {
                    fill: Colors.byName("indigo-500"),
                    stroke: "#fff"
                }
            },
            markerStyle: {
                initial: {
                    fill: Colors.byName("pink-500"),
                    stroke: "#fff",
                    r: 10
                },
                hover: {
                    fill: Colors.byName("amber-500"),
                    stroke: "#fff"
                }
            }
        },

        usa_markers: [
            {
                latLng: [40.71, -74.0],
                name: "New York"
            },
            {
                latLng: [34.05, -118.24],
                name: "Los Angeles"
            },
            {
                latLng: [41.87, -87.62],
                name: "Chicago"
            },
            {
                latLng: [29.76, -95.36],
                name: "Houston"
            },
            {
                latLng: [39.95, -75.16],
                name: "Philadelphia"
            },
            {
                latLng: [38.9, -77.03],
                name: "Washington"
            },
            {
                latLng: [37.36, -122.03],
                name: "Silicon Valley",
                style: {
                    fill: Colors.byName("green-500"),
                    r: 20
                }
            }
        ],
        usa_options: {
            map: "us_mill_en",
            normalizeFunction: "polynomial",
            backgroundColor: "#fff",
            regionsSelectable: true,
            markersSelectable: true,
            regionStyle: {
                initial: {
                    fill: Colors.byName("deepPurple-400")
                },
                hover: {
                    fill: Colors.byName("deepPurple-100"),
                    stroke: "#fff"
                }
            },
            markerStyle: {
                initial: {
                    fill: Colors.byName("amber-500"),
                    stroke: "#fff",
                    r: 10
                },
                hover: {
                    fill: Colors.byName("orange-500"),
                    stroke: "#fff"
                }
            }
        }
    };

    componentWillMount() {
        this.props.setHeaderTitle('jVector Map');
    }

    componentDidMount() {}

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            <div className="float-right">
                                <span className="mr text-muted">
                                    Show last year events
                                </span>
                                <label className="switch switch-info">
                                    <input type="checkbox" />
                                    <span />
                                </label>
                            </div>
                            <div className="card-title">World Events</div>
                        </div>
                        <div className="card-body">
                            <VectorMap
                                className="vector-map"
                                height="240px"
                                options={this.state.world_options}
                                markers={this.state.world_markers}
                                series={{}}
                            />
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            <div className="cardbox-title">Usa Makers</div>
                        </div>
                        <div className="cardbox-body">
                            <VectorMap
                                className="vector-map"
                                height="240px"
                                options={this.state.usa_options}
                                markers={this.state.usa_markers}
                                series={{}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(VectorMapView);
