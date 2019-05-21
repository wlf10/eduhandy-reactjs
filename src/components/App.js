import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import Dashboard from 'routers/Dashboard';
import Subjects from 'routers/Subjects';
import Educations from 'routers/Educations';

import rootReducer from 'store';

import { fetchAllSubjects } from 'store/subjects/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllSubjects());

const App = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/educations' component={Educations} />
            <Route path='/subjects' component={Subjects} />
          </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>

export default App;
