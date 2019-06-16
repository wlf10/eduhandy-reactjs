import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from '@material-ui/styles';
import { fade, createMuiTheme, withStyles } from '@material-ui/core/styles';
import themes, { overrides } from '../themes';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import Dashboard from 'routes/Dashboard';
import Schedule from 'routes/Schedule';
import Correct from 'routes/Correct';

import Templates from 'routes/Templates';
import Subjects from 'routes/Subjects';
import Members from 'routes/Members';
import Groups from 'routes/Groups';
import Rooms from 'routes/Rooms';
import Educations from 'routes/Educations';

import rootReducer from 'store';

import { fetchAllSubjects } from 'store/subjects/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createMuiTheme({...themes.default, ...overrides});

const drawerWidth = 260;
const styles = {
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
};

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const App = ({classes}) =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div style={{display: "flex"}}>
          <Header classes={classes} />
          <Sidebar classes={classes} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <PropsRoute exact path='/' component={Dashboard} classes={classes} />
              <PropsRoute path='/schedule' component={Schedule} classes={classes} />
              <PropsRoute path='/correct' component={Correct} classes={classes} />

              <PropsRoute path='/educations' component={Educations} classes={classes} />
              <PropsRoute path='/members' component={Members} classes={classes} />
              <PropsRoute path='/subjects' component={Subjects} classes={classes} />
              <PropsRoute path='/groups' component={Groups} classes={classes} />
              <PropsRoute path='/rooms' component={Rooms} classes={classes} />
              <PropsRoute path='/templates' component={Templates} classes={classes} />
            </Switch>
          </main>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  </Provider>

export default withStyles(styles)(App);
