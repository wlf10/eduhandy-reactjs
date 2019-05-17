import React from 'react';

import Drawer from '@material-ui/core/Drawer';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      open: true
    };
  };

  render() {
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={this.state.open}
      >
        Sidebar
      </Drawer>
    )
  }
}

export default Sidebar;
