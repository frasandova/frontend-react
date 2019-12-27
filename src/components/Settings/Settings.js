import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, CustomInput } from 'reactstrap';
import pubsub from 'pubsub-js';
import { withNamespaces } from 'react-i18next';

import { Screenfull } from '../Utils/Utils';
import './Settings.scss';

class Settings extends Component {

    state = {
        showModal: false,
        selectedLang: 'en',
        selectedTheme: 'theme-1',
        selectedNavIconClass: 'menu-link-close',
        sidebarModes: {
            header: true,
            toolbar: true,
            offcanvas: false
        }
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.pubsub_token = pubsub.subscribe('showsettings', () => {
            this.open();
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
    }

    onShowModal = () => {
        // Add class for white backdrop
        document.body.classList.add('modal-backdrop-soft')
    }

    onHiddenModal = () => {
        // Remove class for white backdrop (if not will affect future modals)
        document.body.classList.remove('modal-backdrop-soft')
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    toggle = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    setSelectedLanguage = e => {
        const lng = e.target.value;
        this.props.i18n.changeLanguage(lng);
        this.setState({selectedLang: lng});
    }

    setTheme = e => {
        const theme = e.target.value;
        document.body.classList.remove(this.state.selectedTheme);
        this.setState({ selectedTheme: theme });
        document.body.classList.add(theme)
    }

    setNavIcon = e => {
        const iconClass = e.target.value;
        pubsub.publish('setNavIcon', iconClass);
        this.setState({ selectedNavIconClass: iconClass });
    }

    changeSidebarMode = mode => e => {
        this.setState({
            sidebarModes: {
                ...this.state.sidebarModes,
                [mode]: e.target.checked
            }
        })
        pubsub.publish('sidebarmode', mode);
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return (
            <Modal
                isOpen={this.state.showModal}
                modalClassName="modal-right fade modal-settings"
                onEnter={this.onShowModal}
                onClosed={this.onHiddenModal}
                toggle={this.toggle}
                >
                <ModalHeader tag="div" close={closeBtn}>
                    <h4 className="m-0"><span>Settings</span></h4>
                </ModalHeader>
                <ModalBody>
                    <div className="d-flex mb">
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-1">
                                    <input type="radio" onChange={this.setTheme} value="theme-1" checked={this.state.selectedTheme === 'theme-1'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-2">
                                    <input type="radio" onChange={this.setTheme} value="theme-2" checked={this.state.selectedTheme === 'theme-2'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-3">
                                    <input type="radio" onChange={this.setTheme} value="theme-3" checked={this.state.selectedTheme === 'theme-3'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb">
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-4">
                                    <input type="radio" onChange={this.setTheme} value="theme-4" checked={this.state.selectedTheme === 'theme-4'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-5">
                                    <input type="radio" onChange={this.setTheme} value="theme-5" checked={this.state.selectedTheme === 'theme-5'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-6">
                                    <input type="radio" onChange={this.setTheme} value="theme-6" checked={this.state.selectedTheme === 'theme-6'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb">
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-7">
                                    <input type="radio" onChange={this.setTheme} value="theme-7" checked={this.state.selectedTheme === 'theme-7'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-8">
                                    <input type="radio" onChange={this.setTheme} value="theme-8" checked={this.state.selectedTheme === 'theme-8'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="wd-tiny mb">
                            <div className="setting-color">
                                <label className="preview-theme-9">
                                    <input type="radio" onChange={this.setTheme} value="theme-9" checked={this.state.selectedTheme === 'theme-9'} name="setting-theme"/>
                                    <span className="ion-checkmark-round"></span>
                                    <div className="t-grid">
                                        <div className="t-row">
                                            <div className="t-col preview-header"></div>
                                            <div className="t-col preview-sidebar"></div>
                                            <div className="t-col preview-content"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <p>
                        <label className="mda-checkbox">
                            <input type="checkbox" onChange={this.changeSidebarMode('header')} checked={this.state.sidebarModes['header']} />
                            <em className="bg-indigo-500"></em>
                            Sidebar header
                        </label>
                    </p>
                    <p>
                        <label className="mda-checkbox">
                            <input type="checkbox" onChange={this.changeSidebarMode('toolbar')} checked={this.state.sidebarModes['toolbar']} />
                            <em className="bg-indigo-500"></em>
                            Sidebar toolbar
                        </label>
                    </p>
                    <p>
                        <label className="mda-checkbox">
                            <input type="checkbox" onChange={this.changeSidebarMode('offcanvas')} checked={this.state.sidebarModes['offcanvas']} />
                            <em className="bg-indigo-500"></em>
                            Sidebar offcanvas
                        </label>
                    </p>
                    <hr/>
                    <p>Navigation icon</p>
                    <p>
                        <label className="mda-radio">
                            <input onChange={this.setNavIcon} type="radio" name="headerMenulink" checked={this.state.selectedNavIconClass === 'menu-link-close'} value="menu-link-close"/>
                            <em className="bg-indigo-500"></em>
                            Close icon
                        </label>
                    </p>
                    <p>
                        <label className="mda-radio">
                            <input onChange={this.setNavIcon} type="radio" name="headerMenulink" checked={this.state.selectedNavIconClass === 'menu-link-slide'} value="menu-link-slide"/>
                            <em className="bg-indigo-500"></em>
                            Slide arrow
                        </label>
                    </p>
                    <p>
                        <label className="mda-radio">
                            <input onChange={this.setNavIcon} type="radio" name="headerMenulink" checked={this.state.selectedNavIconClass === 'menu-link-arrow'} value="menu-link-arrow"/>
                            <em className="bg-indigo-500"></em>
                            Big arrow
                        </label>
                    </p>
                    <hr/>
                    <Screenfull tag="button" className="btn btn-secondary btn-raised" type="button" data-toggle-fullscreen="">
                        Toggle fullscreen
                    </Screenfull>
                    <hr/>
                    <p>Change language</p>
                    <CustomInput type="select" id="select-lang" onChange={this.setSelectedLanguage} name="customSelect" value={this.state.selectedLang}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </CustomInput>
                </ModalBody>
            </Modal>
        );
    }
}

export default withNamespaces('translations')(Settings);
