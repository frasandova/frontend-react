import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';

import FormValidator from "../Forms/Validator.js";
import "../Forms/Material.scss";
import { LoginPost } from '../../services/LoginPost';

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

class Login extends Component {
    state = {
        formLogin: {
            email: "",
            password: ""
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
        e.preventDefault();
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

        //console.log(hasError ? "Form has errors. Check!" : "Form Submitted!");
        let username = form.email.value;
        let password = form.password.value;

        if(hasError != true)
        {
            LoginPost(username, password);
            if(sessionStorage.getItem("NoAutorizado") != null)
            {
                Swal.fire('Oops...', 'Usuario o password invalido!', 'error')
            } 
        }else{
            Swal.fire('Oops...', 'Usuario o password invalido!', 'error')
        }

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
                            className="mv-lg img-fluid thumb128"
                            src="img/logo-cadem.svg"
                            alt="Logo Cadem"
                        />
                    </div>
                    <form
                        className="cardbox b0 form-validate"
                        action=""
                        name="formLogin"
                        onSubmit={this.onSubmit}
                    >
                        <div className="cardbox-offset pb0">
                            <div className="cardbox-offset-item text-right invisible">
                                <div className="btn btn-success btn-circle btn-lg">
                                    <em className="ion-checkmark-round" />
                                </div>
                            </div>
                        </div>
                        <div className="cardbox-heading">
                            <div className="cardbox-title text-center">
                                Acceso
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
                                                "formLogin",
                                                "email",
                                                "required"
                                            ) ||
                                            this.hasError(
                                                "formLogin",
                                                "email",
                                                "email"
                                            )
                                        }
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        value={this.state.formLogin.email}
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Usuario</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-ios-email-outline icon-lg" />
                                </span>
                            </div>
                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input
                                        type="password"
                                        name="password"
                                        invalid={this.hasError(
                                            "formLogin",
                                            "password",
                                            "required"
                                        )}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formLogin.password}
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Password</label>
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
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object
};

export default Login;
