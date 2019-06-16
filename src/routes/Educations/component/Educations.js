import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const Educations = ({ classes, educations }) => {
  return (
    <Fragment>
      <TextField
        id="standard-name"
        label="Название учебного заведения"
        margin="normal"
        fullWidth
      />
    </Fragment>
  );
}

Educations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Educations;
