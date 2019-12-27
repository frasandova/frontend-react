import React, { Component } from "react";
import { Input } from "reactstrap";

import FormValidator from "../Forms/Validator.js";

class Signup extends Component {
    state = {
        formRegister: {
            email: "",
            password: "",
            password2: ""
        }
    };

    /**
     * Validate input using onChange event
     * @param  {String} formName The name of the form in the state object
     * @return {Function} a function used for the event
     */
    validateOnChange = event => {
        const input = event.target;
        const form = input.form;
        const value = input.type === "checkbox" ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });
    };

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i =>
            ["INPUT", "SELECT"].includes(i.nodeName)
        );

        const { errors, hasError } = FormValidator.bulkValidate(inputs);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? "Form has errors. Check!" : "Form Submitted!");

        e.preventDefault();
    };

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return (
            this.state[formName] &&
            this.state[formName].errors &&
            this.state[formName].errors[inputName] &&
            this.state[formName].errors[inputName][method]
        );
    };

    render() {
        return (
            <div className="container-full">
                <div className="container container-xs">
                    <div className="text-center">
                        <img
                            className="mv-lg img-fluid thumb64"
                            src="img/logo.png"
                            alt="Brand logo"
                        />
                    </div>
                    <form
                        className="cardbox b0 form-validate"
                        name="formRegister"
                        action=""
                        onSubmit={this.onSubmit}
                    >
                        <div className="cardbox-offset pb0">
                            <div className="cardbox-offset-item text-right">
                                <div
                                    className="btn btn-success btn-circle btn-lg invisible"
                                    id="form-ok"
                                >
                                    <em className="ion-checkmark-round" />
                                </div>
                            </div>
                        </div>
                        <div className="cardbox-heading">
                            <div className="cardbox-title text-center">
                                Create account
                            </div>
                        </div>
                        <div className="cardbox-body">
                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input
                                        type="email"
                                        name="email"
                                        invalid={
                                            this.hasError(
                                                "formRegister",
                                                "email",
                                                "required"
                                            ) ||
                                            this.hasError(
                                                "formRegister",
                                                "email",
                                                "email"
                                            )
                                        }
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        value={this.state.formRegister.email}
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Email address</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-ios-email-outline icon-lg" />
                                </span>
                            </div>
                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input
                                        type="password"
                                        id="id-source"
                                        name="password"
                                        invalid={this.hasError(
                                            "formRegister",
                                            "password",
                                            "required"
                                        )}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formRegister.password}
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Password</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-ios-locked-outline icon-lg" />
                                </span>
                            </div>
                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input
                                        type="password"
                                        name="password2"
                                        invalid={this.hasError(
                                            "formRegister",
                                            "password2",
                                            "equalto"
                                        )}
                                        onChange={this.validateOnChange}
                                        data-validate='["equalto"]'
                                        value={
                                            this.state.formRegister.password2
                                        }
                                        data-param="id-source"
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Confirm password</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-ios-locked-outline icon-lg" />
                                </span>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary btn-flat"
                            type="submit"
                        >
                            Create
                        </button>
                        <div className="cardbox-body bg-gray-lighter text-center text-sm">
                            <span className="spr">
                                By registering I accept the
                            </span>
                            <a className="spr" href="#">
                                Terms of Service
                            </a>
                            <span className="spr">and</span>
                            <a className="spr" href="#">
                                Privacy
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
