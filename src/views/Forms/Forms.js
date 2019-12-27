import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Classic from './Classic.js';
import Validation from './Validation.js';
import Advanced from './Advanced.js';
import Material from './Material.js';
import Editor from './Editor.js';
import Dropzone from './Dropzone.js';

const Forms = props => (
    <Switch>

        <Route path="/forms/classic" component={Classic}/>
        <Route path="/forms/validation" component={Validation}/>
        <Route path="/forms/advanced" component={Advanced}/>
        <Route path="/forms/material" component={Material}/>
        <Route path="/forms/editors" component={Editor}/>
        <Route path="/forms/dropzone" component={Dropzone}/>

        <Redirect to="/forms/classic"/>

    </Switch>
)

export default Forms;
