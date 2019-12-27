import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import '../../components/Elements/List.scss';

class Cards extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Cards');
    }

    componentDidMount() {}

    render() {
        return (
            <section className="section-container">
                <div className="container container-lg">
                    <div className="row">
                        <div className="col-xl-8 col-md-12">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-heading bg-pink-500">
                                            <div className="float-right dropdown">
                                                <button
                                                    className="btn btn-flat btn-flat-icon"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                >
                                                    <em className="ion-android-more-vertical" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right"
                                                    role="menu"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Option 1
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Option 2
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Option 3
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cardbox-title">
                                                Paracosm
                                            </div>
                                        </div>
                                        <div className="cardbox-body">
                                            <p>
                                                Nulla egestas faucibus
                                                tincidunt.
                                            </p>
                                            <p className="m0">
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic1.jpg"
                                                        alt="Dummy Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic2.jpg"
                                                        alt="Dummy Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic3.jpg"
                                                        alt="Dummy Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic4.jpg"
                                                        alt="Dummy Pic"
                                                    />
                                                </a>
                                            </p>
                                        </div>
                                        <div className="cardbox-footer">
                                            <button
                                                className="btn btn-flat btn-secondary"
                                                type="button"
                                            >
                                                Action 1
                                            </button>
                                            <button
                                                className="btn btn-flat btn-secondary"
                                                type="button"
                                            >
                                                Action 2
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-heading bg-primary">
                                            <div className="cardbox-title">
                                                Paracosm
                                            </div>
                                        </div>
                                        <div className="cardbox-offset">
                                            <div className="cardbox-offset-item text-right">
                                                <button
                                                    className="btn-raised btn btn-info btn-circle btn-lg"
                                                    type="button"
                                                >
                                                    <em className="ion-android-add" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardbox-body pt0">
                                            <p className="mb-sm">
                                                Cras rutrum scelerisque auctor.
                                                Donec ultricies blandit
                                                venenatis. Nulla facilisi.
                                                Praesent diam diam, venenatis
                                                lorem par.
                                            </p>
                                        </div>
                                        <div className="cardbox-footer">
                                            <button
                                                className="btn btn-flat btn-secondary"
                                                type="button"
                                            >
                                                Action 1
                                            </button>
                                            <button
                                                className="btn btn-flat btn-secondary"
                                                type="button"
                                            >
                                                Action 2
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-item">
                                            <img
                                                className="fw img-fluid"
                                                src="img/pic5.jpg"
                                                alt="Material"
                                            />
                                            <div className="cardbox-item-text text-right">
                                                Paracosm
                                            </div>
                                        </div>
                                        <div className="cardbox-offset">
                                            <div className="cardbox-offset-item text-left">
                                                <button
                                                    className="btn-raised btn btn-primary btn-circle btn-lg"
                                                    type="button"
                                                >
                                                    25
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardbox-body pt0">
                                            <h4 className="m0">Sky red</h4>
                                            <p className="m0">
                                                <span className="mr-sm text-muted">
                                                    by
                                                </span>
                                                <a href="#">John</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="cardbox">
                                        <div className="cardbox-item">
                                            <img
                                                className="fw img-fluid"
                                                src="img/pic4.jpg"
                                                alt="Material"
                                            />
                                            <div className="cardbox-item-text">
                                                Paracosm
                                            </div>
                                        </div>
                                        <div className="cardbox-offset">
                                            <div className="cardbox-offset-item text-center">
                                                <button
                                                    className="btn-raised btn btn-success btn-circle btn-lg"
                                                    type="button"
                                                >
                                                    <em className="ion-share" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardbox-body pt0">
                                            <h4 className="m0">
                                                Peaceful view
                                            </h4>
                                            <p className="m0">
                                                <span className="mr-sm text-muted">
                                                    by
                                                </span>
                                                <a href="#">Zachary</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic1.jpg"
                                        alt="Material"
                                    />
                                    <div className="cardbox-item-text bg-transparent">
                                        <h4 className="text-center">
                                            Jill Howell
                                        </h4>
                                    </div>
                                </div>
                                <div className="cardbox-offset">
                                    <div className="cardbox-offset-item text-right">
                                        <button
                                            className="btn-raised btn btn-danger btn-circle btn-lg"
                                            type="button"
                                        >
                                            <em className="ion-ios-heart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mda-list">
                                    <div className="mda-list-item">
                                        <div className="mda-list-item-icon">
                                            <em className="ion-android-call icon-2x text-primary" />
                                        </div>
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>(123) 456 789</h3>
                                            <h4 className="text-muted">Home</h4>
                                        </div>
                                        <div className="mda-list-item-icon float-right">
                                            <em className="ion-chatbubbles icon-lg text-muted" />
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <div className="mda-list-item-icon" />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>(123) +15 321 654</h3>
                                            <h4 className="text-muted">
                                                Mobile
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <div className="mda-list-item-icon">
                                            <em className="ion-android-mail icon-2x text-primary" />
                                        </div>
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>jill@personal.com</h3>
                                            <h4 className="text-muted">
                                                Personal
                                            </h4>
                                        </div>
                                        <div className="mda-list-item-icon float-right">
                                            <em className="ion-compose icon-lg text-muted" />
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <div className="mda-list-item-icon" />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>jill.howell@work.com</h3>
                                            <h4 className="text-muted">Work</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="cardbox bg-primary mb">
                                <div className="cardbox-body">
                                    <div className="cardbox-title">
                                        <div className="float-right">
                                            <em className="ion-calendar icon-2x text-muted va-top" />
                                        </div>
                                        <h4 className="m0">New event</h4>
                                    </div>
                                    <h5>22 Aug, at 10 a.m.</h5>
                                </div>
                                <div className="cardbox-footer">
                                    <button
                                        className="btn btn-flat btn-primary text-white"
                                        type="button"
                                    >
                                        Add to Calendar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="cardbox bg-success mb">
                                <div className="cardbox-body">
                                    <div className="cardbox-title">
                                        <div className="row">
                                            <div className="col-8">
                                                <em className="ion-ios-musical-notes icon-2x float-left" />
                                                <div className="pl-xl">
                                                    <h5 className="mv-sm">
                                                        Pellentesque vitae
                                                    </h5>
                                                    <h6 className="m0">
                                                        Aliquam non eros
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded"
                                                        src="img/user/05.jpg"
                                                        alt="Nam in purus in lacus dictum pharetra sit amet ac arcu. "
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-footer clearfix">
                                    <div className="float-left">
                                        <button
                                            className="btn btn-flat btn-success text-white"
                                            type="button"
                                        >
                                            Play now
                                        </button>
                                    </div>
                                    <div className="float-right">
                                        <button
                                            className="btn btn-flat btn-success text-white"
                                            type="button"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div className="cardbox bg-info mb">
                                <div className="cardbox-body">
                                    <p className="lead m0 text-white">
                                        A simple announce could be added here
                                        with any text for users who want to read
                                        this.
                                    </p>
                                </div>
                                <div className="cardbox-footer text-right">
                                    <button
                                        className="btn btn-flat btn-info text-white"
                                        type="button"
                                    >
                                        Ok, Let's Go!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            <div className="float-right dropdown">
                                <button
                                    className="btn btn-secondary btn-flat btn-flat-icon"
                                    type="button"
                                    data-toggle="dropdown"
                                >
                                    <em className="ion-android-more-vertical" />
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    role="menu"
                                >
                                    <a className="dropdown-item" href="#">
                                        Option 1
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Option 2
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Option 3
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cardbox-body pt0">
                            <h3 className="mt0">Technology</h3>
                            <p>
                                Dolore ex deserunt aute fugiat aute nulla ea
                                sunt aliqua nisi cupidatat eu. Nostrud in
                                laboris labore nisi amet do dolor eu fugiat
                                consectetur elit cillum esse. Pariatur occaecat
                                nisi laboris tempor laboris eiusmod qui id Lorem
                                esse commodo in. Exercitation aute dolore
                                deserunt culpa consequat elit labore incididunt
                                elit anim.
                            </p>
                        </div>
                        <div className="cardbox-footer">
                            <button
                                className="btn btn-flat btn-primary"
                                type="button"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic3.jpg"
                                        alt="Material"
                                    />
                                </div>
                                <div className="cardbox-body">
                                    <h4 className="mt0">Freedom in the air</h4>
                                    <p className="m0">
                                        Nunc vitae ipsum elit, non lacinia dui.
                                        Sed tempor lacinia tempus. Etiam eget
                                        congue nulla. Sed quis eros libero, a
                                        euismod nisl.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic2.jpg"
                                        alt="Material"
                                    />
                                </div>
                                <div className="cardbox-body">
                                    <h4 className="mt0">Mountain lake</h4>
                                    <p>
                                        Cras et dui non erat ornare ornare eget
                                        non sapien.
                                    </p>
                                    <div className="text-right">
                                        <button
                                            className="btn btn-flat btn-primary"
                                            type="button"
                                        >
                                            Share
                                        </button>
                                        <button
                                            className="btn btn-flat btn-primary"
                                            type="button"
                                        >
                                            More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic1.jpg"
                                        alt="Material"
                                    />
                                    <div className="cardbox-item-text">
                                        <a href="#">
                                            <em className="ion-map mr icon-lg" />
                                        </a>
                                        <a href="#">
                                            <em className="ion-ios-heart-outline mr icon-lg" />
                                        </a>
                                        <a href="#">
                                            <em className="ion-image icon-lg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <h4 className="mt0">Forest trip</h4>
                                    <p>
                                        Nullam quis lorem a est auctor venenatis
                                        vel vitae ipsum.
                                    </p>
                                    <hr />
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <span className="mr-sm text-muted">
                                                by
                                            </span>
                                            <a href="#">Bonnie</a>
                                        </div>
                                        <div className="float-right text-muted">
                                            <em className="ion-android-time mr-sm" />
                                            <span>a week ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic4.jpg"
                                        alt="Material"
                                    />
                                    <p className="cardbox-item-text">
                                        Picture.png
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-item">
                                    <img
                                        className="fw img-fluid"
                                        src="img/pic1.jpg"
                                        alt="Material"
                                    />
                                    <p className="cardbox-item-text">
                                        Image.jpg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Cards);
