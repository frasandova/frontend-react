import React, { Component } from "react";
import pubsub from 'pubsub-js';
import { LinkContainer } from 'react-router-bootstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Header.scss';
import './HeaderMenuLinks.scss';

class Header extends Component {

    state = {
        pageTitle: '',
        navIcon: 'menu-link-slide',
        dropdownOpen: false
    }

    componentWillMount() {
        this.pubsub_token = pubsub.subscribe('setPageTitle', (ev, title) => {
            this.setState({pageTitle: title});
        });
        this.pubsub_token_icon = pubsub.subscribe('setNavIcon', (ev, icon) => {
            this.setState({navIcon: icon});
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
        pubsub.unsubscribe(this.pubsub_token_icon);
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <header className="header-container">
                <nav>
                    <ul className="d-lg-none">
                        <li>
                            <a id="sidebar-toggler" href="#dummylink1" className={"menu-link "+this.state.navIcon}>
                                <span><em></em></span>
                            </a>
                        </li>
                    </ul>
                    <ul className="d-none d-lg-block">
                        <li>
                            <a id="offcanvas-toggler" href="#dummylink2" className={"menu-link "+this.state.navIcon}>
                                <span><em></em></span>
                            </a>
                        </li>
                    </ul>
                    <h2 className="header-title">{this.state.pageTitle}</h2>

                    <ul className="float-right">
                        <Dropdown id="basic-nav-dropdown" tag="li" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav className="has-badge ripple">
                              <em className="ion-person"></em>
                            </DropdownToggle>
                            <DropdownMenu right className="md-dropdown-menu" >
                                <LinkContainer to='login'>
                                    <DropdownItem>
                                        <em className="ion-log-out icon-fw"></em>
                                        Salir
                                    </DropdownItem >
                                </LinkContainer>
                            </DropdownMenu>
                        </Dropdown>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default Header;
