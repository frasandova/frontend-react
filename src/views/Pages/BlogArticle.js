import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class BlogArticle extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Blog Article');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid bg-full" style={{backgroundImage: "url('img/pic1.jpg')"}}>
                    <div className="container container-md">
                        <div className="cardbox animated fadeInUp b0">
                            <div className="cardbox-item cardbox-media" style={{backgroundImage: "url('img/pic4.jpg')"}}>
                                <div className="cardbox-item-text bg-transparent ph">
                                    <h4>A truly relaxing moment</h4>
                                </div>
                            </div>
                            <div className="cardbox-offset">
                                <div className="cardbox-offset-item text-right">
                                    <button
                                        className="btn-raised btn btn-danger btn-circle btn-lg"
                                        type="button"
                                    >
                                        <em className="ion-ios-heart-outline" />
                                    </button>
                                </div>
                            </div>
                            <div className="cardbox-body pt0">
                                <div className="clearfix">
                                    <p className="float-left mr">
                                        <a href="#dummylink">
                                            <img
                                                className="rounded-circle thumb48"
                                                src="img/user/02.jpg"
                                                alt="User"
                                            />
                                        </a>
                                    </p>
                                    <div className="oh">
                                        <div className="mt-sm">
                                            <strong className="mr-sm">
                                                Cody Armstrong
                                            </strong>
                                        </div>
                                        <div className="clearfix">
                                            <div className="float-left text-muted">
                                                <span>a week ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container container-xs reader-block">
                                    <p>
                                        Cum sociis natoque penatibus et magnis
                                        dis parturient montes, nascetur
                                        ridiculus mus. Morbi sollicitudin, massa
                                        quis posuere mollis, turpis mi suscipit
                                        magna, ac tristique tellus arcu pretium
                                        mi. Sed quam magna, tincidunt ac
                                        fermentum eget, vestibulum id magna.
                                        Nullam felis ipsum, tempus at fermentum
                                        nec, porttitor eu libero. Curabitur
                                        porttitor fermentum dapibus.
                                    </p>
                                    <p>
                                        Praesent a rhoncus magna. Nam nec tellus
                                        tortor. Proin adipiscing, dolor faucibus
                                        ullamcorper interdum, urna justo
                                        convallis arcu, ultrices auctor enim
                                        turpis ut purus. Fusce a egestas turpis.
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Proin euismod malesuada
                                        dui ac laoreet. Donec purus leo,
                                        lobortis vel volutpat vel, dictum nec
                                        augue. Proin ullamcorper lectus ut
                                        libero blandit pretium.
                                    </p>
                                    <p className="text-center">
                                        <img
                                            className="img-thumbnail"
                                            src="img/pic5.jpg"
                                            alt="Article"
                                        />
                                    </p>
                                    <p>
                                        Cras fringilla ipsum sed elit sodales
                                        malesuada. Nam sem magna, tristique non
                                        facilisis a, porta ut elit. Vestibulum
                                        mauris nisl, dictum vitae dapibus
                                        iaculis, tempor sed libero. Ut
                                        vestibulum est eget justo facilisis
                                        ullamcorper. Pellentesque sodales
                                        aliquam lorem, eu tempor enim pretium
                                        ac. Aliquam vitae purus dolor. Etiam
                                        odio ante, placerat eu accumsan ut,
                                        consectetur vel mi. Ut eu aliquam orci.
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox-body bg-gray-lighter">
                                <form className="mt" action="">
                                    <div className="input-group mda-input-group">
                                        <div className="mda-form-group float-label">
                                            <div className="mda-form-control">
                                                <textarea
                                                    className="form-control"
                                                    rows="1"
                                                    aria-multiline="true"
                                                    aria-invalid="false"
                                                />
                                                <div className="mda-form-control-line" />
                                                <label className="m0">
                                                    Comments
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
                                <div className="mt">
                                    <div className="media">
                                        <div className="d-flex mr">
                                            <a href="#dummylink">
                                                <img
                                                    className="rounded-circle thumb48"
                                                    src="img/user/01.jpg"
                                                    alt="Post Preview"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt0 mb-sm">
                                                Joel Murray
                                                <small className="text-muted">
                                                    2 days ago
                                                </small>
                                            </h6>
                                            <div className="mb">
                                                Pellentesque mauris orci,
                                                lobortis in tristique mollis,
                                                consequat eu magna.
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-thumbsup icon-2x" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-thumbsdown icon-2x" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-android-share-alt icon-2x" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex mr">
                                            <a href="#dummylink">
                                                <img
                                                    className="rounded-circle thumb48"
                                                    src="img/user/02.jpg"
                                                    alt="Post Preview"
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt0 mb-sm">
                                                Daryl Parker
                                                <small className="text-muted">
                                                    2 days ago
                                                </small>
                                            </h6>
                                            <div className="mb">
                                                Duis elit dolor, gravida vitae
                                                varius in, viverra eu nibh. In
                                                sit amet accumsan arcu.
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-thumbsup icon-2x" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-thumbsdown icon-2x" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a
                                                        className="text-soft"
                                                        href="#dummylink"
                                                    >
                                                        <em className="ion-android-share-alt icon-2x" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="media">
                                                <div className="d-flex mr">
                                                    <a href="#dummylink">
                                                        <img
                                                            className="rounded-circle thumb48"
                                                            src="img/user/03.jpg"
                                                            alt="Post Preview"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt0 mb-sm">
                                                        Eddie Kelly
                                                        <small className="text-muted">
                                                            2 days ago
                                                        </small>
                                                    </h6>
                                                    <div className="mb">
                                                        Pellentesque habitant
                                                        morbi tristique senectus
                                                        et netus et malesuada
                                                        fames ac turpis egestas.
                                                        Nulla condimentum
                                                        viverra vestibulum.
                                                        Fusce eleifend ornare
                                                        ante at dignissim.
                                                    </div>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a
                                                                className="text-soft"
                                                                href="#dummylink"
                                                            >
                                                                <em className="ion-thumbsup icon-2x" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a
                                                                className="text-soft"
                                                                href="#dummylink"
                                                            >
                                                                <em className="ion-thumbsdown icon-2x" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a
                                                                className="text-soft"
                                                                href="#dummylink"
                                                            >
                                                                <em className="ion-android-share-alt icon-2x" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix mv-lg">
                            <h5 className="float-left">
                                <a
                                    className="btn btn-circle btn-secondary"
                                    href="#dummylink"
                                >
                                    <em className="ion-ios-arrow-thin-left icon-2x" />
                                </a>
                                <span className="ml text-white">Older</span>
                            </h5>
                            <h5 className="float-right">
                                <span className="mr text-white">Newer</span>
                                <a
                                    className="btn btn-circle btn-secondary"
                                    href="#dummylink"
                                >
                                    <em className="ion-ios-arrow-thin-right icon-2x" />
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(BlogArticle);
