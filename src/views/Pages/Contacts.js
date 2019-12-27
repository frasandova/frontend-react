import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

class Contacts extends Component {
    state = {
        contacts: [
            {
                name: "Floyd Ortiz",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/02.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Nina King",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/03.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Tracy Powell",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/04.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Lynn Howell",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/05.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Pearl Ray",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/06.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Adrian Davis",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/07.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Terri Pearson",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/02.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Rachel Fernandez",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/03.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            },
            {
                name: "Abbue Holt",
                role: "Art director",
                company: "Company Inc.",
                pic: "img/user/04.jpg",
                resume:
                    "Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget."
            }
        ]
    };
    componentWillMount() {
        this.props.setHeaderTitle('Contacts');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-fluid">
                    <div className="mb-lg text-right">
                        <button className="btn btn-info" type="button">
                            <em className="ion-plus mr-sm" />
                            Add Contact
                        </button>
                    </div>
                    <div className="mb-lg">
                        <form>
                            <div className="mda-form-control">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Search Name, Job, etc..."
                                />
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        {this.state.contacts.map((c, i) => (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="cardbox">
                                    <div className="cardbox-body">
                                        <UncontrolledDropdown className="float-right d-none d-lg-block">
                                            <DropdownToggle
                                                tag="button"
                                                className="btn btn-flat btn-flat-icon ripple"
                                            >
                                                <em className="ion-android-more-vertical" />
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    Edit
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Block
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Delete
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <div className="row">
                                            <div className="col-xl-5 col-lg-10">
                                                <a href="#">
                                                    <img
                                                        className="fw img-fluid"
                                                        src={c.pic}
                                                        alt="Contact"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <h5>
                                            {c.name}
                                            <small className="text-muted">
                                                {c.role}
                                            </small>
                                        </h5>
                                        <p className="mt">
                                            <em className="ion-briefcase mr-sm" />
                                            <span>{c.company}</span>
                                        </p>
                                        <p className="mt">{c.resume}</p>
                                    </div>
                                    <div className="cardbox-footer text-center">
                                        <button
                                            className="btn btn-secondary btn-xs"
                                            type="button"
                                        >
                                            <em className="ion-email icon-lg icon-fw" />
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-xs"
                                            type="button"
                                        >
                                            <em className="ion-social-facebook icon-lg icon-fw" />
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-xs"
                                            type="button"
                                        >
                                            <em className="ion-social-twitter icon-lg icon-fw" />
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-xs"
                                            type="button"
                                        >
                                            <em className="ion-social-linkedin icon-lg icon-fw" />
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-xs"
                                            type="button"
                                        >
                                            <em className="ion-social-skype icon-lg icon-fw" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Contacts);
