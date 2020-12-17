import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateClient from '../../components/CreateClient/CreateClient';

const ManageClientContainer = () => {
  return (
    <div>
      <SideDrawer />
      <CreateClient />
    </div>
  );
}

export default ManageClientContainer;
