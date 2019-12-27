import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Popover,
    PopoverHeader,
    PopoverBody,
    Tooltip,
    Progress,
    Jumbotron,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

const items = [
    {
        src: "img/pic1.jpg",
        altText: "Slide 1",
        caption: "Slide 1"
    },
    {
        src: "img/pic2.jpg",
        altText: "Slide 2",
        caption: "Slide 2"
    },
    {
        src: "img/pic3.jpg",
        altText: "Slide 3",
        caption: "Slide 3"
    }
];

// example component to show popovers
class PopoverItem extends Component {
    state = { popoverOpen: false };
    toggle = () =>
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    render() {
        return (
            <span>
                <Button
                    className="mr-1"
                    color="secondary"
                    id={"Popover-" + this.props.id}
                    onClick={this.toggle}
                >
                    {this.props.item.text}
                </Button>
                <Popover
                    placement={this.props.item.placement}
                    isOpen={this.state.popoverOpen}
                    target={"Popover-" + this.props.id}
                    toggle={this.toggle}
                >
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>
                        Proin posuere gravida ipsum, a pretium augue commodo
                        eget. Fusce pellentesque congue justo.
                    </PopoverBody>
                </Popover>
            </span>
        );
    }
}

// example component to show tooltip
class TooltipItem extends Component {
    // static propTypes { content: PropTypes.string }
    state = {
        _id:
            "id4tooltip_" +
            new Date().getUTCMilliseconds() +
            (Math.floor(Math.random() * 10) + 1),
        tooltipOpen: false
    };
    toggle = e => this.setState({ tooltipOpen: !this.state.tooltipOpen });
    render() {
        return [
            <Tooltip
                {...this.props}
                isOpen={this.state.tooltipOpen}
                toggle={this.toggle}
                target={this.state._id}
                key="1"
            >
                {this.props.content}
            </Tooltip>,
            React.cloneElement(React.Children.only(this.props.children), {
                id: this.state._id,
                key: "2"
            })
        ];
    }
}

class BootstrapUI extends Component {
    state = {
        modal: false,
        activeIndex: 0
    };

    constructor(props, context) {
        super(props, context);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentWillMount() {
        this.props.setHeaderTitle('BootstrapUI');
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    // Carousel
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === items.length - 1
                ? 0
                : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === 0
                ? items.length - 1
                : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const PLACEMENTS = [
            { placement: "top", text: "Top" },
            { placement: "bottom", text: "Bottom" },
            { placement: "left", text: "Left" },
            { placement: "right", text: "Right" }
        ];

        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption
                        captionText={item.caption}
                        captionHeader={item.caption}
                    />
                </CarouselItem>
            );
        });

        return (
            <section className="section-container">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb-lead">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <span>Bootstrap</span>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-xl-12 col-xs-12">
                            <Jumbotron>
                                <div className="container">
                                    <h1>Bootstrap Jumbotron</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit.
                                        Vestibulum tincidunt est vitae ultrices
                                        accumsan. Aliquam ornare lacus
                                        adipiscing.
                                    </p>
                                    <p>
                                        <a
                                            className="btn btn-primary btn-lg"
                                            href="#"
                                            role="button"
                                        >
                                            Learn more
                                        </a>
                                    </p>
                                </div>
                            </Jumbotron>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    Alert Styles
                                </div>
                                <div className="cardbox-body">
                                    <Alert color="primary">
                                        This is a primary alert — check it out!
                                    </Alert>
                                    <Alert color="secondary">
                                        This is a secondary alert — check it
                                        out!
                                    </Alert>
                                    <Alert color="success">
                                        This is a success alert — check it out!
                                    </Alert>
                                    <Alert color="danger">
                                        This is a danger alert — check it out!
                                    </Alert>
                                    <Alert color="warning">
                                        This is a warning alert — check it out!
                                    </Alert>
                                    <Alert color="info">
                                        This is a info alert — check it out!
                                    </Alert>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Modals</div>
                                <div className="cardbox-body">
                                    {/* Button trigger modal */}
                                    <Button
                                        color="primary"
                                        onClick={this.toggleModal}
                                    >
                                        Open Modal Example
                                    </Button>
                                    <Modal
                                        isOpen={this.state.modal}
                                        toggle={this.toggleModal}
                                    >
                                        <ModalHeader toggle={this.toggleModal}>
                                            Modal title
                                        </ModalHeader>
                                        <ModalBody>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button
                                                color="primary"
                                                onClick={this.toggleModal}
                                            >
                                                Do Something
                                            </Button>{" "}
                                            <Button
                                                color="secondary"
                                                onClick={this.toggleModal}
                                            >
                                                Cancel
                                            </Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-heading">Popovers</div>
                                <div className="cardbox-body">
                                    {PLACEMENTS.map((popover, i) => (
                                        <PopoverItem
                                            key={i}
                                            item={popover}
                                            id={i}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-heading">Tooltips</div>
                                <div className="cardbox-body">
                                    {PLACEMENTS.map((item, i) => (
                                        <TooltipItem
                                            id={`tooltip-${i}}`}
                                            key={i}
                                            placement={item.placement}
                                            content={`Tooltip on ${item.text}`}
                                        >
                                            <Button>Tooltip {item.text}</Button>
                                        </TooltipItem>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">Carousel</div>
                                <div className="cardbox-body">
                                    <Carousel
                                        activeIndex={activeIndex}
                                        next={this.next}
                                        previous={this.previous}
                                    >
                                        <CarouselIndicators
                                            items={items}
                                            activeIndex={activeIndex}
                                            onClickHandler={this.goToIndex}
                                        />
                                        {slides}
                                        <CarouselControl
                                            direction="prev"
                                            directionText="Previous"
                                            onClickHandler={this.previous}
                                        />
                                        <CarouselControl
                                            direction="next"
                                            directionText="Next"
                                            onClickHandler={this.next}
                                        />
                                    </Carousel>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    List Group
                                </div>
                                <div className="cardbox-body">
                                    <ListGroup>
                                        <ListGroupItem active>
                                            List group item
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            List group item
                                        </ListGroupItem>
                                        <ListGroupItem disabled>
                                            List group item
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    Progress Bar
                                </div>
                                <div className="cardbox-body">
                                    <Progress className="mb-2" value={2 * 5} />
                                    <Progress
                                        className="mb-2"
                                        color="success"
                                        value="25"
                                    />
                                    <Progress
                                        className="mb-2"
                                        color="info"
                                        value={50}
                                    />
                                    <Progress
                                        className="mb-2"
                                        color="warning"
                                        value={75}
                                    />
                                    <Progress
                                        className="mb-2"
                                        color="danger"
                                        value="100"
                                    />
                                </div>
                                <div className="cardbox-body">
                                    <Progress
                                        className="mb-2"
                                        striped
                                        value={2 * 5}
                                    />
                                    <Progress
                                        className="mb-2"
                                        striped
                                        color="success"
                                        value="25"
                                    />
                                    <Progress
                                        className="mb-2"
                                        striped
                                        color="info"
                                        value={50}
                                    />
                                    <Progress className="mb-2" multi>
                                        <Progress striped bar value="10" />
                                        <Progress
                                            striped
                                            bar
                                            color="success"
                                            value="30"
                                        />
                                        <Progress
                                            striped
                                            bar
                                            color="warning"
                                            value="20"
                                        />
                                        <Progress
                                            striped
                                            bar
                                            color="danger"
                                            value="20"
                                        />
                                    </Progress>
                                </div>
                                <div className="cardbox-body">
                                    <div className="text-center">Plain</div>
                                    <Progress multi>
                                        <Progress bar value="15" />
                                        <Progress
                                            bar
                                            color="success"
                                            value="20"
                                        />
                                        <Progress bar color="info" value="25" />
                                        <Progress
                                            bar
                                            color="warning"
                                            value="20"
                                        />
                                        <Progress
                                            bar
                                            color="danger"
                                            value="15"
                                        />
                                    </Progress>
                                    <div className="text-center">
                                        With Labels
                                    </div>
                                    <Progress multi>
                                        <Progress bar value="15">
                                            Meh
                                        </Progress>
                                        <Progress
                                            bar
                                            color="success"
                                            value="35"
                                        >
                                            Wow!
                                        </Progress>
                                        <Progress
                                            bar
                                            color="warning"
                                            value="25"
                                        >
                                            25%
                                        </Progress>
                                        <Progress bar color="danger" value="25">
                                            LOOK OUT!!
                                        </Progress>
                                    </Progress>
                                    <div className="text-center">
                                        Stripes and Animations
                                    </div>
                                    <Progress multi>
                                        <Progress bar striped value="15">
                                            Stripes
                                        </Progress>
                                        <Progress
                                            bar
                                            animated
                                            color="success"
                                            value="30"
                                        >
                                            Animated Stripes
                                        </Progress>
                                        <Progress bar color="info" value="25">
                                            Plain
                                        </Progress>
                                    </Progress>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="page-header">Card Styles</h4>
                    <div className="row">
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card card-default mb"
                                id="cardDemo7"
                            >
                                <div className="card-header">Default Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card mb bg-primary card-inverse"
                                id="cardDemo8"
                            >
                                <div className="card-header">Primary Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card mb bg-success card-inverse"
                                id="cardDemo9"
                            >
                                <div className="card-header">Success Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card mb bg-info card-inverse"
                                id="cardDemo10"
                            >
                                <div className="card-header">Info Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card mb bg-warning card-inverse"
                                id="cardDemo11"
                            >
                                <div className="card-header">Warning Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xs-12">
                            <div
                                className="card mb bg-danger card-inverse"
                                id="cardDemo12"
                            >
                                <div className="card-header">Danger Card</div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum tincidunt
                                        est vitae ultrices accumsan. Aliquam
                                        ornare lacus adipiscing, posuere lectus
                                        et, fringilla augue.
                                    </p>
                                </div>
                                <div className="card-footer">Card Footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(BootstrapUI);
