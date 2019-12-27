import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import "./Timeline.scss";

class Timeline extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Timeline');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-md">
                    <ul className="timeline">
                        <li
                            className="timeline-separator"
                            data-datetime="Now"
                        />
                        <li>
                            <div className="timeline-badge bg-info" />
                            <div className="timeline-panel">
                                <div className="cardbox">
                                    <div className="cardbox-body">
                                        <p>
                                            <strong>Client Meeting</strong>
                                        </p>
                                        <small>
                                            Pellentesque ut diam velit, eget
                                            porttitor risus. Nullam posuere
                                            euismod volutpat.
                                        </small>
                                        <div className="text-right">
                                            <a href="#">Av 123 St - Floor 2</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bg-pink-400" />
                            <div className="timeline-panel">
                                <div className="cardbox">
                                    <div className="cardbox-body">
                                        <em className="mr ion-ios-telephone icon-lg" />
                                        Call with Michael
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="timeline-separator"
                            data-datetime="Yesterday"
                        />
                        <li>
                            <div className="timeline-badge bg-purple-500" />
                            <div className="timeline-panel">
                                <div className="cardbox">
                                    <div className="cardbox-body">
                                        <p>
                                            <strong>Conference</strong>
                                        </p>
                                        <p>Join development group</p>
                                        <small>
                                            <a href="skype:echo123?call">
                                                <em className="ion-ios-telephone mr-sm icon-lg" />{" "}
                                                Call the Skype Echo
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge bg-green-500" />
                            <div className="timeline-panel">
                                <div className="cardbox right">
                                    <div className="cardbox-body">
                                        <p>
                                            <strong>Appointment</strong>
                                        </p>
                                        <p>
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem lacinia
                                            quam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-badge bg-info" />
                            <div className="timeline-panel">
                                <div className="cardbox bg-blue-500">
                                    <div className="cardbox-body">
                                        <p>
                                            <strong>Fly</strong>
                                        </p>
                                        <p>
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem lacinia quam
                                            venenatis vestibulum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="timeline-separator"
                            data-datetime="2 days ago"
                        />
                        <li className="timeline-inverted">
                            <div className="timeline-badge bg-warning" />
                            <div className="timeline-panel">
                                <div className="cardbox">
                                    <div className="cardbox-body">
                                        <p>
                                            <strong>Relax</strong>
                                        </p>
                                        <p>Listen some music</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-end">
                            <div className="timeline-badge bg-blue-grey-200" />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Timeline);
