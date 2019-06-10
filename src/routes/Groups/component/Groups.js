import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';

const Groups = ({ classes, groups }) => {
  return (
    <Fragment>
      <div className={classes.toolbar} />
      <Table
        classes={classes}
        columns={groups.columns}
        data={groups.data}
        title="Группы"
      />
    </Fragment>
  );
}

Groups.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Groups;
