import { connect } from 'react-redux';

import Schedule from '../component/Schedule';

const mapStateToProps = function(state) {
  return {
    schedule: state.schedule
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);