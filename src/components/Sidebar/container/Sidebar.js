import { connect } from 'react-redux';

import Sidebar from '../component/Sidebar';

const mapStateToProps = function(state) {
    return {
      isOpen: state.ui.isOpenSidebar
    }
  }
  
  const mapDispatchToProps = function(dispatch) {
    return {
      closeSidebar: () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);