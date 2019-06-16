import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';

const Members = ({ classes, members }) => {
  return (
    <Fragment>
      <Table
        classes={classes}
        columns={members.columns}
        data={members.data}
        title="Преподаватели"
      />
    </Fragment>
  );
}

Members.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Members;
