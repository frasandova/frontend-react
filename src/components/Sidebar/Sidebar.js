import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import pubsub from "pubsub-js";
import { withNamespaces, Trans } from "react-i18next";

import "./Sidebar.scss";

import SidebarRun from "./Sidebar.run";
import { SVGReplace } from "../Utils/Utils";

import Menu from "../../Menu.js";

//
// Stateless reusable components
// for Sidebar contructions
//

const SingleItemLabel = ({ label }) => (
    <span className="float-right nav-label">
        <span className={"badge " + label.className}>{label.value}</span>
    </span>
);

const SingleItemIcon = ({ src }) => (
    <span className="nav-icon">
        <SVGReplace src={src} className="invisible" />
    </span>
);

const SingleItem = ({ item }) => (
    <Link to={item.path} className="ripple">
        {item.label && <SingleItemLabel label={item.label} />}
        {item.icon && <SingleItemIcon src={item.icon} />}
        <span>{item.name}</span>
    </Link>
);

const SubMenuItem = ({ item, routeActive }) => [
    <a href={`#${item.name}`} className="ripple" key="0">
        <span className="float-right nav-caret">
            <em className="ion-ios-arrow-right" />
        </span>
        {item.label && <SingleItemLabel label={item.label} />}
        {item.icon && <SingleItemIcon src={item.icon} />}
        <span>{item.name}</span>
    </a>,
    <ul className="sidebar-subnav" key="1">
        {item.submenu.map((sitem, si) => (
            <li className={routeActive(sitem.path)} key={si}>
                <SingleItem item={sitem} />
            </li>
        ))}
    </ul>
];

class Sidebar extends Component {
    state = {
        sidebarModes: {
            header: true,
            toolbar: true,
            offcanvas: false
        }
    };

    componentWillMount() {
        this.pubsub_token = pubsub.subscribe("sidebarmode", (msg, mode) => {
            this.setState({
                sidebarModes: {
                    ...this.state.sidebarModes,
                    [mode]: !this.state.sidebarModes[mode]
                }
            });
            if (mode === "offcanvas") {
                document.body.classList[
                    this.state.sidebarModes["offcanvas"] ? "add" : "remove"
                ]("sidebar-offcanvas");
            }
        });
        // Listen for routes changes in order to hide the sidebar on mobile
        this.props.history.listen(() => {
            document
                .querySelector(".layout-container")
                .classList.remove("sidebar-visible");
        });
    }

    componentDidMount() {
        SidebarRun();
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive = paths => {
        paths = Array.isArray(paths) ? paths : [paths];
        return paths.some(p => this.props.location.pathname.indexOf(p) > -1)
            ? "active"
            : "";
    };

    render() {
        const hasSubmenu = item => item.submenu && item.submenu.length;

        return (
            <aside className="sidebar-container">
                {this.state.sidebarModes.header && (
                    <div className="sidebar-header">
                        <div className="float-right pt-lg text-muted invisible">
                            <em className="ion-close-round" />
                        </div>
                        <div className="sidebar-header-logo">
                            <SVGReplace src="img/logo-cadem.svg" alt="Logo" />
                        </div>
                    </div>
                )}
                <div className="sidebar-content">
                    <nav className="sidebar-nav mt">
                        <ul>
                            {/* Iterates over all sidebar menu items */}
                            {Menu.map((item, i) => {
                                const routes = hasSubmenu(item)
                                    ? item.submenu.map(i => i.path)
                                    : [item.path];
                                return (
                                    <li
                                        className={this.routeActive(routes)}
                                        key={i}
                                    >
                                        {hasSubmenu(item) ? (
                                            <SubMenuItem
                                                item={item}
                                                routeActive={this.routeActive}
                                            />
                                        ) : (
                                            <SingleItem item={item} />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

Sidebar.contextTypes = {
    router: PropTypes.object
};

Sidebar.propTypes = {
    location: PropTypes.object.isRequired
};

export default withNamespaces("translations")(withRouter(Sidebar));
