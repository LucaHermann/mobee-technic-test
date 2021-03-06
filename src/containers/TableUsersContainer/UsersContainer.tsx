import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import UsersTable from '../../components/Table/UsersTable'

const UsersContainer = () => {
  return (
    <div>
      <SideDrawer />
      <UsersTable />
    </div>
  );
}

export default UsersContainer;
