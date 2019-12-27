// FULLSCREEN
// -----------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';

/**
 * Wrapper for screenfull plugin
 * Wraps child element and toggles
 * fullscreen mode on click
 */
export default class Screenfull extends Component {

    static propTypes = {
        /** tag to use, defaults to A */
        tag: PropTypes.string
    }

    static defaultProps = {
        tag: 'a'
    }

    componentDidMount() {
        // Not supported under IE
        const ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv:11\./)) {
            this.element.classList.add('d-none');
            return; // and abort
        }

        this.element.addEventListener('click', this.handleClick)
    }

    handleClick = e => {
        e.preventDefault();

        if (screenfull.enabled) {

            screenfull.toggle();

        } else {
            console.log('Fullscreen not enabled');
        }
    }

    componentWillUnmount() {
        this.element.removeEventListener('click', this.handleClick)
    }

    setRef = node => {
        this.element = node;
    }

    render() {
        const {tag:Tag} = this.props;
        return (
            <Tag ref={this.setRef} {...this.props} />
        )
    }

}
