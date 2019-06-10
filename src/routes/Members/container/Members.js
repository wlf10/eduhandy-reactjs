import { connect } from 'react-redux';

import Members from '../component/Members';
//import { TOGGLE_SETTINGS, CLOSE_SIDEBAR } from 'store/ui/constants';

const mapStateToProps = function(state) {
  return {
    members: state.members
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);