import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class Gallery extends Component {
    state = {
        imageIndex: 0,
        isOpen: false,
        images: [
            "img/pic4.jpg",
            "img/pic1.jpg",
            "img/pic5.jpg",
            "img/pic3.jpg",
            "img/pic6.jpg",
            "img/pic2.jpg",
            "img/pic1.jpg",
            "img/pic2.jpg",
            "img/pic3.jpg",
            "img/pic6.jpg"
        ]
    };

    renderImages = () => {
        let imageIndex = -1;
        const { images } = this.state;

        return images.map(imgSrc => {
            imageIndex++;
            const currentIndex = imageIndex;
            const bgImage = {
                backgroundImage: `url(${imgSrc})`
            };
            return (
                <div className="col-xl-4 col-lg-6" key={imageIndex}>
                    <div className="cardbox b0">
                        <div
                            className="cardbox-item"
                            onClick={() =>
                                this.setState({
                                    imageIndex: currentIndex,
                                    isOpen: true
                                })
                            }
                        >
                            <div
                                className="cardbox-item-image"
                                style={bgImage}
                            />
                            <div className="cardbox-item-text bg-fade">
                                <div className="clearfix">
                                    <h5 className="mv float-left">
                                        Camera roll
                                    </h5>
                                    <h6 className="mv float-right text-light">
                                        10:20
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    componentWillMount() {
        this.props.setHeaderTitle('Gallery');
    }

    render() {
        const { imageIndex, isOpen, images } = this.state;
        return (
            <section className="section-container">
                <div className="container-fluid container-unwrap">
                    <div className="row">{this.renderImages()}</div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[imageIndex]}
                        nextSrc={images[(imageIndex + 1) % images.length]}
                        prevSrc={
                            images[
                                (imageIndex + images.length - 1) % images.length
                            ]
                        }
                        imageTitle={imageIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                imageIndex:
                                    (imageIndex + images.length - 1) %
                                    images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                imageIndex: (imageIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </section>
        );
    }
}

export default withHeaderTitle(Gallery);
