import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Blog from './Blog';
import BlogArticle from './BlogArticle';
import Contacts from './Contacts';
import Faq from './Faq';
import Gallery from './Gallery';
import Invoice from './Invoice';
import Messages from './Messages';
import Pricing from './Pricing';
import Profile from './Profile';
import Projects from './Projects';
import Search from './Search';
import Timeline from './Timeline';
import Wall from './Wall';

const Pages = props => (
    <Switch>

        <Route path="/pages/blog" component={Blog} />
        <Route path="/pages/article" component={BlogArticle} />
        <Route path="/pages/contacts" component={Contacts} />
        <Route path="/pages/faq" component={Faq} />
        <Route path="/pages/invoice" component={Invoice} />
        <Route path="/pages/pricing" component={Pricing} />
        <Route path="/pages/profile" component={Profile} />
        <Route path="/pages/projects" component={Projects} />
        <Route path="/pages/search" component={Search} />
        <Route path="/pages/timeline" component={Timeline} />
        <Route path="/pages/wall" component={Wall} />
        <Route path="/pages/messagesboard" component={Messages} />
        <Route path="/pages/gallery" component={Gallery} />

        <Redirect to="/pages/blog"/>

    </Switch>
)

export default Pages;

