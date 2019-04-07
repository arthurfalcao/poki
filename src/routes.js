import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './containers/app/App';
import Login from './components/login/Login';
import CardDetails from './components/cards/CardDetails';
import Register from './components/register/Register';
import DeckDetails from './components/decks/DeckDetails';
import Decks from './components/decks/Decks';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/card/:id" component={CardDetails} />
      <Route path="/deck/:id" component={DeckDetails} />
      <Route path="/decks" component={Decks} />
      <Route path="*" component={App} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
