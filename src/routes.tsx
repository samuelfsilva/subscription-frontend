import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Subscription from './pages/subscription';
import PostEditor from './pages/post-editor';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/subscription" component={Subscription} />
                <Route path="/post" component={PostEditor} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;