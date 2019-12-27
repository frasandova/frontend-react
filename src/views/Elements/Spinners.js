import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import "loaders.css/loaders.css";

class Spinners extends Component {
    // No jQuery version of https://github.com/ConnorAtherton/loaders.css/blob/master/loaders.css.js
    state = {
        spinnerDivs: {
            "ball-pulse": 3,
            "ball-grid-pulse": 9,
            "ball-clip-rotate": 1,
            "ball-clip-rotate-pulse": 2,
            "square-spin": 1,
            "ball-clip-rotate-multiple": 2,
            "ball-pulse-rise": 5,
            "ball-rotate": 1,
            "cube-transition": 2,
            "ball-zig-zag": 2,
            "ball-zig-zag-deflect": 2,
            "ball-triangle-path": 3,
            "ball-scale": 1,
            "line-scale": 5,
            "line-scale-party": 4,
            "ball-scale-multiple": 3,
            "ball-pulse-sync": 3,
            "ball-beat": 3,
            "line-scale-pulse-out": 5,
            "line-scale-pulse-out-rapid": 5,
            "ball-scale-ripple": 1,
            "ball-scale-ripple-multiple": 3,
            "ball-spin-fade-loader": 8,
            "line-spin-fade-loader": 8,
            "triangle-skew-spin": 1,
            pacman: 5,
            "ball-grid-beat": 9,
            "semi-circle-spin": 1
        }
    };

    componentWillMount() {
        this.props.setHeaderTitle('Spinners');
    }

    addDivs(n) {
        var arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(<div key={n + i} />);
        }
        return arr;
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <h5 className="mt0">Loaders.css</h5>
                    <p className="mb-lg">
                        Delightful and performance-focused pure css loading
                        animations.
                    </p>
                    <div className="row loader-primary">
                        {Object.keys(this.state.spinnerDivs).map(k => (
                            <div
                                className="col-xl-3 col-lg-4 col-md-12"
                                key={k}
                            >
                                <div className="cardbox">
                                    <div className="cardbox-heading">{k}</div>
                                    <div className="loader-demo">
                                        <div className={"loader-inner " + k}>
                                            {this.addDivs(
                                                this.state.spinnerDivs[k]
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Spinners);
