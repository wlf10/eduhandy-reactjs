import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Table';

const Rooms = ({ classes, rooms }) => {
  return (
    <Fragment>
      <Table
        classes={classes}
        columns={rooms.columns}
        data={rooms.data}
        title="Кабинеты"
      />
    </Fragment>
  );
}

Rooms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Rooms;
