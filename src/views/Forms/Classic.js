import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class FormsClassic extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Forms Classic');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <h5 className="mt0">
                        Classic form controls and custom variants
                    </h5>
                    <p className="mb-lg">
                        Standard Bootstrap form and input controls with
                        customized UI variations
                    </p>
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <form method="get" action="/">
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Rounded Corners
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control input-rounded"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            With help
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                            />
                                            <span className="form-text text-muted">
                                                A block of help text that breaks
                                                onto a new line and may extend
                                                beyond one line.
                                            </span>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label
                                            className="col-lg-2 col-form-label text-bold text-right"
                                            htmlFor="input-id-1"
                                        >
                                            Label focus
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                id="input-id-1"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Password
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="password"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Placeholder
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="placeholder"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Disabled
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Disabled input here..."
                                                disabled=""
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Static control
                                        </label>
                                        <div className="col-lg-10">
                                            <p className="form-control-plaintext">
                                                email@example.com
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Checkboxes and radios
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                    Option one is this and
                                                    that—be sure to include why
                                                    it's great
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        id="optionsRadios1"
                                                        type="radio"
                                                        name="optionsRadios"
                                                        defaultValue="option1"
                                                        defaultChecked
                                                    />
                                                    Option one is this and
                                                    that—be sure to include why
                                                    it's great
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        id="optionsRadios2"
                                                        type="radio"
                                                        name="optionsRadios"
                                                        defaultValue="option2"
                                                    />
                                                    Option two can be something
                                                    else and selecting it will
                                                    deselect option one
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Inline checkboxes
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        id="inlineCheckbox1"
                                                        type="checkbox"
                                                        defaultValue="option1"
                                                    />{" "}
                                                    a
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        id="inlineCheckbox2"
                                                        type="checkbox"
                                                        defaultValue="option2"
                                                    />{" "}
                                                    b
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        id="inlineCheckbox3"
                                                        type="checkbox"
                                                        defaultValue="option3"
                                                    />{" "}
                                                    c
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="last-child">
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Select
                                        </label>
                                        <div className="col-lg-10">
                                            <select
                                                className="form-control"
                                                name="account"
                                            >
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                            <br />
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <select
                                                        className="form-control"
                                                        multiple=""
                                                    >
                                                        <option>
                                                            Option 1
                                                        </option>
                                                        <option>
                                                            Option 2
                                                        </option>
                                                        <option>
                                                            Option 3
                                                        </option>
                                                        <option>
                                                            Option 4
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Checkboxes
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Option one
                                                </label>
                                            </div>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        defaultValue=""
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Option two checked
                                                </label>
                                            </div>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled=""
                                                        defaultValue=""
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Option three checked and
                                                    disabled
                                                </label>
                                            </div>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        disabled=""
                                                        defaultValue=""
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Option four disabled
                                                </label>
                                            </div>
                                        </div>
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Radios
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="radio c-radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="a"
                                                        defaultValue="option1"
                                                    />
                                                    <span className="ion-record" />{" "}
                                                    Option one
                                                </label>
                                            </div>
                                            <div className="radio c-radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="a"
                                                        defaultValue="option2"
                                                        defaultChecked
                                                    />
                                                    <span className="ion-record" />{" "}
                                                    Option two checked
                                                </label>
                                            </div>
                                            <div className="radio c-radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        defaultValue="option2"
                                                        defaultChecked
                                                        disabled=""
                                                    />
                                                    <span className="ion-record" />{" "}
                                                    Option three checked and
                                                    disabled
                                                </label>
                                            </div>
                                            <div className="radio c-radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="a"
                                                        disabled=""
                                                    />
                                                    <span className="ion-record" />{" "}
                                                    Option four disabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Inline checkboxes
                                        </label>
                                        <div className="col-lg-10">
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlineCheckbox10"
                                                    type="checkbox"
                                                    defaultValue="option1"
                                                />
                                                <span className="ion-checkmark-round" />{" "}
                                                a
                                            </label>
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlineCheckbox20"
                                                    type="checkbox"
                                                    defaultValue="option2"
                                                />
                                                <span className="ion-checkmark-round" />{" "}
                                                b
                                            </label>
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlineCheckbox30"
                                                    type="checkbox"
                                                    defaultValue="option3"
                                                />
                                                <span className="ion-checkmark-round" />{" "}
                                                c
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Rounded
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="checkbox c-checkbox c-checkbox-rounded">
                                                <label>
                                                    <input
                                                        id="roundedcheckbox10"
                                                        type="checkbox"
                                                        defaultChecked
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Lorem
                                                </label>
                                            </div>
                                            <div className="checkbox c-checkbox c-checkbox-rounded">
                                                <label>
                                                    <input
                                                        id="roundedcheckbox20"
                                                        type="checkbox"
                                                    />
                                                    <span className="ion-checkmark-round" />{" "}
                                                    Ipsum
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Inline radios
                                        </label>
                                        <div className="col-lg-10">
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio1"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option1"
                                                    defaultChecked
                                                />
                                                <span className="ion-record" />{" "}
                                                a
                                            </label>
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio2"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option2"
                                                />
                                                <span className="ion-record" />{" "}
                                                b
                                            </label>
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio3"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option3"
                                                />
                                                <span className="ion-record" />{" "}
                                                c
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Custom icons
                                        </label>
                                        <div className="col-lg-10">
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio10"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option1"
                                                    defaultChecked
                                                />
                                                <span className="ion-checkmark-round" />{" "}
                                                a
                                            </label>
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio20"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option2"
                                                    defaultChecked
                                                />
                                                <span className="ion-person" />{" "}
                                                b
                                            </label>
                                            <label className="c-radio">
                                                <input
                                                    id="inlineradio30"
                                                    type="radio"
                                                    name="i-radio"
                                                    defaultValue="option3"
                                                    defaultChecked
                                                />
                                                <span className="ion-waterdrop" />{" "}
                                                c
                                            </label>
                                            <br />
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlinecheckbox10"
                                                    type="checkbox"
                                                    defaultValue="option1"
                                                    defaultChecked
                                                />
                                                <span className="ion-star" /> a
                                            </label>
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlinecheckbox20"
                                                    type="checkbox"
                                                    defaultValue="option2"
                                                    defaultChecked
                                                />
                                                <span className="ion-heart" /> b
                                            </label>
                                            <label className="c-checkbox">
                                                <input
                                                    id="inlinecheckbox30"
                                                    type="checkbox"
                                                    defaultValue="option3"
                                                    defaultChecked
                                                />
                                                <span className="ion-ios-bell" />{" "}
                                                c
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Input valid
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control is-valid"
                                                id="inputSuccess1"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Input invalid
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control is-invalid"
                                                id="inputDanger1"
                                                type="text"
                                            />
                                            <div className="invalid-feedback">
                                                Sorry, that username&apos;s
                                                taken. Try another?
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Custom controls
                                        </label>
                                        <div className="col-lg-10">
                                            <p>Checkboxes</p>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheck1"
                                                >
                                                    Check this custom checkbox
                                                </label>
                                            </div>
                                            <p className="mt-3">Radios</p>
                                            <div className="custom-control custom-radio">
                                                <input
                                                    className="custom-control-input"
                                                    id="customRadio1"
                                                    type="radio"
                                                    name="customRadio"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customRadio1"
                                                >
                                                    Toggle this custom radio
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input
                                                    className="custom-control-input"
                                                    id="customRadio2"
                                                    type="radio"
                                                    name="customRadio"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customRadio2"
                                                >
                                                    Or toggle this other custom
                                                    radio
                                                </label>
                                            </div>
                                            <p className="mt-3">Select</p>
                                            <select className="custom-select">
                                                <option value="">
                                                    Open this select menu
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <p className="mt-3">Range</p>
                                            <input
                                                className="custom-range"
                                                id="customRange1"
                                                type="range"
                                            />
                                            <p className="mt-3">File</p>
                                            <div className="custom-file">
                                                <input
                                                    className="custom-file-input"
                                                    id="customFile"
                                                    type="file"
                                                />
                                                <label
                                                    className="custom-file-label"
                                                    htmlFor="customFile"
                                                >
                                                    Choose file
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Control sizing
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                placeholder=".form-control-lg"
                                            />
                                            <br />
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Default input"
                                            />
                                            <br />
                                            <input
                                                className="form-control input-sm"
                                                type="text"
                                                placeholder=".input-sm"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Column sizing
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=".col-lg-2"
                                                    />
                                                </div>
                                                <div className="col-lg-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=".col-lg-3"
                                                    />
                                                </div>
                                                <div className="col-lg-4">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=".col-lg-4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Input groups
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addon1"
                                                    >
                                                        @
                                                    </span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Recipient's username"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <span
                                                        className="input-group-text"
                                                        id="basic-addon2"
                                                    >
                                                        @example.com
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        $
                                                    </span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        .00
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input
                                                            type="checkbox"
                                                            aria-label="Checkbox for following text input"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with checkbox"
                                                />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input
                                                            type="radio"
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with radio button"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Button addons
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Button
                                                    </button>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                    aria-label=""
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Recipient's username"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-success"
                                                        type="button"
                                                    >
                                                        Go!
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        <em className="ion-person" />
                                                    </button>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder=""
                                                    aria-label=""
                                                    aria-describedby="basic-addon1"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        <em className="ion-person-stalker" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Multiple addons
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                $
                                                            </span>
                                                            <span className="input-group-text">
                                                                0.00
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            aria-label="Amount (to the nearest dollar)"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            aria-label="Amount (to the nearest dollar)"
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                $
                                                            </span>
                                                            <span className="input-group-text">
                                                                0.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            With dropdowns
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Dropdown
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Something else here
                                                        </a>
                                                        <div
                                                            className="dropdown-divider"
                                                            role="separator"
                                                        />
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with dropdown button"
                                                />
                                            </div>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with dropdown button"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Dropdown
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Something else here
                                                        </a>
                                                        <div
                                                            className="dropdown-divider"
                                                            role="separator"
                                                        />
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label text-bold text-right">
                                            Segmented
                                        </label>
                                        <div className="col-lg-10">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Action
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span className="sr-only">
                                                            Toggle Dropdown
                                                        </span>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Something else here
                                                        </a>
                                                        <div
                                                            className="dropdown-divider"
                                                            role="separator"
                                                        />
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with segmented dropdown button"
                                                />
                                            </div>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    aria-label="Text input with segmented dropdown button"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Action
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span className="sr-only">
                                                            Toggle Dropdown
                                                        </span>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Another action
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Something else here
                                                        </a>
                                                        <div
                                                            className="dropdown-divider"
                                                            role="separator"
                                                        />
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            Separated link
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(FormsClassic);
