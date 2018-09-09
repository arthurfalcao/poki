import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login/Login';
import CardDetails from './components/cards/CardDetails';
import Register from './components/register/Register';
import DeckDetails from './components/decks/DeckDetails';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/card/:id" component={CardDetails} />
            <Route path="/deck/:id" component={DeckDetails} />
            <Route path="*" component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
