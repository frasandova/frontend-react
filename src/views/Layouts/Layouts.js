import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LayoutsBoxed from './LayoutsBoxed';
import LayoutsColumns from './LayoutsColumns';
import LayoutsContainers from './LayoutsContainers';
import LayoutsOverlap from './LayoutsOverlap';
import LayoutsTabs from './LayoutsTabs';

const Layouts = props => (
    <Switch>

        <Route path="/layouts/boxed" component={LayoutsBoxed}/>
        <Route path="/layouts/columns" component={LayoutsColumns}/>
        <Route path="/layouts/containers" component={LayoutsContainers}/>
        <Route path="/layouts/overlap" component={LayoutsOverlap}/>
        <Route path="/layouts/tabs" component={LayoutsTabs}/>

        <Redirect to="/layouts/boxed"/>

    </Switch>
)

export default Layouts;
