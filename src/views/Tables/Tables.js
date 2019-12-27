import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Classic from './Classic.js';
import Datatable from './Datatable.js';
import Datagrid from './Datagrid.js';

const Tables = props => (
    <Switch>

        <Route path="/tables/classic" component={Classic}/>
        <Route path="/tables/datatable" component={Datatable}/>
        <Route path="/tables/datagrid" component={Datagrid}/>

        <Redirect to="/tables/classic"/>

    </Switch>
)

export default Tables;
