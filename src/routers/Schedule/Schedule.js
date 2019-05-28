import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import { withTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBarSpacer: theme.mixins.toolbar,
  
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
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const localizer = BigCalendar.momentLocalizer(moment)

const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
]

const Schedule = () => {
    const classes = useStyles();
  
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </main>
    );
  }

  export default withTheme(Schedule);