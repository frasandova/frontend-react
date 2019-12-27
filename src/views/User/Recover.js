import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

import FormValidator from "../Forms/Validator.js";
import "../Forms/Material.scss";

/**
 * Validation flow using controlled components
 *
 * 1- User type on input
 * 2- onChange event trigger validation
 * 3- Validate methods are listed using "data-validate"
 *    attribute. Content must be an array in json format.
 * 4- The validation returns an object with format {[input name]: status}
 *    where status is an array of boolean per each method
 * 5- Methods that requires an argument, read the 'data-param' attribute
 * 6- Similarly, onSubmit event does a bulk validation on all form elements
 */

class Recover extends Component {
    state = {
        formRecover: {
            submitted: false,
            email: ""
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

        this.setState({
            formRecover: {
                ...this.state.formRecover,
                submitted: !hasError
            }
        });

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
        const { submitted } = this.state.formRecover;

        return (
            <div className="container-full">
                <div className="container container-xs">
                    <div className="text-center mv-lg">
                        <img
                            className="rounded-circle mb block-center img-fluid thumb64"
                            src="img/user/01.jpg"
                            alt="User Avatar"
                        />
                        <p>Brian Walker</p>
                    </div>
                    {submitted ? (
                        <div
                            className="cardbox bg-success ng-fadeIn"
                            id="confirmation"
                        >
                            <div className="cardbox-heading">
                                <em className="ion-checkmark-round float-right icon-lg" />
                                <h4 className="mt0">Mail Sent!</h4>
                            </div>
                            <div className="cardbox-body">
                                <p>
                                    Please check your inbox and follow
                                    instructions to reset your password.
                                </p>
                            </div>
                            <div className="cardbox-footer text-right">
                                <Link
                                    className="btn btn-success btn-flat text-white"
                                    to="/login"
                                >
                                    Login
                                    <em className="ion-ios-arrow-thin-right icon-fw" />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form
                            className="cardbox form-validate"
                            action=""
                            name="formRecover"
                            onSubmit={this.onSubmit}
                        >
                            <div className="cardbox-heading">
                                <p className="text-center text-inherit">
                                    Fill with your mail to receive instructions
                                    on how to reset your password.
                                </p>
                            </div>
                            <div className="cardbox-offset pb0">
                                <div className="cardbox-offset-item text-right ng-fadeInLeftShort">
                                    <button
                                        className="btn btn-success btn-circle btn-lg"
                                        type="submit"
                                    >
                                        <em className="ion-checkmark-round" />
                                    </button>
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
                                                    "formRecover",
                                                    "email",
                                                    "required"
                                                ) ||
                                                this.hasError(
                                                    "formRecover",
                                                    "email",
                                                    "email"
                                                )
                                            }
                                            onChange={this.validateOnChange}
                                            data-validate='["required", "email"]'
                                            value={this.state.formRecover.email}
                                        />
                                        <div className="mda-form-control-line" />
                                        <label>Email address</label>
                                    </div>
                                    <span className="mda-input-group-addon">
                                        <em className="ion-ios-email-outline icon-lg" />
                                    </span>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}

export default Recover;
