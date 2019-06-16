import { connect } from 'react-redux';

import Rooms from '../component/Rooms';

const mapStateToProps = function(state) {
  return {
    rooms: state.rooms
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);