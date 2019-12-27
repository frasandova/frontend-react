import React, { Component } from "react";
import { Modal, ModalBody } from 'reactstrap';
import pubsub from 'pubsub-js';
import { withNamespaces } from 'react-i18next';

class HeaderSearch extends Component {

    state = {
        showModal: false
    }

    componentWillMount() {
        this.pubsub_token = pubsub.subscribe('showsearch', () => {
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

    onShownModal = () => {
        // Auto focus the search input
        const input = document.querySelector('.header-input-search')
        if(input) input.focus();
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

    onSubmit(e) {
        e.preventDefault();
        console.log('Search form submitted: [' + this.refs.searchTerm.value + ']');
    }

    render() {
        return (
            <Modal
                    isOpen={this.state.showModal}
                    modalClassName="modal-top fade modal-search"
                    onEnter={this.onShowModal}
                    onExit={this.close}
                    onClosed={this.onHiddenModal}
                    onOpened={this.onShownModal}
                    toggle={this.toggle}
                    >
                <ModalBody>
                    <div className="float-left">
                        <button type="button" data-dismiss="modal" className="btn btn-flat" onClick={this.close}>
                            <em className="ion-arrow-left-c icon-24"></em>
                        </button>
                    </div>
                    <div className="float-right">
                        <button type="button" className="btn btn-flat"><em className="ion-android-microphone icon-24"></em></button>
                    </div>
                    <form onSubmit={this.onSubmit.bind(this)} action="#" className="oh">
                        <div className="mda-form-control pt0">
                            <input type="text" ref="searchTerm" placeholder={this.props.i18n.t('header.SEARCH')} className="form-control header-input-search" />
                            <div className="mda-form-control-line"></div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        );
    }
}

export default withNamespaces('translations')(HeaderSearch);
