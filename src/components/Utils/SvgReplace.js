// FULLSCREEN
// -----------------------------------
import React, { Component } from "react";
import PropTypes from "prop-types";

import axios from "axios";

export default class SVGReplace extends Component {
    static propTypes = {
        /* src of the svg file*/
        src: PropTypes.string
    };

    componentWillMount() {
        if (!this.props.src || this.props.src.indexOf(".svg") < 0)
            throw new Error("only support for SVG images");

        axios
            .get(this.props.src)
            .then(
                res =>
                    (this.element.outerHTML = res.data.replace("xmlns:a", ""))
            );
    }

    setRef = node => {
        this.element = node;
    };

    render() {
        return <div ref={this.setRef} />;
    }
}
