import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';


const Sidebar = ({ isOpen, closeSidebar }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
      open={isOpen}
    >
        <div className={classes.toolbar}>
          <IconButton onClick={ closeSidebar }>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Dash" component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dash" />
          </ListItem>
          <ListItem button key="Расписание"  component={Link} to="/schedule">
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Расписание" />
          </ListItem>
          <ListItem button key="Преподаватели" component={Link} to="/members">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Преподаватели" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Настройки"  component={Link} to="/settings">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Настройки" />
            </ListItem>
        </List>
      </Drawer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func,
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
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

const mapStateToProps = function(state) {
  return {
    isOpen: state.ui.isOpenSidebar
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    closeSidebar: () => dispatch({ type: 'CLOSE_SIDEBAR' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
