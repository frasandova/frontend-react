import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Bootstrapui from './Bootstrapui';
import Buttons from './Buttons';
import Colors from './Colors';
import Grid from './Grid';
import GridMasonry from './GridMasonry';
import Icons from './Icons';
import Lists from './Lists';
import Spinners from './Spinners';
import Sweetalert from './Sweetalert';
import Typography from './Typography';
import Utilities from './Utilities';
import Whiteframes from './Whiteframes';
import Toastify from './Toastify';


const Elements = props => (
    <Switch>

        <Route path="/elements/colors" component={Colors} />
        <Route path="/elements/whiteframes" component={Whiteframes} />
        <Route path="/elements/lists" component={Lists} />
        <Route path="/elements/sweetalert" component={Sweetalert} />
        <Route path="/elements/spinners" component={Spinners} />
        <Route path="/elements/grid" component={Grid} />
        <Route path="/elements/gridmasonry" component={GridMasonry} />
        <Route path="/elements/typography" component={Typography} />
        <Route path="/elements/utilities" component={Utilities} />
        <Route path="/elements/icons" component={Icons} />
        <Route path="/elements/buttons" component={Buttons} />
        <Route path="/elements/bootstrap" component={Bootstrapui} />
        <Route path="/elements/toastify" component={Toastify} />

        <Redirect to="/elements/colors"/>

    </Switch>
)

export default Elements;
