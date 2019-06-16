import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import Calendar from 'components/Calendar';

const Schedule = ({classes}) => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs>
          <Calendar />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Schedule;