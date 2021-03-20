import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Subscription from './pages/subscription';
import PostEditor from './pages/post-editor';
import PostEditor2 from './pages/post-editor2';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/subscription" component={Subscription} />
                <Route path="/post" component={PostEditor} />
                <Route path="/post2" component={PostEditor2} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;