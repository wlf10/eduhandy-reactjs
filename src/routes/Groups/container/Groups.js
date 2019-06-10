import { connect } from 'react-redux';

import Groups from '../component/Groups';

const mapStateToProps = function(state) {
  return {
    groups: state.groups
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);