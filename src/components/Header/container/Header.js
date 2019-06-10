import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Header from '../component/Header';
import { OPEN_SIDEBAR } from 'store/ui/constants';

const mapStateToProps = function(state) {
  return {
    isOpenSidebar: state.ui.isOpenSidebar
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    openSidebar: () => dispatch({ type: OPEN_SIDEBAR }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);