import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';

const CreateUserContainer = () => {
  return (
    <div>
      <SideDrawer />
      <CreateUser />
    </div>
  );
}

export default CreateUserContainer;
