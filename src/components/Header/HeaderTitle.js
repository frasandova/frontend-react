import React, { Component } from "react";
import pubsub from "pubsub-js";

export function withHeaderTitle(WrappedComponent) {
    return class HeaderTitle extends Component {
        render() {
            const newProp = {
                setHeaderTitle: headerTitle => {
                    pubsub.publish("setPageTitle", headerTitle);
                }
            };
            return <WrappedComponent {...this.props} {...newProp} />;
        }
    };
}
