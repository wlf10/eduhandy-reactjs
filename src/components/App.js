import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import Dashboard from 'routers/Dashboard';
import Subjects from 'routers/Subjects';
import Educations from 'routers/Educations';

import rootReducer from '../store';

const store = createStore(rootReducer);

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/educations' component={Educations} />
            <Route path='/subjects' component={Subjects} />
          </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>

export default App;
