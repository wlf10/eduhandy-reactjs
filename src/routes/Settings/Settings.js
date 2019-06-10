import React from 'react';

import { withTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Settings = ({classes}) => { 
  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
            Тут будет много настроек
        </Typography>
    </main>
  );
}

export default Settings;
