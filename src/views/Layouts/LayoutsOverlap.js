import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class LayoutsOverlap extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Layout Overlap');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-overlap bg-indigo-500">
                    <div className="container container-md">
                        <h2>Proin suscipit porta diam id mollis.</h2>
                    </div>
                </div>
                <div className="container container-md">
                    <div className="cardbox">
                        <div className="cardbox-body reader-block">
                            <h3>Cras in nisl odio.</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer sit amet vulputate
                                mauris. Maecenas tincidunt tempus sapien id
                                ultrices. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus mus.
                                In lacinia tellus vitae nisl consectetur
                                pellentesque. Nulla facilisi. Suspendisse non
                                tortor in quam tincidunt sagittis ac id dui.
                                Mauris eleifend, libero nec cursus lacinia,
                                tellus est pharetra orci, et pretium urna felis
                                eget neque. Pellentesque ut diam velit, eget
                                porttitor risus.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(LayoutsOverlap);
