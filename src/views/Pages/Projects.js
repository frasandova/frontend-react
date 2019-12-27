import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Projects extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Projects');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-fluid">
                    <div className="row mv">
                        <div className="col-sm-4">
                            <button className="btn btn-info" type="button">
                                <em className="ion-plus mr-sm" />Add Project
                            </button>
                        </div>
                        <div className="col-sm-8 text-right d-none d-sm-block">
                            <form className="form-inline justify-content-end">
                                <div className="form-group mr">
                                    <label className="mr">
                                        <small>Status</small>
                                    </label>
                                    <select className="form-control input-sm">
                                        <option>Completed</option>
                                        <option>Active</option>
                                        <option>Paused</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="mr">
                                        <small>Sort by</small>
                                    </label>
                                    <select className="form-control input-sm">
                                        <option>Name</option>
                                        <option>Status</option>
                                        <option>Start Date</option>
                                        <option>Finish Date</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #A
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/02.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/05.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>56%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-info"
                                            style={{ width: "56%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #B
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>56%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-danger"
                                            style={{ width: "56%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-warning">
                                            paused
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #C
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>64%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-success"
                                            style={{ width: "64%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #D
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/05.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>36%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-warning"
                                            style={{ width: "36%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #A
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/02.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/05.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>56%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-info"
                                            style={{ width: "56%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-success">
                                            completed
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #B
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>100%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-success"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-warning">
                                            paused
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #C
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>64%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-success"
                                            style={{ width: "64%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #D
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/03.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/07.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/05.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>36%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-warning"
                                            style={{ width: "36%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <div className="float-right">
                                        <div className="tag tag-info">
                                            active
                                        </div>
                                    </div>
                                    <div className="cardbox-title">
                                        Project #A
                                    </div>
                                    <small>Web development</small>
                                </div>
                                <div className="cardbox-body">
                                    <p>
                                        <strong>Description:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        Ut turpis urna, tristique sed adipiscing
                                        nec, luctus quis leo. Fusce nec volutpat
                                        ante.
                                    </div>
                                    <p>
                                        <strong>Members:</strong>
                                    </p>
                                    <div className="pl-lg mb-lg">
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/02.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/04.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/05.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                        <a className="inline" href="#">
                                            <img
                                                className="rounded-circle thumb32"
                                                src="img/user/06.jpg"
                                                alt="project member"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        <strong>Activity:</strong>
                                    </p>
                                    <div className="px-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">
                                                    Issues
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">
                                                    Posts
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">
                                                    Tests
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer">
                                    <p>
                                        <small>56%</small>
                                    </p>
                                    <div className="progress progress-xs m0">
                                        <div
                                            className="progress-bar progress-bar-info"
                                            style={{ width: "56%" }}
                                        />
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

export default withHeaderTitle(Projects);
