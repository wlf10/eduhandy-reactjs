import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Dashboard from 'views/Dashboard';

const App = () =>
  <BrowserRouter>
    <Fragment>
        <Header />

        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>

    </Fragment>
  </BrowserRouter>

export default App;
