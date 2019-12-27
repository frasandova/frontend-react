import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
//import { Grid, Row, Col, Button } from "reactstrap";

//.grid-example .row>.col, .grid-example .row>[class^=col-]
const colStyle = {
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    backgroundColor: "rgba(241,242,243,.15)",
    border: "1px dashed rgba(0,0,0,.15)"
};

class BootstrapGrid extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Bootstrap Grid');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid grid-example">
                    <div className="card mb">
                        <h4 className="m0 card-header">Auto-layout columns</h4>
                        <div className="card-body">
                            <p className="mv-lg text-bold" id="equal-width">
                                Equal-width
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col">1 of 2</div>
                                    <div style={colStyle} className="col">1 of 2</div>
                                </div>
                                <div className="row">
                                    <div style={colStyle} className="col">1 of 3</div>
                                    <div style={colStyle} className="col">1 of 3</div>
                                    <div style={colStyle} className="col">1 of 3</div>
                                </div>
                            </div>
                            <p />
                            <p
                                className="mv-lg text-bold"
                                id="setting-one-column-width"
                            >
                                Setting one column width
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col">1 of 3</div>
                                    <div style={colStyle} className="col-6">2 of 3 (wider)</div>
                                    <div style={colStyle} className="col">3 of 3</div>
                                </div>
                                <div className="row">
                                    <div style={colStyle} className="col">1 of 3</div>
                                    <div style={colStyle} className="col-5">2 of 3 (wider)</div>
                                    <div style={colStyle} className="col">3 of 3</div>
                                </div>
                            </div>
                            <p />
                            <p
                                className="mv-lg text-bold"
                                id="variable-width-content"
                            >
                                Variable width content
                            </p>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div style={colStyle} className="col col-xl-2">1 of 3</div>
                                    <div style={colStyle} className="col-12 col-lg-auto">
                                        Variable width content
                                    </div>
                                    <div style={colStyle} className="col col-xl-2">3 of 3</div>
                                </div>
                                <div className="row">
                                    <div style={colStyle} className="col">1 of 3</div>
                                    <div style={colStyle} className="col-12 col-lg-auto">
                                        Variable width content
                                    </div>
                                    <div style={colStyle} className="col col-xl-2">3 of 3</div>
                                </div>
                            </div>
                            <p />
                            <p
                                className="mv-lg text-bold"
                                id="equal-width-multi-row"
                            >
                                Equal-width multi-row
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col">col</div>
                                    <div style={colStyle} className="col">col</div>
                                    <div className="w-100" />
                                    <div style={colStyle} className="col">col</div>
                                    <div style={colStyle} className="col">col</div>
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                    <div className="card mb">
                        <h4 className="m0 card-header">Responsive classes</h4>
                        <div className="card-body">
                            <p className="mv-lg text-bold" id="all-breakpoints">
                                All breakpoints
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col">col</div>
                                    <div style={colStyle} className="col">col</div>
                                    <div style={colStyle} className="col">col</div>
                                    <div style={colStyle} className="col">col</div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-8">col-8</div>
                                    <div style={colStyle} className="col-4">col-4</div>
                                </div>
                            </div>
                            <p />
                            <p
                                className="mv-lg text-bold"
                                id="stacked-to-horizontal"
                            >
                                Stacked to horizontal
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-sm-8">col-sm-8</div>
                                    <div style={colStyle} className="col-sm-4">col-sm-4</div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-sm">col-sm</div>
                                    <div style={colStyle} className="col-sm">col-sm</div>
                                    <div style={colStyle} className="col-sm">col-sm</div>
                                </div>
                            </div>
                            <p />
                            <p className="mv-lg text-bold" id="mix-and-match">
                                Mix and match
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col col-lg-8">
                                        .col .col-lg-8
                                    </div>
                                    <div style={colStyle} className="col-6 col-lg-4">
                                        .col-6 .col-lg-4
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-6 col-lg-4">
                                        .col-6 .col-lg-4
                                    </div>
                                    <div style={colStyle} className="col-6 col-lg-4">
                                        .col-6 .col-lg-4
                                    </div>
                                    <div style={colStyle} className="col-6 col-lg-4">
                                        .col-6 .col-lg-4
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-6">.col-6</div>
                                    <div style={colStyle} className="col-6">.col-6</div>
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                    <div className="card mb">
                        <h4 className="m0 card-header">Alignment</h4>
                        <div className="card-body">
                            <p
                                className="mv-lg text-bold"
                                id="vertical-alignment"
                            >
                                Vertical alignment
                            </p>
                            <div className="container">
                                <div className="row align-items-start">
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col">
                                        One of three columns
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col align-self-start">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col align-self-center">
                                        One of three columns
                                    </div>
                                    <div style={colStyle} className="col align-self-end">
                                        One of three columns
                                    </div>
                                </div>
                            </div>
                            <p />
                            <p
                                className="mv-lg text-bold"
                                id="horizontal-alignment"
                            >
                                Horizontal alignment
                            </p>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div className="row justify-content-around">
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                    <div style={colStyle} className="col-4">
                                        One of two columns
                                    </div>
                                </div>
                            </div>
                            <p />
                            <p className="mv-lg text-bold" id="no-gutters">
                                No gutters
                            </p>
                            <div className="container">
                                <div className="row no-gutters">
                                    <div style={colStyle} className="col-12 col-sm-6 col-lg-8">
                                        .col-12 .col-sm-6 .col-lg-8
                                    </div>
                                    <div style={colStyle} className="col-6 col-lg-4">
                                        .col-6 .col-lg-4
                                    </div>
                                </div>
                            </div>
                            <p />
                            <p className="mv-lg text-bold" id="column-wrapping">
                                Column wrapping
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-9">.col-9</div>
                                    <div style={colStyle} className="col-4">
                                        .col-4
                                        <br />
                                        Since 9 + 4 = 13 &gt; 12, this
                                        4-column-wide div gets wrapped onto a
                                        new line as one contiguous unit.
                                    </div>
                                    <div style={colStyle} className="col-6">
                                        .col-6
                                        <br />
                                        Subsequent columns continue along the
                                        new line.
                                    </div>
                                </div>
                            </div>
                            <p />
                            <p className="mv-lg text-bold" id="column-resets">
                                Column resets
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-6 col-sm-3">
                                        .col-6 .col-sm-3
                                    </div>
                                    <div style={colStyle} className="col-6 col-sm-3">
                                        .col-6 .col-sm-3
                                    </div>
                                    <div className="clearfix d-sm-none" />
                                    <div style={colStyle} className="col-6 col-sm-3">
                                        .col-6 .col-sm-3
                                    </div>
                                    <div style={colStyle} className="col-6 col-sm-3">
                                        .col-6 .col-sm-3
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-sm-5 col-lg-6">
                                        .col-sm-5 .col-lg-6
                                    </div>
                                    <div style={colStyle} className="col-sm-5 offset-sm-2 col-lg-6 offset-md-0">
                                        .col-sm-5 .offset-sm-2 .col-lg-6
                                        .offset-md-0
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-sm-6 col-lg-5 col-xl-6">
                                        .col.col-sm-6.col-lg-5.col-xl-6
                                    </div>
                                    <div style={colStyle} className="col-sm-6 col-lg-5 offset-md-2 col-xl-6 offset-lg-0">
                                        .col-sm-6 .col-lg-5 .offset-md-2
                                        .col-xl-6 .offset-lg-0
                                    </div>
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                    <div className="card mb">
                        <h4 className="m0 card-header">Reordering</h4>
                        <div className="card-body">
                            <p className="mv-lg text-bold" id="flex-order">
                                Flex order
                            </p>
                            <p
                                className="mv-lg text-bold"
                                id="offsetting-columns"
                            >
                                Offsetting columns
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-lg-4">.col-lg-4</div>
                                    <div style={colStyle} className="col-lg-4 offset-md-4">
                                        .col-lg-4 .offset-md-4
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-lg-3 offset-md-3">
                                        .col-lg-3 .offset-md-3
                                    </div>
                                    <div style={colStyle} className="col-lg-3 offset-md-3">
                                        .col-lg-3 .offset-md-3
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-lg-6 offset-md-3">
                                        .col-lg-6 .offset-md-3
                                    </div>
                                </div>
                            </div>
                            <p />
                            <p className="mv-lg text-bold" id="push-and-pull">
                                Push and pull
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-lg-9 push-md-3">
                                        .col-lg-9 .push-md-3
                                    </div>
                                    <div style={colStyle} className="col-lg-3 pull-md-9">
                                        .col-lg-3 .pull-md-9
                                    </div>
                                </div>
                            </div>
                            <p />
                        </div>
                    </div>
                    <div className="card mb">
                        <h4 className="m0 card-header">Nesting</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div style={colStyle} className="col-sm-9">
                                        Level 1: .col-sm-9
                                        <div className="row">
                                            <div style={colStyle} className="col-8 col-sm-6">
                                                Level 2: .col-8 .col-sm-6
                                            </div>
                                            <div style={colStyle} className="col-4 col-sm-6">
                                                Level 2: .col-4 .col-sm-6
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(BootstrapGrid);
