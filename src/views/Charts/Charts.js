import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Flot from './Flot.js';
import Radial from './Radial.js';
import ChartJS from './ChartJS.js';

const Charts = props => (
    <Switch>

        <Route path="/charts/flot" component={Flot}/>
        <Route path="/charts/radial" component={Radial}/>
        <Route path="/charts/chartjs" component={ChartJS}/>

        <Redirect to="/charts/flot"/>

    </Switch>
)

export default Charts;
