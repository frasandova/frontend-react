import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Typography extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Typography');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Headings</h5>
                                    <h1>
                                        Heading 1<small>Sub-heading</small>
                                    </h1>
                                    <h2>
                                        Heading 2<small>Sub-heading</small>
                                    </h2>
                                    <h3>
                                        Heading 3<small>Sub-heading</small>
                                    </h3>
                                    <h4>
                                        Heading 4<small>Sub-heading</small>
                                    </h4>
                                    <h5>
                                        Heading 5<small>Sub-heading</small>
                                    </h5>
                                    <h6>
                                        Heading 6<small>Sub-heading</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Emphasis Classes</h5>
                                    <p className="text-muted">
                                        This is an example of muted text.
                                    </p>
                                    <p className="text-primary">
                                        This is an example of primary text.
                                    </p>
                                    <p className="text-success">
                                        This is an example of success text.
                                    </p>
                                    <p className="text-info">
                                        This is an example of info text.
                                    </p>
                                    <p className="text-warning">
                                        This is an example of warning text.
                                    </p>
                                    <p className="text-danger">
                                        This is an example of danger text.
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Abbreviations</h5>
                                    <p>
                                        The abbreviation of the word attribute
                                        is<abbr title="attribute">attr</abbr>.
                                    </p>
                                    <p>
                                        <abbr
                                            className="initialism"
                                            title="HyperText Markup Language"
                                        >
                                            HTML
                                        </abbr>
                                        is an abbreviation for a programming
                                        language.
                                    </p>
                                    <br />
                                    <h4>Addresses</h4>
                                    <address>
                                        <strong>Twitter, Inc.</strong>
                                        <br />
                                        795 Folsom Ave, Suite 600
                                        <br />
                                        San Francisco, CA 94107
                                        <br />
                                        <abbr title="Phone">P:</abbr>(123)
                                        456-7890
                                    </address>
                                    <address>
                                        <strong>Full Name</strong>
                                        <br />
                                        <a href="mailto:#">
                                            first.last@example.com
                                        </a>
                                    </address>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Description Lists</h5>
                                    <dl>
                                        <dt>Description lists</dt>
                                        <dd>
                                            A description list is perfect for
                                            defining terms.
                                        </dd>
                                        <dt>Euismod</dt>
                                        <dd>
                                            Vestibulum id ligula porta felis
                                            euismod semper eget lacinia odio
                                            sem.
                                        </dd>
                                        <dd>
                                            Donec id elit non mi porta gravida
                                            at eget metus.
                                        </dd>
                                        <dt>Malesuada porta</dt>
                                        <dd>
                                            Etiam porta sem malesuada magna
                                            mollis euismod.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Code</h5>
                                    <p>
                                        This is an example of an inline code
                                        element within body copy. Wrap inline
                                        code within a
                                        <code>
                                            <code>...</code>
                                        </code>
                                        tag.
                                    </p>
                                    <pre className="p">
                                        \nThis is an example of preformatted
                                        text.
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-xs-12">
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Paragraphs</h5>
                                    <p className="lead">
                                        This is an example of lead body copy.
                                    </p>
                                    <p>
                                        This is an example of standard paragraph
                                        text. This is an example of
                                        <a href="#">link anchor text</a>within
                                        body copy.
                                    </p>
                                    <p>
                                        <small>
                                            This is an example of small, fine
                                            print text.
                                        </small>
                                    </p>
                                    <p>
                                        <strong>
                                            This is an example of strong, bold
                                            text.
                                        </strong>
                                    </p>
                                    <p>
                                        <em>
                                            This is an example of emphasized,
                                            italic text.
                                        </em>
                                    </p>
                                    <br />
                                    <h4>Alignment Helpers</h4>
                                    <p className="text-left">
                                        Left aligned text.
                                    </p>
                                    <p className="text-center">
                                        Center aligned text.
                                    </p>
                                    <p className="text-right">
                                        Right aligned text.
                                    </p>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Blockquotes</h5>
                                    <h4>Default Blockquote</h4>
                                    <div className="blockquote">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Integer
                                            posuere erat a ante.
                                        </p>
                                    </div>
                                    <h4>Blockquote with Citation</h4>
                                    <div className="blockquote">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Integer
                                            posuere erat a ante.
                                        </p>
                                        <small>
                                            Someone famous in
                                            <cite title="Source Title">
                                                Source Title
                                            </cite>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="cardbox">
                                <div className="cardbox-body">
                                    <h5 className="mt0">Lists</h5>
                                    <h4>Unordered List</h4>
                                    <ul>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>
                                            <ul>
                                                <li>List Item</li>
                                                <li>List Item</li>
                                                <li>List Item</li>
                                            </ul>
                                        </li>
                                        <li>List Item</li>
                                    </ul>
                                    <h4>Ordered List</h4>
                                    <ol>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                    </ol>
                                    <h4>Unstyled List</h4>
                                    <ul className="list-unstyled">
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                    </ul>
                                    <h4>Inline List</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            List Item
                                        </li>
                                        <li className="list-inline-item">
                                            List Item
                                        </li>
                                        <li className="list-inline-item">
                                            List Item
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Typography);
