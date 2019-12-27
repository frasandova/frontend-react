import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import {
    Button,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap";

class Buttons extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Buttons');
    }

    render() {
        const BUTTONS = [
            "Secondary",
            "Primary",
            "Success",
            "Info",
            "Warning",
            "Danger",
            "Inverse"
        ];

        return (
            <section className="section-container">
                <div className="container container-lg">
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button colors</h5>
                            {BUTTONS.map((c, i) => (
                                <Button
                                    type="button"
                                    color={c.toLowerCase()}
                                    className="mb-2 mr-2 ripple"
                                    key={i}
                                >
                                    {c}
                                </Button>
                            ))}
                            <br />
                            <br />
                            <a
                                className="mb-2 mr-2 btn btn-link ripple"
                                href="#"
                            >
                                Button Link
                            </a>
                            <button
                                className="mb-2 mr-2 ripple btn btn-secondary mr"
                                type="button"
                            >
                                <strong>button tag</strong>
                            </button>
                            <a
                                className="mb-2 mr-2 btn btn-secondary ripple"
                                href="#"
                            >
                                <strong>anchor tag</strong>
                            </a>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Flat</h5>
                            <p>
                                {BUTTONS.map((c, i) => (
                                    <Button
                                        type="button"
                                        color={c.toLowerCase()}
                                        className="mb-2 mr-2 ripple btn-flat"
                                        key={i}
                                    >
                                        {c}
                                    </Button>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Raised</h5>
                            <p>
                                {BUTTONS.map((c, i) => (
                                    <Button
                                        type="button"
                                        color={c.toLowerCase()}
                                        className="mb-2 mr-2 ripple btn-raised"
                                        key={i}
                                    >
                                        {c}
                                    </Button>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Circle</h5>
                            <p>
                                {BUTTONS.map((c, i) => (
                                    <Button
                                        type="button"
                                        color={c.toLowerCase()}
                                        className="mb-2 mr-2 ripple btn-circle"
                                        key={i}
                                    >
                                        {c.charAt(0)}
                                    </Button>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Labeled</h5>
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-success ripple"
                                type="button"
                            >
                                <span className="btn-label">
                                    <i className="ion-checkmark-round" />
                                </span>
                                Success
                            </button>
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-danger ripple"
                                type="button"
                            >
                                <span className="btn-label">
                                    <i className="ion-close-round" />
                                </span>
                                Danger
                            </button>
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-info ripple"
                                type="button"
                            >
                                <span className="btn-label">
                                    <i className="ion-alert" />
                                </span>
                                Info
                            </button>
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-warning ripple"
                                type="button"
                            >
                                <span className="btn-label">
                                    <i className="ion-nuclear" />
                                </span>
                                Warning
                            </button>
                            <br />
                            <br />
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-secondary ripple"
                                type="button"
                            >
                                <span className="btn-label">
                                    <i className="ion-arrow-left-c" />
                                </span>
                                Left
                            </button>
                            <button
                                className="mb-2 mr-2 btn btn-labeled btn-secondary ripple"
                                type="button"
                            >
                                Right
                                <span className="btn-label btn-label-right">
                                    <i className="ion-arrow-right-c" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button sizing</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        <button
                                            className="mb-2 mr-2 btn btn-primary btn-xl ripple"
                                            type="button"
                                        >
                                            X-Large button
                                        </button>
                                        <button
                                            className="mb-2 mr-2 btn btn-secondary btn-xl ripple"
                                            type="button"
                                        >
                                            X-Large button
                                        </button>
                                    </p>
                                    <p>
                                        <button
                                            className="mb-2 mr-2 btn btn-primary btn-lg ripple"
                                            type="button"
                                        >
                                            Large button
                                        </button>
                                        <button
                                            className="mb-2 mr-2 btn btn-secondary btn-lg ripple"
                                            type="button"
                                        >
                                            Large button
                                        </button>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        <button
                                            className="mb-2 mr-2 btn btn-primary ripple"
                                            type="button"
                                        >
                                            Normal button
                                        </button>
                                        <button
                                            className="mb-2 mr-2 btn btn-secondary ripple"
                                            type="button"
                                        >
                                            Normal button
                                        </button>
                                    </p>
                                    <p>
                                        <button
                                            className="mb-2 mr-2 btn btn-primary btn-sm ripple"
                                            type="button"
                                        >
                                            Small button
                                        </button>
                                        <button
                                            className="mb-2 mr-2 btn btn-secondary btn-sm ripple"
                                            type="button"
                                        >
                                            Small button
                                        </button>
                                    </p>
                                    <p>
                                        <button
                                            className="mb-2 mr-2 btn btn-primary btn-xs ripple"
                                            type="button"
                                        >
                                            Extra small button
                                        </button>
                                        <button
                                            className="mb-2 mr-2 btn btn-secondary btn-xs ripple"
                                            type="button"
                                        >
                                            Extra small button
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button group</h5>
                            <p />
                            <div className="btn-group">
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    Left
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    Middle
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    Right
                                </button>
                            </div>
                            <p />
                            <p />
                            <div className="btn-group">
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    1
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    2
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    3
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    4
                                </button>
                            </div>
                            <div className="btn-group">
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    5
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    6
                                </button>
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    7
                                </button>
                            </div>
                            <div className="btn-group">
                                <button
                                    className="btn btn-secondary ripple"
                                    type="button"
                                >
                                    8
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Pills</h5>
                            <p>Pill left</p>
                            <p>
                                {BUTTONS.map((c, i) => (
                                    <Button
                                        type="button"
                                        color={c.toLowerCase()}
                                        className="mb-2 mr-2 ripple btn-pill-left"
                                        key={i}
                                    >
                                        {c}
                                    </Button>
                                ))}
                            </p>
                            <p>Pill right</p>
                            <p>
                                {BUTTONS.map((c, i) => (
                                    <Button
                                        type="button"
                                        color={c.toLowerCase()}
                                        className="mb-2 mr-2 ripple btn-pill-right"
                                        key={i}
                                    >
                                        {c}
                                    </Button>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Oval</h5>
                            {BUTTONS.map((c, i) => (
                                <Button
                                    type="button"
                                    color={c.toLowerCase()}
                                    className="mb-2 mr-2 ripple btn-oval"
                                    key={i}
                                >
                                    {c}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button Square</h5>
                            {BUTTONS.map((c, i) => (
                                <Button
                                    type="button"
                                    color={c.toLowerCase()}
                                    className="mb-2 mr-2 ripple btn-square"
                                    key={i}
                                >
                                    {c}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0">Button dropdown</h5>
                            {BUTTONS.map((c, i) => (
                                <UncontrolledButtonDropdown
                                    key={i}
                                    className="mb-2 mr-2 ripple"
                                >
                                    <DropdownToggle
                                        caret
                                        color={c.toLowerCase()}
                                    >
                                        {c}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            ))}
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <h5 className="mt0 ellipsis">
                                Split button dropdown
                            </h5>
                            {BUTTONS.map((c, i) => (
                                <UncontrolledButtonDropdown
                                    key={i}
                                    className="mb-2 mr-2 ripple"
                                >
                                    <Button id="caret" color={c.toLowerCase()}>
                                        {c}
                                    </Button>
                                    <DropdownToggle
                                        caret
                                        color={c.toLowerCase()}
                                    />
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Header
                                        </DropdownItem>
                                        <DropdownItem disabled>
                                            Action
                                        </DropdownItem>
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Another Action
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Buttons);
