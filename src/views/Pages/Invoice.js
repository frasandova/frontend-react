import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Invoice extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Invoice');
    }

    render() {
        return (
            <section className="section-container">
                <div className="container container-fluid">
                    <div className="cardbox">
                        <div className="cardbox-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="m0">Centric Inc.</h3>
                                    <small className="text-muted">
                                        Nulla viverra dignissim metus ac
                                        placerat
                                    </small>
                                </div>
                                <div className="col-sm-6 text-sm-right">
                                    <h5 className="mv">Invoice no. #2456544</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-2">
                                    <h4 className="m0">Deliver to:</h4>
                                </div>
                                <div className="col-lg-10">
                                    <address>
                                        <strong>Twitter, Inc.</strong>
                                        <br /> 1355 Market Street, Suite 900
                                        <br /> San Francisco, CA 94103
                                        <br />
                                        <abbr title="Phone">P:</abbr> (123)
                                        456-7890
                                    </address>
                                    <address className="mb0">
                                        <strong>Full Name</strong>
                                        <br />
                                        <a href="mailto:#">
                                            first.last@example.com
                                        </a>
                                    </address>
                                </div>
                            </div>
                            <div className="mv-lg" />
                            <div className="table-responsive mv-lg">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Item #</th>
                                            <th>Description</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th className="text-right">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1001</td>
                                            <td>Iphone 5s - 64Gb</td>
                                            <td>3</td>
                                            <td>$ 200</td>
                                            <td className="text-right">
                                                $ 600
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2002</td>
                                            <td>Iphone 6s - 128Gb</td>
                                            <td>5</td>
                                            <td>$ 500</td>
                                            <td className="text-right">
                                                $ 2500
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3010</td>
                                            <td>Ipad 11z - 512Gb</td>
                                            <td>1</td>
                                            <td>$ 650</td>
                                            <td className="text-right">
                                                $ 650
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3009</td>
                                            <td>iMac ProRetina 17</td>
                                            <td>6</td>
                                            <td>$ 1100</td>
                                            <td className="text-right">
                                                $ 6600
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        <strong>
                                            Bottom words for this invoice
                                        </strong>
                                    </p>
                                    <p>
                                        <small>
                                            Nulla egestas faucibus tincidunt.
                                            Praesent non nulla et ligula luctus
                                            mattis eget at lacus. Pellentesque
                                            convallis mauris eu elit imperdiet
                                            quis eleifend quam aliquet.
                                            Suspendisse vehicula, magna non
                                            tristique tincidunt, massa nisi
                                            luctus tellus, vel laoreet sem
                                            lectus ut nibh. Vestibulum purus
                                            ipsum.
                                        </small>
                                    </p>
                                    <hr className="d-sm-none" />
                                </div>
                                <div className="col-lg-1 col-xl-3" />
                                <div className="col-lg-5 col-xl-3 text-right">
                                    <p className="clearfix">
                                        <strong className="float-left">
                                            Sub Total:
                                        </strong>
                                        <span className="float-right">
                                            10300.00
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <strong className="float-left">
                                            Promo code:
                                        </strong>
                                        <span className="float-right">
                                            ABC-XYZ
                                        </span>
                                    </p>
                                    <p className="clearfix">
                                        <strong className="float-left">
                                            Tax (10%):
                                        </strong>
                                        <span className="float-right">
                                            1030.00
                                        </span>
                                    </p>
                                    <hr />
                                    <h3 className="m0 text-right">
                                        USD 11330.00
                                    </h3>
                                </div>
                            </div>
                            <hr />
                            <div className="clearfix">
                                <button
                                    className="btn btn-info float-left mr"
                                    type="button"
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-secondary float-left"
                                    type="button"
                                >
                                    Print
                                </button>
                                <button
                                    className="btn btn-success float-right"
                                    type="button"
                                >
                                    Send Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Invoice);
