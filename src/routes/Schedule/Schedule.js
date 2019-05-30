import React from 'react';

import { withTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Calendar from 'components/Calendar';

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
      width: '100%',
      padding: theme.spacing(3),
    },
  }));

const Schedule = () => {
    const classes = useStyles();
  
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>Расписание </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Calendar />
          </Grid>
        </Grid>

        

      </main>
    );
  }

  export default withTheme(Schedule);