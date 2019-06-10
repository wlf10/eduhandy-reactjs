import { connect } from 'react-redux';

import Subjects from '../component/Subjects';
//import { TOGGLE_SETTINGS, CLOSE_SIDEBAR } from 'store/ui/constants';

const mapStateToProps = function(state) {
  return {
    subjects: state.subjects
  }
}

//store.dispatch(fetchAllSubjects());

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
