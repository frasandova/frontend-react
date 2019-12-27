import 'core-js/es6/string';
import 'core-js/es6/array';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/object';
import 'core-js/es6/promise';
import 'core-js/es7/object';
import 'core-js/es7/array';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './i18n';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
