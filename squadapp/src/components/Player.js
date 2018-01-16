import React from 'react';
import PlayerAPI from '../api';
import {BrowserRouter as Router, Link } from 'react-router-dom';

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
  <div >
    <div class="text-center">
      <h1>{player.name} (#{player.number})</h1>
      <h2>Playing Style: {player.style}</h2>
      
    </div>
	<h3><Link to='/roster'>Back</Link></h3>
  </div>
  )
}

export default Player
