import React, { Component } from 'react';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import $ from 'jquery';

import Datatable from '../../components/Tables/Datatable';

class DatatableView extends Component {

    state = {
        dtOptions1: {
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: '<em class="ion-search"></em>',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="ion-ios-arrow-right"></em>',
                    sPrevious: '<em class="ion-ios-arrow-left"></em>'
                }
            }
        },
        // Filter
        dtOptions2: {
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: '<em class="ion-search"></em>',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="ion-ios-arrow-right"></em>',
                    sPrevious: '<em class="ion-ios-arrow-left"></em>'
                }
            }
        }
    }

    componentWillMount() {
        this.props.setHeaderTitle('Datatable');
    }

    // Access to internal datatable instance for customizations
    dtInstance = dtInstance => {
        const inputSearchClass = 'datatable_input_col_search';
        const columnInputs = $('tfoot .' + inputSearchClass);
        // On input keyup trigger filtering
        columnInputs
            .keyup(function() {
                dtInstance.fnFilter(this.value, columnInputs.index(this));
            });
    }

    render() {
        return (
            <section className="section-container">
                <div className="container-fluid">
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            Zero configuration
                        </div>
                        <div className="cardbox-body">
                            <div className="table-responsive">
                                <Datatable options={this.state.dtOptions1}>
                                    <table
                                        className="table-datatable table table-striped table-hover mv-lg"
                                        id="datatable1"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Rendering engine</th>
                                                <th>Browser</th>
                                                <th>Platform(s)</th>
                                                <th className="sort-numeric">
                                                    Engine version
                                                </th>
                                                <th className="sort-alpha">
                                                    CSS grade
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="gradeX">
                                                <td>Trident</td>
                                                <td>Internet Explorer 4.0</td>
                                                <td>Win 95+</td>
                                                <td>4</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.0</td>
                                                <td>Win 95+</td>
                                                <td>5</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.5</td>
                                                <td>Win 95+</td>
                                                <td>5.5</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Trident</td>
                                                <td>Internet Explorer 6</td>
                                                <td>Win 98+</td>
                                                <td>6</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Trident</td>
                                                <td>Internet Explorer 7</td>
                                                <td>Win XP SP2+</td>
                                                <td>7</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Trident</td>
                                                <td>AOL browser (AOL desktop)</td>
                                                <td>Win XP</td>
                                                <td>6</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Firefox 1.0</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td>1.7</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Firefox 1.5</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Firefox 2.0</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Firefox 3.0</td>
                                                <td>Win 2k+ / OSX.3+</td>
                                                <td>1.9</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Camino 1.0</td>
                                                <td>OSX.2+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Camino 1.5</td>
                                                <td>OSX.3+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Netscape 7.2</td>
                                                <td>Win 95+ / Mac OS 8.6-9.2</td>
                                                <td>1.7</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Netscape Browser 8</td>
                                                <td>Win 98SE+</td>
                                                <td>1.7</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Netscape Navigator 9</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.0</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.1</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.1</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.2</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.2</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.3</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.3</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.4</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.4</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.5</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.5</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.6</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>1.6</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.7</td>
                                                <td>Win 98+ / OSX.1+</td>
                                                <td>1.7</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Mozilla 1.8</td>
                                                <td>Win 98+ / OSX.1+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Seamonkey 1.1</td>
                                                <td>Win 98+ / OSX.2+</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Gecko</td>
                                                <td>Epiphany 2.20</td>
                                                <td>Gnome</td>
                                                <td>1.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>Safari 1.2</td>
                                                <td>OSX.3</td>
                                                <td>125.5</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>Safari 1.3</td>
                                                <td>OSX.3</td>
                                                <td>312.8</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>Safari 2.0</td>
                                                <td>OSX.4+</td>
                                                <td>419.3</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>Safari 3.0</td>
                                                <td>OSX.4+</td>
                                                <td>522.1</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>OmniWeb 5.5</td>
                                                <td>OSX.4+</td>
                                                <td>420</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>iPod Touch / iPhone</td>
                                                <td>iPod</td>
                                                <td>420.1</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Webkit</td>
                                                <td>S60</td>
                                                <td>S60</td>
                                                <td>413</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 7.0</td>
                                                <td>Win 95+ / OSX.1+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 7.5</td>
                                                <td>Win 95+ / OSX.2+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 8.0</td>
                                                <td>Win 95+ / OSX.2+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 8.5</td>
                                                <td>Win 95+ / OSX.2+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 9.0</td>
                                                <td>Win 95+ / OSX.3+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 9.2</td>
                                                <td>Win 88+ / OSX.3+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera 9.5</td>
                                                <td>Win 88+ / OSX.3+</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Opera for Wii</td>
                                                <td>Wii</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Nokia N800</td>
                                                <td>N800</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Presto</td>
                                                <td>Nintendo DS browser</td>
                                                <td>Nintendo DS</td>
                                                <td>8.5</td>
                                                <td>
                                                    C/A<sup>1</sup>
                                                </td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>KHTML</td>
                                                <td>Konqureror 3.1</td>
                                                <td>KDE 3.1</td>
                                                <td>3.1</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>KHTML</td>
                                                <td>Konqureror 3.3</td>
                                                <td>KDE 3.3</td>
                                                <td>3.3</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>KHTML</td>
                                                <td>Konqureror 3.5</td>
                                                <td>KDE 3.5</td>
                                                <td>3.5</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeX">
                                                <td>Tasman</td>
                                                <td>Internet Explorer 4.5</td>
                                                <td>Mac OS 8-9</td>
                                                <td>-</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Tasman</td>
                                                <td>Internet Explorer 5.1</td>
                                                <td>Mac OS 7.6-9</td>
                                                <td>1</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Tasman</td>
                                                <td>Internet Explorer 5.2</td>
                                                <td>Mac OS 8-X</td>
                                                <td>1</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Misc</td>
                                                <td>NetFront 3.1</td>
                                                <td>Embedded devices</td>
                                                <td>-</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeA">
                                                <td>Misc</td>
                                                <td>NetFront 3.4</td>
                                                <td>Embedded devices</td>
                                                <td>-</td>
                                                <td>A</td>
                                            </tr>
                                            <tr className="gradeX">
                                                <td>Misc</td>
                                                <td>Dillo 0.8</td>
                                                <td>Embedded devices</td>
                                                <td>-</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeX">
                                                <td>Misc</td>
                                                <td>Links</td>
                                                <td>Text only</td>
                                                <td>-</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeX">
                                                <td>Misc</td>
                                                <td>Lynx</td>
                                                <td>Text only</td>
                                                <td>-</td>
                                                <td>X</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Misc</td>
                                                <td>IE Mobile</td>
                                                <td>Windows Mobile 6</td>
                                                <td>-</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeC">
                                                <td>Misc</td>
                                                <td>PSP browser</td>
                                                <td>PSP</td>
                                                <td>-</td>
                                                <td>C</td>
                                            </tr>
                                            <tr className="gradeU">
                                                <td>Other browsers</td>
                                                <td>All others</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>U</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Datatable>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="cardbox-heading">
                            Individual column searching
                        </div>
                        <div className="cardbox-body">
                            <Datatable options={this.state.dtOptions2} dtInstance={this.dtInstance}>
                                <table
                                    className="table-responsive table-datatable table table-striped table-hover mv-lg"
                                    id="datatable2"
                                >
                                    <thead>
                                        <tr>
                                            <th>Rendering engine</th>
                                            <th>Browser</th>
                                            <th>Platform</th>
                                            <th className="sort-numeric">
                                                Engine version
                                            </th>
                                            <th className="sort-alpha">
                                                CSS grade
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="gradeX">
                                            <td>Trident</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                            <td>4</td>
                                            <td>X</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>Trident</td>
                                            <td>Internet Explorer 5.0</td>
                                            <td>Win 95+</td>
                                            <td>5</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Trident</td>
                                            <td>Internet Explorer 5.5</td>
                                            <td>Win 95+</td>
                                            <td>5.5</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Trident</td>
                                            <td>Internet Explorer 6</td>
                                            <td>Win 98+</td>
                                            <td>6</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Trident</td>
                                            <td>Internet Explorer 7</td>
                                            <td>Win XP SP2+</td>
                                            <td>7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Trident</td>
                                            <td>AOL browser (AOL desktop)</td>
                                            <td>Win XP</td>
                                            <td>6</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Firefox 1.0</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Firefox 1.5</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Firefox 2.0</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Firefox 3.0</td>
                                            <td>Win 2k+ / OSX.3+</td>
                                            <td>1.9</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Camino 1.0</td>
                                            <td>OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Camino 1.5</td>
                                            <td>OSX.3+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Netscape 7.2</td>
                                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                                            <td>1.7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Netscape Browser 8</td>
                                            <td>Win 98SE+</td>
                                            <td>1.7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Netscape Navigator 9</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.0</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.1</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.1</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.2</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.2</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.3</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.3</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.4</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.4</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.5</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.5</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.6</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>1.6</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.7</td>
                                            <td>Win 98+ / OSX.1+</td>
                                            <td>1.7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Mozilla 1.8</td>
                                            <td>Win 98+ / OSX.1+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Seamonkey 1.1</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Gecko</td>
                                            <td>Epiphany 2.20</td>
                                            <td>Gnome</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>Safari 1.2</td>
                                            <td>OSX.3</td>
                                            <td>125.5</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>Safari 1.3</td>
                                            <td>OSX.3</td>
                                            <td>312.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>Safari 2.0</td>
                                            <td>OSX.4+</td>
                                            <td>419.3</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>Safari 3.0</td>
                                            <td>OSX.4+</td>
                                            <td>522.1</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>OmniWeb 5.5</td>
                                            <td>OSX.4+</td>
                                            <td>420</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>iPod Touch / iPhone</td>
                                            <td>iPod</td>
                                            <td>420.1</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Webkit</td>
                                            <td>S60</td>
                                            <td>S60</td>
                                            <td>413</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 7.0</td>
                                            <td>Win 95+ / OSX.1+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 7.5</td>
                                            <td>Win 95+ / OSX.2+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 8.0</td>
                                            <td>Win 95+ / OSX.2+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 8.5</td>
                                            <td>Win 95+ / OSX.2+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 9.0</td>
                                            <td>Win 95+ / OSX.3+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 9.2</td>
                                            <td>Win 88+ / OSX.3+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera 9.5</td>
                                            <td>Win 88+ / OSX.3+</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Opera for Wii</td>
                                            <td>Wii</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Nokia N800</td>
                                            <td>N800</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Presto</td>
                                            <td>Nintendo DS browser</td>
                                            <td>Nintendo DS</td>
                                            <td>8.5</td>
                                            <td>
                                                C/A<sup>1</sup>
                                            </td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>KHTML</td>
                                            <td>Konqureror 3.1</td>
                                            <td>KDE 3.1</td>
                                            <td>3.1</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>KHTML</td>
                                            <td>Konqureror 3.3</td>
                                            <td>KDE 3.3</td>
                                            <td>3.3</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>KHTML</td>
                                            <td>Konqureror 3.5</td>
                                            <td>KDE 3.5</td>
                                            <td>3.5</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeX">
                                            <td>Tasman</td>
                                            <td>Internet Explorer 4.5</td>
                                            <td>Mac OS 8-9</td>
                                            <td>-</td>
                                            <td>X</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>Tasman</td>
                                            <td>Internet Explorer 5.1</td>
                                            <td>Mac OS 7.6-9</td>
                                            <td>1</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>Tasman</td>
                                            <td>Internet Explorer 5.2</td>
                                            <td>Mac OS 8-X</td>
                                            <td>1</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Misc</td>
                                            <td>NetFront 3.1</td>
                                            <td>Embedded devices</td>
                                            <td>-</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td>Misc</td>
                                            <td>NetFront 3.4</td>
                                            <td>Embedded devices</td>
                                            <td>-</td>
                                            <td>A</td>
                                        </tr>
                                        <tr className="gradeX">
                                            <td>Misc</td>
                                            <td>Dillo 0.8</td>
                                            <td>Embedded devices</td>
                                            <td>-</td>
                                            <td>X</td>
                                        </tr>
                                        <tr className="gradeX">
                                            <td>Misc</td>
                                            <td>Links</td>
                                            <td>Text only</td>
                                            <td>-</td>
                                            <td>X</td>
                                        </tr>
                                        <tr className="gradeX">
                                            <td>Misc</td>
                                            <td>Lynx</td>
                                            <td>Text only</td>
                                            <td>-</td>
                                            <td>X</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>Misc</td>
                                            <td>IE Mobile</td>
                                            <td>Windows Mobile 6</td>
                                            <td>-</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td>Misc</td>
                                            <td>PSP browser</td>
                                            <td>PSP</td>
                                            <td>-</td>
                                            <td>C</td>
                                        </tr>
                                        <tr className="gradeU">
                                            <td>Other browsers</td>
                                            <td>All others</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>U</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>
                                                <div className="mda-form-control pt0">
                                                    <input
                                                        className="form-control input-sm datatable_input_col_search"
                                                        type="text"
                                                        name="filter_rendering_engine"
                                                        placeholder="Filter Rendering engine"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="mda-form-control pt0">
                                                    <input
                                                        className="form-control input-sm datatable_input_col_search"
                                                        type="text"
                                                        name="filter_browser"
                                                        placeholder="Filter Browser"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="mda-form-control pt0">
                                                    <input
                                                        className="form-control input-sm datatable_input_col_search"
                                                        type="text"
                                                        name="filter_platform"
                                                        placeholder="Filter Platform"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="mda-form-control pt0">
                                                    <input
                                                        className="form-control input-sm datatable_input_col_search"
                                                        type="text"
                                                        name="filter_engine_version"
                                                        placeholder="Filter Engine version"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                </div>
                                            </th>
                                            <th>
                                                <div className="mda-form-control pt0">
                                                    <input
                                                        className="form-control input-sm datatable_input_col_search"
                                                        type="text"
                                                        name="filter_css_grade"
                                                        placeholder="Filter CSS grade"
                                                    />
                                                    <div className="mda-form-control-line" />
                                                </div>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </Datatable>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(DatatableView);
