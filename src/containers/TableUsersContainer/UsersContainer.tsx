import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import UsersTable from '../../components/Table/UsersTable'
import CreateUser from '../../components/CreateUser/CreateUser';

const UsersContainer = () => {
  return (
    <div>
      <SideDrawer />
      <UsersTable />
      <CreateUser />
    </div>
  );
}

export default UsersContainer;
