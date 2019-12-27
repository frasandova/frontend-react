import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Blog extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Blog');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid bg-full" style={{backgroundImage: "url('img/pic1.jpg')"}}>
                    <div className="container container-md">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cardbox b0">
                                    <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic5.jpg')"}} />
                                    <div className="cardbox-offset p0">
                                        <div className="cardbox-offset-item text-right">
                                            <button
                                                className="btn-raised btn btn-secondary btn-circle btn-lg"
                                                type="button"
                                            >
                                                25
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cardbox-body pt0">
                                        <h5>Nam blandit fringilla faucibus.</h5>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <span className="mr-sm text-muted">
                                                    by
                                                </span>
                                                <a href="/somelink">John</a>
                                            </div>
                                            <div className="float-right">
                                                <span className="text-muted">
                                                    2 days ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cardbox b0">
                                    <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic2.jpg')"}} />
                                    <div className="cardbox-offset p0">
                                        <div className="cardbox-offset-item text-right">
                                            <button
                                                className="btn-raised btn btn-secondary btn-circle btn-lg"
                                                type="button"
                                            >
                                                25
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cardbox-body pt0">
                                        <h5>Maecenas at porta.</h5>
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <span className="mr-sm text-muted">
                                                    by
                                                </span>
                                                <a href="/somelink">John</a>
                                            </div>
                                            <div className="float-right">
                                                <span className="text-muted">
                                                    2 days ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox b0">
                            <div className="cardbox-item">
                                <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic4.jpg')"}} />
                            </div>
                            <div className="cardbox-offset p0">
                                <div className="cardbox-offset-item text-right">
                                    <button
                                        className="btn-raised btn btn-secondary btn-circle btn-lg"
                                        type="button"
                                    >
                                        52
                                    </button>
                                </div>
                            </div>
                            <div className="cardbox-body pt0">
                                <h5>Vestibulum at nisl sit amet</h5>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="mr-sm text-muted">
                                            by
                                        </span>
                                        <a href="/somelink">John</a>
                                    </div>
                                    <div className="float-right">
                                        <span className="text-muted">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox b0">
                            <div className="cardbox-item">
                                <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic6.jpg')"}} />
                            </div>
                            <div className="cardbox-offset p0">
                                <div className="cardbox-offset-item text-right">
                                    <button
                                        className="btn-raised btn btn-secondary btn-circle btn-lg"
                                        type="button"
                                    >
                                        1
                                    </button>
                                </div>
                            </div>
                            <div className="cardbox-body pt0">
                                <h5>Nam blandit fringilla faucibus.</h5>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="mr-sm text-muted">
                                            by
                                        </span>
                                        <a href="/somelink">John</a>
                                    </div>
                                    <div className="float-right">
                                        <span className="text-muted">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox b0">
                            <div className="cardbox-item">
                                <div className="cardbox-item cardbox-media bg-gray-darker">
                                    <div className="cardbox-media-quote">
                                        <a
                                            className="text-inherit"
                                            href="/somelink"
                                        >
                                            Phasellus ac turpis sit amet metus
                                            suscipit scelerisque quis ac velit.
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="cardbox-body bb pb0">
                                <p className="text-bold">
                                    Duis a neque odio, at varius elit.
                                    Pellentesque augue velit, dapibus vitae
                                    ultricies a, facilisis eu enim Nam in mauris
                                    mauris, a accumsan arcu. Integer ut
                                    convallis dui...
                                </p>
                            </div>
                            <div className="cardbox-body pt0">
                                <h5>Morbi quis purus velit.</h5>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="mr-sm text-muted">
                                            by
                                        </span>
                                        <a href="/somelink">John</a>
                                    </div>
                                    <div className="float-right">
                                        <span className="text-muted">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox b0">
                            <div className="cardbox-item">
                                <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic3.jpg')"}} />
                            </div>
                            <div className="cardbox-offset p0">
                                <div className="cardbox-offset-item text-right">
                                    <button
                                        className="btn-raised btn btn-secondary btn-circle btn-lg"
                                        type="button"
                                    >
                                        3
                                    </button>
                                </div>
                            </div>
                            <div className="cardbox-body pt0">
                                <h5>Cum sociis natoque penatibus</h5>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <span className="mr-sm text-muted">
                                            by
                                        </span>
                                        <a href="/somelink">John</a>
                                    </div>
                                    <div className="float-right">
                                        <span className="text-muted">
                                            2 days ago
                                        </span>
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

export default withHeaderTitle(Blog);
