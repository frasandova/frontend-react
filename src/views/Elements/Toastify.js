import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import { Row, Col, Input, Label, FormGroup, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Toastify extends Component {
    state = {
        toasterPos: "top-right",
        toasterType: "info"
    };

    componentWillMount() {
        this.props.setHeaderTitle('Toastify');
    }

    notify = () =>
        toast("Wow so easy !", {
            type: this.state.toasterType,
            position: this.state.toasterPos
        });

    onToastPosChanged = e => {
        this.setState({
            toasterPos: e.currentTarget.value
        });
    };
    onToastTypeChanged = e => {
        this.setState({
            toasterType: e.currentTarget.value
        });
    };

    render() {
        const TOAST_POSITIONS = [
            "top-left",
            "top-right",
            "top-center",
            "bottom-left",
            "bottom-right",
            "bottom-center"
        ];
        const TOAST_TYPES = ["info", "success", "warning", "error", "default"];

        return (
            <section className="section-container">
                <div className="container-md">
                    <div className="cardbox">
                        <div className="cardbox-heading"><div className="cardbox-title">React Toastify</div></div>
                        <div className="cardbox-body">
                            <Row>
                                <Col>
                                    <Row>
                                        <Col md="6">
                                            <p>
                                                <strong>Position</strong>
                                            </p>
                                            {TOAST_POSITIONS.map((pos, i) => (
                                                <FormGroup check key={i}>
                                                    <Label check>
                                                        <Input
                                                            type="radio"
                                                            name="tPosition"
                                                            value={pos}
                                                            checked={
                                                                this.state
                                                                    .toasterPos ===
                                                                pos
                                                            }
                                                            onChange={
                                                                this
                                                                    .onToastPosChanged
                                                            }
                                                        />{" "}
                                                        {pos}
                                                    </Label>
                                                </FormGroup>
                                            ))}
                                        </Col>
                                        <Col md="6">
                                            <p className="mt-3 mt-sm-0">
                                                <strong>Type</strong>
                                            </p>
                                            {TOAST_TYPES.map((type, i) => (
                                                <FormGroup check key={i}>
                                                    <Label check>
                                                        <Input
                                                            type="radio"
                                                            name="tType"
                                                            value={type}
                                                            checked={
                                                                this.state
                                                                    .toasterType ===
                                                                type
                                                            }
                                                            onChange={
                                                                this
                                                                    .onToastTypeChanged
                                                            }
                                                        />{" "}
                                                        {type}
                                                    </Label>
                                                </FormGroup>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Button
                                        color="primary"
                                        className="mt-3 mt-sm-0"
                                        onClick={this.notify}
                                    >
                                        Notify !
                                    </Button>
                                    <ToastContainer />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Toastify);
