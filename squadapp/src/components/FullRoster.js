import React from 'react'
import PlayerAPI from '../api'
import {BrowserRouter as Router, Link } from 'react-router-dom'

export class FullRoster extends React.Component{
  render(){
    return(
  <div class="text-center">
  <br/>
  <br/>
  <h2>Indian Team for 2nd Test</h2>
  <br/>
    <ol>
      {
        PlayerAPI.all().map(p => (
		<h3>
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
		  </h3>
        ))
      }
    </ol>
  </div>
);
}
}

export default FullRoster
