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
import CreateUserContainer from './containers/CreateUserContainer/CreateUserContainer';
import CreateClientContainer from './containers/CreateClientContainer/CreateClientContainer';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/clients" component={ClientsContainer} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/CreateClient" component={CreateClientContainer} />
      <Route path="/CreateUser" component={CreateUserContainer} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
