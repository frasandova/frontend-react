import React, { useState } from "react";
import { withHeaderTitle } from "../../components/Header/HeaderTitle";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

const classnames = cond =>
    Object.keys(cond)
        .map(k => cond[k] && k)
        .join(" ");

const LayoutsTabs = props => {
    const [activeTab, setActiveTab] = useState("1");

    props.setHeaderTitle("Layout Tabs");

    return (
        <section className="section-container">
            <Nav tabs className="nav-justified">
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: activeTab === "1"
                        })}
                        onClick={() => {
                            setActiveTab("1");
                        }}
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: activeTab === "2"
                        })}
                        onClick={() => {
                            setActiveTab("2");
                        }}
                    >
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: activeTab === "3"
                        })}
                        onClick={() => {
                            setActiveTab("3");
                        }}
                    >
                        Messages
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="text-center">
                    <h4>Home view</h4>
                </TabPane>
                <TabPane tabId="2" className="text-center">
                    <h4>Profile view</h4>
                </TabPane>
                <TabPane tabId="3" className="text-center">
                    <h4>Messages view</h4>
                </TabPane>
            </TabContent>
        </section>
    );
};

export default withHeaderTitle(LayoutsTabs);
