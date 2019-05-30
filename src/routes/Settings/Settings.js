import React from 'react';

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

const Settings = () => {
    //const theme = useTheme();
    const classes = useStyles();
  
    return (
      <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
              Тут будет много настроек
          </Typography>
      </main>
    );
  }

  export default withTheme(Settings);
