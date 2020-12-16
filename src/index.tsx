import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'

import App from './containers/App/App';
import ClientsContainer from './containers/ClientsContainer/ClientsContainer';
import UsersContainer from './containers/UsersContainer/UsersContainer';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/clients" component={ClientsContainer} />
      <Route path="/users" component={UsersContainer} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
