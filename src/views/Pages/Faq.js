import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Faq extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('FAQs');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-fluid">
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <div className="text-center pb-lg">
                                <h3 className="text-bold">
                                    Frequently Asked Questions
                                </h3>
                                <p className="text-muted">
                                    Proin non lacinia sapien. Vivamus lorem
                                    justo, sollicitudin ac sollicitudin ut,
                                    aliquet sed tellus.
                                    <br />
                                    Sed venenatis ullamcorper mauris et
                                    malesuada. Nunc vel ipsum vitae erat
                                    pharetra rhoncus eu eu tellus.
                                </p>
                                <br />
                                <p>Have more questions?</p>
                                <button className="btn btn-info" type="button">
                                    Contact with Us
                                </button>
                            </div>
                            <div className="row mt-lg">
                                <div className="col-lg-6">
                                    <div
                                        className="card-accordion"
                                        id="accordion1"
                                    >
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#acc1collapse1"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        What Assets Can I Use In
                                                        My Items?
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse show"
                                                id="acc1collapse1"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#acc1collapse2"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        Where is the Market
                                                        Terms?
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse"
                                                id="acc1collapse2"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#acc1collapse3"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        Morbi pretium varius
                                                        aliquam?
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse"
                                                id="acc1collapse3"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className="card-accordion"
                                        id="accordion2"
                                    >
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion2"
                                                    href="#acc2collapse1"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        How to Contact an Author
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse"
                                                id="acc2collapse1"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion2"
                                                    href="#acc2collapse2"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        What is Item Support?
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse show"
                                                id="acc2collapse2"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-default b0 mb-sm">
                                            <h4 className="m0 card-header">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion2"
                                                    href="#acc2collapse3"
                                                >
                                                    <small>
                                                        <em className="ion-arrow-right-c text-muted mr icon-lg" />
                                                    </small>
                                                    <span>
                                                        Where Is My Purchase
                                                        Code?
                                                    </span>
                                                </a>
                                            </h4>
                                            <div
                                                className="collapse"
                                                id="acc2collapse3"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Donec congue sagittis mi
                                                        sit amet tincidunt.
                                                        Quisque sollicitudin
                                                        massa vel erat tincidunt
                                                        blandit. Curabitur quis
                                                        leo nulla. Phasellus
                                                        faucibus placerat
                                                        luctus. Integer
                                                        fermentum molestie massa
                                                        at congue. Quisque quis
                                                        quam dictum diam
                                                        volutpat adipiscing.
                                                    </p>
                                                    <p>
                                                        Proin ut urna enim. Nam
                                                        non enim vitae mi semper
                                                        egestas. Pellentesque
                                                        convallis mauris eu elit
                                                        imperdiet quis eleifend
                                                        quam aliquet.
                                                    </p>
                                                    <div className="text-right">
                                                        <small className="text-muted mr">
                                                            Was this article
                                                            helpful?
                                                        </small>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-up text-muted" />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary btn-xs"
                                                            type="button"
                                                        >
                                                            <em className="ion-chevron-down text-muted" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default withHeaderTitle(Faq);
