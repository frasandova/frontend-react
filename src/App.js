/*!
 *
 * Centric - Bootstrap Admin Template
 *
 * Version: 2.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Vendor dependencies
import './Vendor';

// App Routes
import Routes from './Routes';

import './components/Ripple/Ripple.init.js';

class App extends Component {
  render() {

    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    /* global PUBLIC_URL */
    const basename = process.env.NODE_ENV === 'development' ? '/' : (PUBLIC_URL || '/');

    return (
        <BrowserRouter basename={basename}>
            <Routes />
        </BrowserRouter>
    );

  }
}

export default App;
