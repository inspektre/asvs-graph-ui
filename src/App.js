import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Architecture from './Architecture';
import Home from './home';


export default function App() {

  return (
    <Router>
      
      <Switch>
          
          <Route exact path="/Architecture">
              <Architecture />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
       </Switch> 
    </Router>
  );
};
