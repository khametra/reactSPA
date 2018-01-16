import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Main} from './Main';
export class Header extends React.Component{
  render(){
    return (

<nav>
<Router>
    <div className="row">
    <div className="col-xs-4">

      <Link to='/'>Home</Link>

        </div>
        <div className="col-xs-4">

    <Link to='/roster'>Roster</Link>

        </div>
        <div className="col-xs-4">

      <Link to='/schedule'>Schedule</Link>

      </div>
      </div>
      </Router>
</nav>

);
}
}

export default Header
