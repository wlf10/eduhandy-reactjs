import { connect } from 'react-redux';

import Sidebar from '../component/Sidebar';
import { TOGGLE_SETTINGS, CLOSE_SIDEBAR } from 'store/ui/constants';

const mapStateToProps = function(state) {
  return {
    isOpen: state.ui.isOpenSidebar,
    isOpenSettings: state.ui.isOpenSettings,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    closeSidebar: () => dispatch({ type: CLOSE_SIDEBAR }),
    toggleSettings: () => dispatch({ type: TOGGLE_SETTINGS}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);