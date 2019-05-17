import { withTheme } from '@material-ui/core/styles';
import Sidebar from './Sidebar';

import { compose }  from 'recompose';
import { withRouter } from "react-router-dom";

export default compose(
  withRouter,
  withTheme()
)(Sidebar);
