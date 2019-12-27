import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import "../Elements/List.scss";

class Profile extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Profile');
    }

    componentDidMount() {}

    render() {
        return (
            <section className="section-container">
                <div className="container-overlap bg-blue-500">
                    <div className="media m0 pv">
                        <div className="d-flex mr">
                            <a href="#dummy">
                                <img
                                    className="rounded-circle thumb64"
                                    src="img/user/03.jpg"
                                    alt="User"
                                />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="mt-sm mb0">Christine Matthews</h4>
                            <span className="text-muted">
                                Sed eget lacus quis diam molestie mollis.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-xl-8">
                            <form className="cardbox">
                                <div className="cardbox-heading pb0">
                                    <UncontrolledDropdown className="float-right">
                                        <DropdownToggle className="btn btn-secondary btn-flat btn-flat-icon">
                                            <em className="ion-android-more-vertical" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Action 1
                                            </DropdownItem>
                                            <DropdownItem>
                                                Action 2
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <h5 className="m-0">About</h5>
                                </div>
                                <div className="cardbox-body">
                                    <p
                                        className="is-editable text-inherit"
                                        data-type="textarea"
                                    >
                                        Pellentesque porta tincidunt justo, non
                                        fringilla erat iaculis in. Sed nisi
                                        erat, ornare eu pellentesque quis,
                                        pellentesque non nulla. Proin rutrum,
                                        est pellentesque commodo mattis, sem
                                        justo porttitor odio, id aliquet lacus
                                        augue nec nisl.
                                    </p>
                                </div>
                                <div className="cardbox-divider" />
                                <div className="cardbox-offset">
                                    <div className="cardbox-offset-item text-right">
                                        <button
                                            className="btn-raised btn btn-warning btn-circle btn-lg"
                                            id="edit-enable"
                                            type="button"
                                        >
                                            <em className="ion-edit" />
                                        </button>
                                        <button
                                            className="btn-raised btn btn-success btn-circle btn-lg d-none"
                                            id="edit-disable"
                                            type="submit"
                                        >
                                            <em className="ion-checkmark-round" />
                                        </button>
                                    </div>
                                </div>
                                <h5 className="cardbox-heading pb0">
                                    Contact Information
                                </h5>
                                <div className="cardbox-body">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <em className="ion-document-text icon-fw mr" />
                                                    Area
                                                </td>
                                                <td>
                                                    Research &amp; development
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-egg icon-fw mr" />
                                                    Birthday
                                                </td>
                                                <td>
                                                    <span
                                                        className="is-editable text-inherit"
                                                        data-type="combodate"
                                                        data-mode="inline"
                                                    >
                                                        10/11/2000
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-ios-body icon-fw mr" />
                                                    Member since
                                                </td>
                                                <td>
                                                    <span
                                                        className="is-editable text-inherit"
                                                        data-type="combodate"
                                                        data-mode="inline"
                                                    >
                                                        05/11/2015
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-man icon-fw mr" />
                                                    Gender
                                                </td>
                                                <td>Female</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-android-home icon-fw mr" />
                                                    Address
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        Some street, 123
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-email icon-fw mr" />
                                                    Email
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        <a href="#">
                                                            user@mail.com
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <em className="ion-ios-telephone icon-fw mr" />
                                                    Contact phone
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        13-123-46578
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cardbox-divider" />
                                <h5 className="cardbox-heading pb0">
                                    Recent articles
                                </h5>
                                <div className="cardbox-body">
                                    <ul className="mda-list">
                                        <li className="mda-list-item pl0 bb">
                                            <div className="mda-list-item-text">
                                                <h3>
                                                    <a href="#">
                                                        Release 3.0 is out
                                                    </a>
                                                </h3>
                                                <p>
                                                    Proin metus justo, commodo
                                                    in ultrices...
                                                </p>
                                                <small className="text-muted">
                                                    2 days ago
                                                </small>
                                            </div>
                                            <div className="float-right">
                                                <div className="pt-lg">
                                                    <em
                                                        className="icon-2x ion-checkmark-circled text-success"
                                                        tooltip="Active"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mda-list-item pl0 bb">
                                            <div className="mda-list-item-text">
                                                <h3>
                                                    <a href="#">
                                                        Improving compatibility
                                                    </a>
                                                </h3>
                                                <p>
                                                    Proin metus justo, commodo
                                                    in ultrices...
                                                </p>
                                                <small className="text-muted">
                                                    3 days ago
                                                </small>
                                            </div>
                                            <div className="float-right">
                                                <div className="pt-lg">
                                                    <em
                                                        className="icon-2x ion-checkmark-circled text-success"
                                                        tooltip="Active"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mda-list-item pl0">
                                            <div className="mda-list-item-text">
                                                <h3>
                                                    <a href="#">
                                                        Small decisions count
                                                    </a>
                                                </h3>
                                                <p>
                                                    Proin metus justo, commodo
                                                    in ultrices...
                                                </p>
                                                <small className="text-muted">
                                                    3 days ago
                                                </small>
                                            </div>
                                            <div className="float-right">
                                                <div className="pt-lg">
                                                    <em
                                                        className="icon-2x ion-minus-circled text-warning"
                                                        tooltip="Pending"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <UncontrolledDropdown className="float-right">
                                        <DropdownToggle
                                            tag="button"
                                            className="btn btn-secondary btn-flat btn-flat-icon"
                                        >
                                            <em className="ion-android-more-vertical" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Action 1
                                            </DropdownItem>
                                            <DropdownItem>
                                                Action 2
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <h5 className="m-0">Contacts</h5>
                                </div>
                                <div className="mda-list">
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img"
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
                                            className="mda-list-item-img"
                                            src="img/user/02.jpg"
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
                                            className="mda-list-item-img"
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
                                            className="mda-list-item-img"
                                            src="img/user/04.jpg"
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
                                <div className="cardbox-body pv0 text-right">
                                    <a
                                        className="btn btn-flat btn-info"
                                        href="#"
                                    >
                                        View all
                                    </a>
                                </div>
                                <div className="cardbox-divider" />
                                <h5 className="cardbox-heading">Activity</h5>
                                <div className="cardbox-body pb0">
                                    <p className="float-left mr">
                                        <em className="ion-record text-info" />
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="mr-sm">
                                                Added
                                            </strong>
                                            <span className="mr-sm">
                                                a new issue
                                            </span>
                                            <a href="#">#5478</a>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>an hour ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body pb0">
                                    <p className="float-left mr">
                                        <em className="ion-record text-danger" />
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="mr-sm">
                                                Commented
                                            </strong>
                                            <span className="mr-sm">
                                                {" "}
                                                on the project
                                            </span>
                                            <a href="#">Material</a>
                                        </p>
                                        <p className="bl pl">
                                            <i>That's awesome!</i>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>2 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body pb0">
                                    <p className="float-left mr">
                                        <em className="ion-record text-success" />
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="mr-sm">
                                                Completed
                                            </strong>
                                            <span>
                                                {" "}
                                                all tasks asigned this week
                                            </span>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>3 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body pb0">
                                    <p className="float-left mr">
                                        <em className="ion-record text-info" />
                                    </p>
                                    <div className="oh">
                                        <p>
                                            <strong className="mr-sm">
                                                Published
                                            </strong>
                                            <span className="mr-sm">
                                                {" "}
                                                new photos on the album
                                            </span>
                                            <a href="#">WorldTrip</a>
                                        </p>
                                        <p>
                                            <a href="#">
                                                <img
                                                    className="mr-sm thumb48"
                                                    src="img/pic4.jpg"
                                                    alt="Pic"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    className="mr-sm thumb48"
                                                    src="img/pic5.jpg"
                                                    alt="Pic"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    className="mr-sm thumb48"
                                                    src="img/pic6.jpg"
                                                    alt="Pic"
                                                />
                                            </a>
                                        </p>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <em className="ion-android-time mr-sm" />
                                                <span>4 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardbox-body">
                                    <div className="clearfix">
                                        <p className="float-left mr">
                                            <em className="ion-record text-primary" />
                                        </p>
                                        <div className="oh">
                                            <p>
                                                <strong className="mr-sm">
                                                    Following
                                                </strong>
                                                <span className="mr-sm">
                                                    Jane Kuhn
                                                </span>
                                            </p>
                                            <p>
                                                <span className="image-list">
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src="img/user/03.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src="img/user/04.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src="img/user/05.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src="img/user/06.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                    <a href="#">
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src="img/user/07.jpg"
                                                            alt="User"
                                                        />
                                                    </a>
                                                    <strong>
                                                        <a
                                                            className="ml-sm link-unstyled"
                                                            href="#"
                                                        >
                                                            +200
                                                        </a>
                                                    </strong>
                                                </span>
                                            </p>
                                            <div className="clearfix">
                                                <div className="float-left text-muted">
                                                    <em className="ion-android-time mr-sm" />
                                                    <span>yesterday</span>
                                                </div>
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

export default withHeaderTitle(Profile);
