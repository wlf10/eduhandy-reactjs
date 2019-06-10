import React from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';

const Subjects = ({ classes, subjects }) => {
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Table
        classes={classes}
        columns={subjects.columns}
        data={subjects.data}
        title="Предметы"
      />
    </React.Fragment>
  );
}

Subjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Subjects;
