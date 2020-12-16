import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import ClientTable from '../../components/Table/ClientsTable'

const ClientsContainer = () => {
  return (
    <div>
      <SideDrawer />
      <ClientTable />
    </div>
  );
}

export default ClientsContainer;
