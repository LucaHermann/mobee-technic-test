import React from 'react';
import './App.css';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Content from '../../components/Content/Content';

function App() {
  return (
    <div className="App">
      <SideDrawer />
      <Content />
    </div>
  );
}

export default App;
