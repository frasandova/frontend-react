import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

class Wall extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Wall');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-overlap bg-indigo-500">
                    <div className="media m0 pv">
                        <div className="d-flex mr">
                            <a href="#">
                                <img
                                    className="rounded-circle thumb64"
                                    src="img/user/01.jpg"
                                    alt="User"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="mt-sm mb0">Christy Griffin</h4>
                            <span className="text-muted">
                                Aliquam viverra nibh at ipsum dapibus pulvinar
                                et eu ligula.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <form className="mt" action="">
                                        <div className="input-group mda-input-group">
                                            <div className="mda-form-group">
                                                <div className="mda-form-control">
                                                    <textarea
                                                        className="no-resize form-control"
                                                        rows="1"
                                                        aria-multiline="true"
                                                        aria-invalid="false"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                    <label className="m0">
                                                        What's on your mind?
                                                    </label>
                                                </div>
                                                <span className="mda-form-msg right">
                                                    Any message here
                                                </span>
                                            </div>
                                            <span className="input-group-btn">
                                                <button
                                                    className="btn btn-flat btn-success btn-circle"
                                                    type="button"
                                                >
                                                    <em className="ion-checkmark-round" />
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                <div className="cardbox-body">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <UncontrolledDropdown className="float-right">
                                                <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-secondary btn-flat btn-flat-icon ripple"
                                                >
                                                    <em className="ion-android-more-vertical" />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Hide post
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Stop following
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <div className="media m0">
                                                <div className="d-flex mr">
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb48"
                                                            src="img/user/06.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <p className="m0 text-bold">
                                                        Stephen Palmer
                                                    </p>
                                                    <small className="text-muted">
                                                        <em className="ion-earth text-muted mr-sm" />
                                                        <span>2 hours</span>
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="p">
                                                Ut egestas consequat faucibus.
                                                Donec id lectus tortor. Maecenas
                                                at porta purus. Etiam feugiat
                                                risus massa. Vivamus fermentum
                                                libero vel felis aliquet
                                                interdum.{" "}
                                            </div>
                                        </div>
                                        <div className="cardbox-footer">
                                            <button
                                                className="btn btn-flat btn-primary"
                                                type="button"
                                            >
                                                Like
                                            </button>
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
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <div className="cardbox">
                                        <div className="cardbox-heading">
                                            <UncontrolledDropdown className="float-right">
                                                <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-secondary btn-flat btn-flat-icon ripple"
                                                >
                                                    <em className="ion-android-more-vertical" />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Hide post
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Stop following
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <div className="media m0">
                                                <div className="d-flex mr">
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb48"
                                                            src="img/user/05.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <p className="m0 text-bold">
                                                        Ricky Wagner
                                                    </p>
                                                    <small className="text-muted">
                                                        <em className="ion-earth text-muted mr-sm" />
                                                        <span>10 hours</span>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cardbox-item">
                                            <img
                                                className="fw img-fluid"
                                                src="img/pic6.jpg"
                                                alt="MaterialImg"
                                            />
                                            <div className="cardbox-item-text bg-transparent">
                                                <p>The sun was shinning</p>
                                            </div>
                                        </div>
                                        <div className="cardbox-footer">
                                            <button
                                                className="btn btn-flat btn-primary"
                                                type="button"
                                            >
                                                Like
                                            </button>
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
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <div className="cardbox reader-block">
                                        <div className="cardbox-heading">
                                            <UncontrolledDropdown className="float-right">
                                                <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-secondary btn-flat btn-flat-icon ripple"
                                                >
                                                    <em className="ion-android-more-vertical" />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Hide post
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Stop following
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <div className="media m0">
                                                <div className="d-flex mr">
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb48"
                                                            src="img/user/06.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <p className="m0 text-bold">
                                                        Stephen Palmer
                                                    </p>
                                                    <small className="text-muted">
                                                        <em className="ion-earth text-muted mr-sm" />
                                                        <span>Yesterday</span>
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="p">
                                                <div className="mb">
                                                    Donec a purus auctor dui
                                                    hendrerit accumsan non quis
                                                    augue nisl sed iaculis.
                                                </div>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic1.jpg"
                                                        alt="Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic2.jpg"
                                                        alt="Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic3.jpg"
                                                        alt="Pic"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        className="mr-sm thumb48"
                                                        src="img/pic4.jpg"
                                                        alt="Pic"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cardbox-footer">
                                            <button
                                                className="btn btn-flat btn-primary"
                                                type="button"
                                            >
                                                Like
                                            </button>
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
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="push-down" />
                            <div className="cardbox cardbox-transparent">
                                <h5 className="cardbox-heading">Friends</h5>
                                <div className="mda-list">
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/01.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Eric Graves</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Ut ac nisi id mauris
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/02.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Bruce Ramos</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Sed lacus nisl luctus
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/03.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Marie Hall</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Donec congue sagittis mi
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/04.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Russell Hart</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Donec convallis arcu sit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/05.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Eric Graves</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Ut ac nisi id mauris
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/06.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Jessie Cox</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Sed lacus nisl luctus
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/01.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Jonathan Soto</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Donec congue sagittis mi
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img thumb48"
                                            src="img/user/05.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Guy Carpenter</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Donec convallis arcu sit
                                            </div>
                                        </div>
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

export default withHeaderTitle(Wall);
