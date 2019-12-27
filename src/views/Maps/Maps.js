import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Datamaps from './Datamaps.js';
import GoogleMap from './GoogleMap.js';
import VectorMap from './VectorMap.js';
import GoogleMapFull from './GoogleMapFull.js';

const Maps = props => (
    <Switch>

        <Route path="/maps/google" component={GoogleMap}/>
        <Route path="/maps/datamaps" component={Datamaps}/>
        <Route path="/maps/vector" component={VectorMap}/>
        <Route path="/maps/googlefull" component={GoogleMapFull}/>

        <Redirect to="/maps/google"/>

    </Switch>
)

export default Maps;
