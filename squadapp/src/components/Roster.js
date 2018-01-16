import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

export class Roster extends React.Component {
render(){
  return (
    <div>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
    </div>
);
}
}
export default Roster
