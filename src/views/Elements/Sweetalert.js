import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import { Container } from "reactstrap";

import Swal from "./Swal";

class Sweetalert extends Component {
    state = {
        swalOption1: {
            title: "Here's a message!"
        },
        swalOption2: {
            title: "Here's a message!",
            text: "It's pretty, isn't it?"
        },
        swalOption3: {
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        },
        swalOption4: {
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: {
                    text: "Yes, delete it!",
                    value: true,
                    visible: true,
                    className: "bg-danger",
                    closeModal: true
                }
            }
        },
        swalOption5: {
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: {
                cancel: {
                    text: "No, cancel plx!",
                    value: null,
                    visible: true,
                    className: "",
                    closeModal: false
                },
                confirm: {
                    text: "Yes, delete it!",
                    value: true,
                    visible: true,
                    className: "bg-danger",
                    closeModal: false
                }
            }
        }
    };

    swalCallback4(isConfirm, swal) {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    }

    swalCallback5(isConfirm, swal) {
        if (isConfirm) {
            swal(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
            );
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    }

    componentWillMount() {
        this.props.setHeaderTitle('Sweet Alert');
    }

    render() {
        return (
            <section className="section-container">
                <Container className="container-md">
                    <h4 className="page-header mt-0">Usage examples</h4>
                    <p>A Beautiful Replacement For Javascript's "alert"</p>
                    <div className="cardbox mb-2">
                        <div className="cardbox-body">
                            <p>A basic message</p>
                            <Swal
                                options={this.state.swalOption1}
                                className="btn btn-primary"
                            >
                                Try me!
                            </Swal>
                        </div>
                    </div>
                    <div className="cardbox mb-2">
                        <div className="cardbox-body">
                            <p>A title with a text under</p>
                            <Swal
                                options={this.state.swalOption2}
                                className="btn btn-primary"
                            >
                                Try me!
                            </Swal>
                        </div>
                    </div>
                    <div className="cardbox mb-2">
                        <div className="cardbox-body">
                            <p>A success message!</p>
                            <Swal
                                options={this.state.swalOption3}
                                className="btn btn-primary"
                            >
                                Try me!
                            </Swal>
                        </div>
                    </div>
                    <div className="cardbox mb-2">
                        <div className="cardbox-body">
                            <p>
                                A warning message, with a function
                                attached to the
                                &quot;Confirm&quot;-button
                            </p>
                            <Swal
                                options={this.state.swalOption4}
                                callback={this.swalCallback4}
                                className="btn btn-primary"
                            >
                                Try me!
                            </Swal>
                        </div>
                    </div>
                    <div className="cardbox mb-2">
                        <div className="cardbox-body">
                            <p>
                                ... and by passing a parameter, you can
                                execute something else for
                                &quot;Cancel&quot;.
                            </p>
                            <Swal
                                options={this.state.swalOption5}
                                callback={this.swalCallback5}
                                className="btn btn-primary"
                            >
                                Try me!
                            </Swal>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default withHeaderTitle(Sweetalert);
