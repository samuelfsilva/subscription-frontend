import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Subscription from './pages/subscription';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/subscription" component={Subscription} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;