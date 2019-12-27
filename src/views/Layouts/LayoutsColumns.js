import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class LayoutsColumns extends Component {

    componentWillMount() {
        this.props.setHeaderTitle('Layout Columns');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-full">
                    <div className="row fh bg-white">
                        <div className="col-lg-3 fh-md oa text-center">
                            <div className="p-lg">
                                <h5>Left Column</h5>
                                <p className="text-center">
                                    Nullam pretium fermentum sapien ut
                                    convallis.
                                </p>
                            </div>
                            <div className="p-lg">
                                <p>
                                    Pellentesque sed purus libero. Nam eleifend,
                                    ipsum at suscipit pellentesque, diam enim
                                    dignissim nunc, eu egestas sem velit vel
                                    nunc. Phasellus vel nisl orci.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 fh-md oa text-center bg-gray-lighter">
                            <h2>Content</h2>
                            <p className="lead">Content with auto scrolling</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="lead">Bottom</p>
                        </div>
                        <div className="col-lg-3 fh-md oa text-center">
                            <div className="p-lg">
                                <h5>Right Column</h5>
                                <p className="text-center">
                                    Nullam pretium fermentum sapien ut
                                    convallis.
                                </p>
                            </div>
                            <div className="p-lg">
                                <p>
                                    Pellentesque sed purus libero. Nam eleifend,
                                    ipsum at suscipit pellentesque, diam enim
                                    dignissim nunc, eu egestas sem velit vel
                                    nunc. Phasellus vel nisl orci.
                                </p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="lead">Bottom</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(LayoutsColumns);
