import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import themes, { overrides } from '../themes';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import Dashboard from 'routes/Dashboard';
import Subjects from 'routes/Subjects';
import Members from 'routes/Members';
import Educations from 'routes/Educations';
import Schedule from 'routes/Schedule';

import Settings from 'routes/Settings';

import rootReducer from 'store';

import { fetchAllSubjects } from 'store/subjects/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createMuiTheme({...themes.default, ...overrides});

store.dispatch(fetchAllSubjects());

const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div style={{display: "flex"}}>
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/educations' component={Educations} />
            <Route path='/members' component={Members} />
            <Route path='/subjects' component={Subjects} />

            <Route path='/settings' component={Settings} />
          </Switch>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  </Provider>

export default App;
