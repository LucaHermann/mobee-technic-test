import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'

import App from './containers/App/App';
import ClientsContainer from './containers/TableClientsContainer/ClientsContainer';
import UsersContainer from './containers/TableUsersContainer/UsersContainer';
import ManageUserContainer from './containers/ManageUserContainer/ManageUserContainer';
import ManageClientContainer from './containers/ManageClientContainer/ManageClientContainer';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/clients" component={ClientsContainer} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/Manage Client" component={ManageClientContainer} />
      <Route path="/Manage User" component={ManageUserContainer} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
