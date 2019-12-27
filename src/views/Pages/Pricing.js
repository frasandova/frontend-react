import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Pricing extends Component {

    componentWillMount() {
        this.props.setHeaderTitle('Pricing');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-md">
                    <div className="text-center mb-lg pb-lg"><h3 className="text-bold">Start your own app today</h3>
                        <p>Demonstration plans in different options to fit your project</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bb bg-pink-300 text-white">
                                    <div className="text-bold">STARTER</div><h3 className="mv-lg"><sup>$</sup><span className="text-lg">17</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Not ready for resale</span></p>
                                </div>
                                <div className="cardbox-body text-center bt"><a className="btn btn-secondary btn-flat" href="#">SELECT THIS PLAN</a></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bg-info">
                                    <div className="text-bold">IDEAL</div><h3 className="mv-lg"><sup>$</sup><span className="text-lg">49</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Not ready for resale</span></p>
                                </div>
                                <div className="cardbox-body text-center bt"><a className="btn btn-info btn-raised" href="#">BEST OPTION</a></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bb bg-deep-purple-500">
                                    <div className="text-bold">PREMIUM</div><h3 className="mv-lg"><sup>$</sup><span className="text-lg">95</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Ready for resale*</span></p>
                                </div>
                                <div className="cardbox-body text-center bt"><a className="btn btn-secondary btn-flat" href="#">SELECT THIS PLAN</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-lg pb-lg"><h3 className="text-bold">Alternative setup</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bb text-danger"><em className="ion-star icon-2x"></em><h3 className="mv-lg text-bold"><sup>$</sup><span className="text-lg">17</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Not ready for resale</span></p>
                                </div>
                                <div className="cardbox-body text-center bt text-info"><a className="btn btn-danger btn-flat" href="#">SELECT THIS PLAN</a></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bb text-success"><em className="ion-help-buoy icon-2x"></em><h3 className="mv-lg text-bold"><sup>$</sup><span className="text-lg">49</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Not ready for resale</span></p>
                                </div>
                                <div className="cardbox-body text-center bt"><a className="btn btn-success btn-raised" href="#">BEST OPTION</a></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cardbox b">
                                <div className="cardbox-body text-center bb text-warning"><em className="ion-wand icon-2x"></em><h3 className="mv-lg text-bold"><sup>$</sup><span className="text-lg">95</span><span>/mo</span></h3>
                                </div>
                                <div className="cardbox-body text-center">
                                    <p className="mb-lg"><span>Unlimited Styles</span></p>
                                    <p className="mb-lg"><span>RTL &amp; Translation</span></p>
                                    <p className="mb-lg"><span>Customer support</span></p>
                                    <p className="mb-lg"><span>Free Updates</span></p>
                                    <p className="mb-lg"><span>Limited to one client</span></p>
                                    <p className="mb-lg"><span>Multiple installation</span></p>
                                    <p className="mb-lg"><span>Ready for resale*</span></p>
                                </div>
                                <div className="cardbox-body text-center bt"><a className="btn btn-warning btn-flat" href="#">SELECT THIS PLAN</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Pricing);
