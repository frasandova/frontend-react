import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class LayoutsContainers extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Containers');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid text-center">
                    <h4>Fluid container</h4>
                    <p>
                        <code>.container-fluid</code>
                    </p>
                    <div className="container container-lg b">
                        <h4 className="text-center">Large container</h4>
                        <p>
                            <code>.container.container-lg</code>
                        </p>
                        <div className="container container-md b">
                            <h4 className="text-center">Medium container</h4>
                            <p>
                                <code>.container.container-md</code>
                            </p>
                            <div className="container container-sm b">
                                <h4 className="text-center">Small container</h4>
                                <p>
                                    <code>.container.container-sm</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(LayoutsContainers);
