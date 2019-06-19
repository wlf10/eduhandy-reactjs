import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import TimeTable from 'components/TimeTable';

const Schedule = ({classes, schedule}) => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs>
          <TimeTable events={schedule.events}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Schedule;