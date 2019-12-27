import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Whiteframes extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Whiteframes');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-md">
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            <div className="cardbox-title">Whiteframes</div>
                        </div>
                        <div className="cardbox-body">
                            <div className="cardbox shadow-z1">
                                <div className="cardbox-body">
                                    <p className="mv-lg text-center">
                                        .shadow-z1
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox shadow-z2">
                                <div className="cardbox-body">
                                    <p className="mv-lg text-center">
                                        .shadow-z2
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox shadow-z3">
                                <div className="cardbox-body">
                                    <p className="mv-lg text-center">
                                        .shadow-z3
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox shadow-z4">
                                <div className="cardbox-body">
                                    <p className="mv-lg text-center">
                                        .shadow-z4
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox shadow-z5">
                                <div className="cardbox-body">
                                    <p className="mv-lg text-center">
                                        .shadow-z5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Whiteframes);
