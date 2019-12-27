import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import './Material.scss';

class Material extends Component {

    componentWillMount() {
        this.props.setHeaderTitle('Material');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-lg">
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            <div className="cardbox-title">Material Forms</div>
                        </div>
                        <div className="cardbox-body bg-blue-grey-900">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control mda-form-control-dark">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Title</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control mda-form-control-dark">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                disabled=""
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Company(disabled)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mda-form-group float-label">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                required=""
                                                tabIndex="0"
                                                aria-required="true"
                                                aria-invalid="true"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>First Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mda-form-group float-label">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                required=""
                                                tabIndex="0"
                                                aria-required="true"
                                                aria-invalid="true"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Address</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Address 2</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>City</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>State</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <input
                                                className="form-control"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Postal Code</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                aria-multiline="true"
                                                tabIndex="0"
                                                aria-invalid="false"
                                            />
                                            <div className="mda-form-control-line" />
                                            <label>Biography</label>
                                            <span className="mda-form-msg right">
                                                Any message here
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="mda-form-group">
                                        <div className="mda-form-control">
                                            <select className="form-control">
                                                <option value="1">
                                                    Option 1
                                                </option>
                                                <option value="2">
                                                    Option 2
                                                </option>
                                                <option value="3">
                                                    Option 3
                                                </option>
                                                <option value="4">
                                                    Option 4
                                                </option>
                                                <option value="5">
                                                    Option 5
                                                </option>
                                            </select>
                                            <div className="mda-form-control-line" />
                                            <label>Select</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading bg-primary">
                            <div className="float-right">
                                <em className="ion-ios-browsers-outline icon-2x va-top" />
                            </div>
                            <div className="cardbox-title">Material Forms</div>
                        </div>
                        <div className="cardbox-toolbar bg-primary">Errors</div>
                        <div className="cardbox-body">
                            <form className="form-validate">
                                <div className="mda-form-group float-label mb">
                                    <div className="mda-form-control">
                                        <input
                                            className="form-control"
                                            required=""
                                            tabIndex="0"
                                            aria-required="true"
                                            aria-invalid="true"
                                        />
                                        <div className="mda-form-control-line" />
                                        <label>Client Name</label>
                                    </div>
                                    <span className="mda-form-msg">
                                        Input should match 'a-zA-Z0-9' and 6-10
                                        length
                                    </span>
                                </div>
                                <div className="mda-form-group">
                                    <div className="mda-form-control">
                                        <input
                                            className="form-control"
                                            tabIndex="0"
                                            aria-invalid="true"
                                        />
                                        <div className="mda-form-control-line" />
                                        <label>Salary</label>
                                    </div>
                                    <span className="mda-form-msg">
                                        Your salary must be at least 6 digits
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading bg-primary">
                            <div className="cardbox-title">Icons</div>
                        </div>
                        <div className="cardbox-body">
                            <div className="mda-form-group float-label mb mda-input-group">
                                <div className="mda-form-control">
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Username</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-person icon-lg" />
                                </span>
                            </div>
                            <div className="mda-form-group mb mda-input-group">
                                <div className="mda-form-control">
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Phone</label>
                                </div>
                                <span className="mda-input-group-addon">
                                    <em className="ion-ios-telephone text-primary icon-lg" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading bg-primary">
                            <div className="cardbox-title">Switches</div>
                        </div>
                        <div className="cardbox-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn">
                                                <input
                                                    type="checkbox"
                                                    disabled={true}
                                                />
                                                <span />
                                            </label>
                                            Switch disabled
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                    disabled={true}
                                                />
                                                <span />
                                            </label>
                                            Switch disabled active
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-primary">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch primary
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-purple">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch purple
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-info">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch info
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-success">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch success
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warning">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warning
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-danger">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch danger
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-primary">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn primary
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-purple">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn purple
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-info">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn info
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-success">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn success
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-warning">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn warning
                                        </div>
                                    </div>
                                    <div className="row mb">
                                        <div className="col-sm-8">
                                            <label className="switch switch-warn switch-danger">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span />
                                            </label>
                                            Switch warn danger
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading bg-primary">
                            <div className="cardbox-title">Checkboxes</div>
                        </div>
                        <div className="cardbox-body">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" />
                                            <em className="bg-indigo-500" />This
                                            is a Checkbox
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-purple-500" />This
                                            is a Checkbox checked
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input
                                                type="checkbox"
                                                disabled=""
                                            />
                                            <em className="bg-indigo-500" />This
                                            is a Checkbox disabled
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                                disabled=""
                                            />
                                            <em className="bg-indigo-500" />This
                                            is a Checkbox checked and disabled
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-blue-500 empty" />
                                            This is a Checkbox empty
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-red-500" />This a
                                            checkbox red
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-pink-500" />This a
                                            checkbox pink
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-purple-500" />This
                                            a checkbox purple
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-deep-purple-500" />
                                            This a checkbox purple
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-indigo-500" />This
                                            a checkbox indigo
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-blue-500" />This a
                                            checkbox blue
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-cyan-500" />This a
                                            checkbox cyan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-teal-500" />This a
                                            checkbox teal
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-green-500" />This
                                            a checkbox green
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-lime-500" />This a
                                            checkbox lime
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-yellow-500" />This
                                            a checkbox yellow
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-amber-500" />This
                                            a checkbox amber
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-orange-500" />This
                                            a checkbox orange
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <em className="bg-brown-500" />This
                                            a checkbox brown
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading bg-primary">
                            <div className="cardbox-title">Radios</div>
                        </div>
                        <div className="cardbox-body">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="oneradio"
                                            />
                                            <em className="bg-indigo-500" />This
                                            is a radio
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="oneradio"
                                                defaultChecked
                                            />
                                            <em className="bg-purple-500" />This
                                            is a radio checked
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="otherradio"
                                                disabled=""
                                            />
                                            <em className="bg-indigo-500" />This
                                            is a radio disabled
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="otherradio"
                                                defaultChecked
                                                disabled=""
                                            />
                                            <em className="bg-indigo-500" />This
                                            is a radio checked and disabled
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="emptyradio"
                                                defaultChecked
                                            />
                                            <em className="bg-blue-500 empty" />
                                            This is a radio empty
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-red"
                                                defaultChecked
                                            />
                                            <em className="bg-red-500" />This a
                                            radio red
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-pink"
                                                defaultChecked
                                            />
                                            <em className="bg-pink-500" />This a
                                            radio pink
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-purple"
                                                defaultChecked
                                            />
                                            <em className="bg-purple-500" />This
                                            a radio purple
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-deep-purple"
                                                defaultChecked
                                            />
                                            <em className="bg-deep-purple-500" />
                                            This a radio purple
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-indigo"
                                                defaultChecked
                                            />
                                            <em className="bg-indigo-500" />This
                                            a radio indigo
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-blue"
                                                defaultChecked
                                            />
                                            <em className="bg-blue-500" />This a
                                            radio blue
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-cyan"
                                                defaultChecked
                                            />
                                            <em className="bg-cyan-500" />This a
                                            radio cyan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-teal"
                                                defaultChecked
                                            />
                                            <em className="bg-teal-500" />This a
                                            radio teal
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-green"
                                                defaultChecked
                                            />
                                            <em className="bg-green-500" />This
                                            a radio green
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-lime"
                                                defaultChecked
                                            />
                                            <em className="bg-lime-500" />This a
                                            radio lime
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-yellow"
                                                defaultChecked
                                            />
                                            <em className="bg-yellow-500" />This
                                            a radio yellow
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-amber"
                                                defaultChecked
                                            />
                                            <em className="bg-amber-500" />This
                                            a radio amber
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-orange"
                                                defaultChecked
                                            />
                                            <em className="bg-orange-500" />This
                                            a radio orange
                                        </label>
                                    </div>
                                    <div className="mb">
                                        <label className="mda-radio">
                                            <input
                                                type="radio"
                                                name="someradio-brown"
                                                defaultChecked
                                            />
                                            <em className="bg-brown-500" />This
                                            a radio brown
                                        </label>
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

export default withHeaderTitle(Material);
