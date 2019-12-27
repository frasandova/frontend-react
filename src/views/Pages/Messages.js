import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import {
    Modal,
    // ModalHeader,
    ModalBody,
    ModalFooter,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import FloatButton from "../../components/FloatButton/FloatButton.js";

class Messages extends Component {
    state = {
        modalMessage: false,
        modalCompose: false,
        messages: {
            Today: [
                {
                    name: "Timmothy Terry",
                    pic: {
                        initial: "T",
                        className: "bg-blue-500"
                    },
                    excerpt:
                        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit nibh eu nisi congue dapibus."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/01.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                },
                {
                    name: "Nina Brown",
                    pic: {
                        initial: "N",
                        className: "bg-green-500"
                    },
                    excerpt:
                        "Etiam eu ipsum dui, et tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/06.jpg"
                    },
                    excerpt:
                        " Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                }
            ],
            Yesterday: [
                {
                    name: "Myrtle James",
                    pic: {
                        src: "img/user/03.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                },
                {
                    name: "Ted Vasquez",
                    pic: {
                        initial: "T",
                        className: "bg-amber-500"
                    },
                    excerpt:
                        "Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui."
                },
                {
                    name: "Lillian Snyder",
                    pic: {
                        initial: "L",
                        className: "bg-pink-500"
                    },
                    excerpt:
                        "Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui."
                },
                {
                    name: "Timmothy Terry",
                    pic: {
                        initial: "T",
                        className: "bg-blue-500"
                    },
                    excerpt:
                        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit nibh eu nisi congue dapibus."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/01.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                },
                {
                    name: "Nina Brown",
                    pic: {
                        initial: "N",
                        className: "bg-green-500"
                    },
                    excerpt:
                        "Etiam eu ipsum dui, et tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/06.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                }
            ],
            "2 days ago": [
                {
                    name: "Myrtle James",
                    pic: {
                        src: "img/user/03.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                },
                {
                    name: "Ted Vasquez",
                    pic: {
                        initial: "T",
                        className: "bg-amber-500"
                    },
                    excerpt:
                        "Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui."
                },
                {
                    name: "Lillian Snyder",
                    pic: {
                        initial: "L",
                        className: "bg-pink-500"
                    },
                    excerpt:
                        "Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui."
                },
                {
                    name: "Timmothy Terry",
                    pic: {
                        initial: "T",
                        className: "bg-blue-500"
                    },
                    excerpt:
                        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit nibh eu nisi congue dapibus."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/01.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                },
                {
                    name: "Nina Brown",
                    pic: {
                        initial: "N",
                        className: "bg-green-500"
                    },
                    excerpt:
                        "Etiam eu ipsum dui, et tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Nathan Richardson",
                    pic: {
                        src: "img/user/06.jpg"
                    },
                    excerpt:
                        "Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante."
                }
            ]
        }
    };
    componentWillMount() {
        this.props.setHeaderTitle('Messages');
    }

    toggleModalMessage = () => {
        this.setState({
            modalMessage: !this.state.modalMessage
        });
    };

    toggleModalCompose = () => {
        this.setState({
            modalCompose: !this.state.modalCompose
        });
    };

    render() {
        const DropdownActions = (
            <UncontrolledDropdown
                right="true"
                onClick={e => e.stopPropagation()}>
                <DropdownToggle
                    tag="button"
                    className="btn btn-secondary btn-flat btn-flat-icon">
                    <em className="ion-android-more-vertical" />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <em className="ion-reply icon-fw" />
                        Reply
                    </DropdownItem>
                    <DropdownItem>
                        <em className="ion-forward icon-fw" />
                        Forward
                    </DropdownItem>
                    <DropdownItem>
                        <em className="ion-trash-a icon-fw" />
                        Spam
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );

        const { messages } = this.state;

        return (
            <section className="section-container">
                <div className="container container-md">
                    {Object.keys(messages).map(time => (
                        <div key={time}>
                            <p className="ph">{time}</p>
                            <div className="cardbox">
                                <table className="table table-hover table-fixed va-middle">
                                    <tbody>
                                        {messages[time].map((m, k) => (
                                            <tr
                                                key={k}
                                                onClick={
                                                    this.toggleModalMessage
                                                }
                                                className="msg-display clickable">
                                                <td className="wd-xxs">
                                                    {m.pic.src ? (
                                                        <img
                                                            className="rounded-circle thumb32"
                                                            src={m.pic.src}
                                                            alt="user"
                                                        />
                                                    ) : (
                                                        <div
                                                            className={
                                                                "initial32 " +
                                                                m.pic.className
                                                            }>
                                                            {m.pic.initial}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="text-ellipsis wd-sm">
                                                    {m.name}
                                                </td>
                                                <td className="text-ellipsis">
                                                    {m.excerpt}
                                                </td>
                                                <td className="wd-xxs">
                                                    {DropdownActions}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                    <FloatButton onClick={this.toggleModalCompose} />

                    <Modal
                        isOpen={this.state.modalMessage}
                        toggle={this.toggleModalMessage}
                        fade={true}
                        modalClassName="modal-right modal-auto-size">
                        <div className="modal-header">
                            <div className="media m0 pv">
                                <div className="d-flex mr">
                                    <a href="#">
                                        <img
                                            className="rounded-circle thumb64"
                                            src="img/user/04.jpg"
                                            alt="User"
                                        />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h5 className="mv-sm">Patrick Brooks</h5>
                                    <span className="text-muted">
                                        patrick.brooks@mail.com
                                    </span>
                                </div>
                            </div>
                            <div className="align-items-end">
                                <div
                                    className="clickable"
                                    onClick={this.toggleModalMessage}>
                                    <sup>
                                        <em className="ion-close-round text-muted icon-2x" />
                                    </sup>
                                </div>
                            </div>
                        </div>
                        <ModalBody>
                            <UncontrolledDropdown className="float-right d-none d-lg-block">
                                <DropdownToggle
                                    tag="button"
                                    className="btn btn-secondary btn-flat btn-flat-icon">
                                    <em className="ion-android-more-vertical" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <em className="ion-star icon-fw" />
                                        Favorite
                                    </DropdownItem>
                                    <DropdownItem>
                                        <em className="ion-ios-box icon-fw" />
                                        Archive
                                    </DropdownItem>
                                    <DropdownItem>
                                        <em className="ion-trash-a icon-fw" />
                                        Discard
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <p className="text-muted">26 aug 2015 10:30 am</p>
                            <h4 className="mt">Nam vel tristique dolor.</h4>
                            <div className="reader-block">
                                <p>
                                    Praesent vel nisi nibh. Vestibulum purus
                                    ipsum, rutrum varius aliquam id, rhoncus
                                    eget neque. Curabitur sodales nisl eu enim
                                    suscipit eu faucibus dui mattis.
                                </p>
                                <p>
                                    Aenean risus nulla, aliquam sed aliquam
                                    vitae, ultricies non elit. Suspendisse nunc
                                    massa, euismod eu egestas quis, molestie sit
                                    amet mauris. Mauris eu lacus massa, vel
                                    condimentum lectus. Quisque quam justo,
                                    cursus sit amet pretium vel, viverra vel
                                    leo. Nullam lobortis consectetur hendrerit.
                                    Aenean rhoncus, est vel vestibulum
                                    tristique, ante lectus elementum augue, eu
                                    dictum turpis dui ut ipsum. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p>
                                    Pellentesque ac ligula varius nisl laoreet
                                    pretium quis quis tellus. Praesent et mauris
                                    lacus, non volutpat augue.
                                </p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className="d-flex flex-column fw">
                                <div className="p-2">Reply</div>
                                <div className="p-2">
                                    <div className="media m0 pv">
                                        <div className="d-flex mr">
                                            <a href="#">
                                                <img
                                                    className="rounded-circle thumb32"
                                                    src="img/user/01.jpg"
                                                    alt="User"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="">
                                                <div className="mda-form-group">
                                                    <div className="mda-form-control pt0">
                                                        <textarea
                                                            className="form-control"
                                                            rows="3"
                                                            aria-multiline="true"
                                                            aria-invalid="false"
                                                            placeholder="Write here..."
                                                        />
                                                        <div className="mda-form-control-line" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        type="button">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </ModalFooter>
                    </Modal>
                    <Modal
                        isOpen={this.state.modalCompose}
                        toggle={this.toggleModalCompose}
                        fade={true}>
                        <ModalBody>
                            <form action="">
                                <div className="mda-form-group">
                                    <div className="mda-form-control">
                                        <input
                                            className="form-control"
                                            rows="3"
                                            aria-multiline="true"
                                            tabIndex="0"
                                            aria-invalid="false"
                                        />
                                        <div className="mda-form-control-line" />
                                        <label>To:</label>
                                    </div>
                                </div>
                                <div className="mda-form-group">
                                    <div className="mda-form-control">
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            aria-multiline="true"
                                            tabIndex="1"
                                            aria-invalid="false"
                                        />
                                        <div className="mda-form-control-line" />
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <button
                                        className="btn btn-success"
                                        type="button">
                                        Send
                                    </button>
                                    <button
                                        className="btn btn-secondary ml-auto"
                                        type="button"
                                        onClick={this.toggleModalCompose}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Messages);
