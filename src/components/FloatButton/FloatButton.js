import React from "react";

// Material Floating Button
import "ng-material-floating-button/mfb/dist/mfb.css";
import "./FloatButton.scss";

const FloatButton = props => (
    <div className="floatbutton" {...props}>
        <ul className="mfb-component--br mfb-zoomin">
            <li className="mfb-component__wrap">
                <div className="mfb-component__button--main">
                    <i className="mfb-component__main-icon--resting ion-edit" />
                    <i className="mfb-component__main-icon--active ion-edit" />
                </div>
                <ul className="mfb-component__list" />
            </li>
        </ul>
    </div>
);

export default FloatButton;
