import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router, withRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Roster from './components/Roster';
import Schedule from './components/Schedule';

const App = () => (
  <Router>
  <div>
  <div className="row">
  <div className="col-md-4">

    <Link to='/'><h3>Home</h3></Link>

      </div>
      <div className="col-md-4">

  <Link to='/roster'><h3>Roster</h3></Link>

      </div>
      <div className="col-md-4">

    <Link to='/schedule'><h3>Schedule</h3></Link>

    </div>

  </div>

    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
      </Switch>
  </div>
  </div>
  </Router>
)

export default App
