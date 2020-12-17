import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';

const ManageUserContainer = () => {
  return (
    <div>
      <SideDrawer />
      <CreateUser />
    </div>
  );
}

export default ManageUserContainer;
