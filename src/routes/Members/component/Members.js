import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Table from 'components/Table';

const Members = ({ classes, members }) => {
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Table
        classes={classes}
        columns={members.columns}
        data={members.data}
        title="Преподаватели"
      />
    </React.Fragment>
  );
}

Members.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Members;
