import { connect } from 'react-redux';

import Educations from '../component/Educations';

const mapStateToProps = function(state) {
  return {
    educations: state.educations
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Educations);
