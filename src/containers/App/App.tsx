import React from 'react';
import './App.css';

import SideDrawer from '../../components/SideDrawer/SideDrawer';

function App() {
  return (
    <div className="App">
      <SideDrawer />
      <p>Please select Clients or Users in the side drawer</p>
    </div>
  );
}

export default App;
