import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

export class Main extends React.Component{
  render(){
    return(

  <Router>
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/roster' component={Roster} />
      <Route path='/schedule' component={Schedule} />
    </Switch>
  </div>
  </Router>
);
}
}

export default Main
