import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/CalendarToday';
import EventIcon from '@material-ui/icons/Event';

import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import SubjectsIcon from '@material-ui/icons/Layers';
import GroupIcon from '@material-ui/icons/Group';
import RoomIcon from '@material-ui/icons/LocalLibrary';
import TemplateIcon from '@material-ui/icons/DateRange';


const Sidebar = ({ isOpen, isOpenSettings, closeSidebar, toggleSettings, classes }) => {
  //const classes = useStyles();

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
          <ListItem button key="schedule"  component={Link} to="/schedule">
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Расписание" />
          </ListItem>
          <ListItem button key="correct"  component={Link} to="/correct">
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Замены" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="settings" onClick={toggleSettings}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
            {isOpenSettings ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenSettings} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
              <ListItem button key="members" component={Link} to="/members">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Преподаватели" />
              </ListItem>
              <ListItem button key="subjects" component={Link} to="/subjects">
                <ListItemIcon>
                  <SubjectsIcon />
                </ListItemIcon>
                <ListItemText primary="Предметы" />
              </ListItem>
              <ListItem button key="groups" component={Link} to="/groups">
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Группы" />
              </ListItem>
              <ListItem button key="rooms" component={Link} to="/rooms">
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Кабинеты" />
              </ListItem>
              <ListItem button key="template" component={Link} to="/template">
                <ListItemIcon>
                  <TemplateIcon />
                </ListItemIcon>
                <ListItemText primary="Расписание на неделю" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isOpenSettings: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func,
  toggleSettings: PropTypes.func,
};

export default Sidebar;
