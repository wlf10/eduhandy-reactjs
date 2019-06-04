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
import Schedule from 'routes/Schedule';
import Correct from 'routes/Correct';

import Settings from 'routes/Settings';
import Subjects from 'routes/Subjects';
import Members from 'routes/Members';
import Educations from 'routes/Educations';

import rootReducer from 'store';

import { fetchAllSubjects } from 'store/subjects/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createMuiTheme({...themes.default, ...overrides});

store.dispatch(fetchAllSubjects());

const drawerWidth = 260;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div style={{display: "flex"}}>
          <Header classes={useStyles()} />
          <Sidebar classes={useStyles()} />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/correct' component={Correct} />

            <Route path='/settings' component={Settings} />
            <Route path='/educations' component={Educations} />
            <Route path='/members' component={Members} />
            <Route path='/subjects' component={Subjects} />

          </Switch>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  </Provider>

export default App;
