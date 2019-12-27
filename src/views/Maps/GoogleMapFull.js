import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// required props for HOCs (withScriptjs and withGoogleMap)
const requiredProps = {
    googleMapURL:
        "//maps.google.com/maps/api/js?key=AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA", // &libraries=geometry,drawing,places
    loadingElement: <div className="gmap" style={{height: '100%'}}>Loading...</div>,
    containerElement: <div className="gmap" style={{height: '100%'}}/>,
    mapElement: <div style={{ height: `100%` }} />
};

const DemoMapCustomType = compose(
    withProps(requiredProps),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={4}
        defaultCenter={props.location}
    >
        <Marker position={props.location} />
    </GoogleMap>
));

class GoogleMapFull extends Component {
    state = {
        location: {},
        myMarkers: [
            {
                id: 0,
                name: "Canada",
                coords: { lat: 56.130366, lng: -106.346771 }
            },
            {
                id: 1,
                name: "New York",
                coords: { lat: 40.712784, lng: -74.005941 }
            },
            {
                id: 2,
                name: "Toronto",
                coords: { lat: 43.653226, lng: -79.383184 }
            },
            {
                id: 3,
                name: "San Francisco",
                coords: { lat: 37.774929, lng: -122.419416 }
            },
            {
                id: 4,
                name: "Utah",
                coords: { lat: 39.32098, lng: -111.093731 }
            }
        ]
    };

    componentWillMount() {
        this.props.setHeaderTitle('Google Maps Full');
        this.setState({
            location: this.state.myMarkers[0].coords
        })
    }

    centerMapAt = location => node => {
        console.log("Centering at: " + location);
        this.setState({
            location
        })
    };

    componentDidMount() {}

    render() {
        return (
            <section className="section-container">
                <div className="container-full">
                    <div className="row fh bg-white">
                        <div className="col-lg-3 fh d-none d-sm-block d-none d-sm-block pr0">
                            <div className="p-lg">
                                <h5 className="text-center">Places</h5>
                                <p className="text-center">
                                    Click on each item to focus a marker in the
                                    map
                                </p>
                            </div>
                            <div className="list-group list-group-unstyle ">
                                {this.state.myMarkers.map(m => (
                                    <div
                                        className={"list-group-item justify-content-between " + (m.coords === this.state.location?'active':'')}
                                        onClick={this.centerMapAt(m.coords)}
                                        key={m.id}
                                    >
                                        {m.name}
                                        <em className="float-right ion-ios-arrow-forward" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-9 fh pl0">
                            <DemoMapCustomType
                                className="fh"
                                location={this.state.location}
                                mapType="SATELLITE"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(GoogleMapFull);
