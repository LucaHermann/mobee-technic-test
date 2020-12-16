import React from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import ClientTable from '../../components/Content/ClientsTable'

const ClientsContainer = () => {
  return (
    <div>
      <h1>Clients</h1>
      <SideDrawer />
      <ClientTable />
    </div>
  );
}

export default ClientsContainer;
