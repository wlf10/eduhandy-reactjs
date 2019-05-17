import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import Dashboard from 'routers/Dashboard';
import Subjects from 'routers/Subjects';

const App = () =>
  <BrowserRouter>
    <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/subjects' component={Subjects} />
        </Switch>
    </Fragment>
  </BrowserRouter>

export default App;
