import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import Masonry from "masonry-layout";

import "./GridMasonry.scss";

class GridMasonry extends Component {
    state = {
        gridItems: [
            { src: "img/user/01.jpg", text: "Awesome large photo" },
            { src: "img/user/02.jpg", text: "Great user photo" },
            { src: "img/user/03.jpg", text: "Silly photo" },
            { src: "img/user/04.jpg", text: "Is this a photo?" },
            { src: "img/user/05.jpg", text: "What a photo man!" },
            { src: "img/user/02.jpg", text: "Silly photo" },
            { src: "img/user/01.jpg", text: "Weird photo" },
            { src: "img/user/04.jpg", text: "Bumpy photo" }
        ]
    };
    componentWillMount() {
        this.props.setHeaderTitle('Grid Masonry');
        this.imagePromises = this.state.gridItems.map(({src}) => this.imageLoaded(src))
    }

    componentDidMount() {
        Promise.all(this.imagePromises).then(_ => {
            // init Masonry after all images have loaded
            new Masonry(this.refs.gridElement, {
                itemSelector: ".grid-item",
                percentPosition: true,
                columnWidth: ".grid-sizer"
            });
        })
    }

    imageLoaded(url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.addEventListener("load", e => resolve(img));
            img.addEventListener("error", () => {
                reject(new Error(`Failed to load image's URL: ${url}`));
            });
            img.src = url;
        });
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-md">
                    <div className="grid" ref="gridElement">
                        <div className="grid-sizer" />
                        {this.state.gridItems.map((item, i) => (
                            <div className="grid-item" key={i}>
                                <div className="photo">
                                    <div className="photo-wrapper">
                                        <img
                                            className="img-fluid fw"
                                            src={item.src}
                                            alt="User Avatar"
                                        />
                                        <div className="photo-loader">
                                            <div className="sk-spinner sk-spinner-rotating-plane" />
                                        </div>
                                    </div>
                                    <div className="photo-description">
                                        <h3>{item.text}</h3>
                                        <p>Nice photo, eh.</p>
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

export default withHeaderTitle(GridMasonry);
