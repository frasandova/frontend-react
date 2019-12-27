import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class LayoutsBoxed extends Component {

    componentWillMount() {
        this.props.setHeaderTitle('Layout Boxed');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-md">
                    <div className="cardbox">
                        <div className="cardbox-body"><h2 className="text-center">Big card with cards</h2>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body"><h2 className="text-center">Big card with cards</h2>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <div className="float-right"><button className="btn btn-secondary btn-flat btn-flat-icon" type="button"><em className="ion-android-more-vertical"></em></button></div>
                                            <div className="cardbox-title">Morbi a odio</div>
                                        </div>
                                        <div className="cardbox-body">Fusce pellentesque congue justo in rutrum. Ut facilisis orci lorem. Cras eget orci sit amet eros interdum malesuada. </div>
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

export default withHeaderTitle(LayoutsBoxed);
