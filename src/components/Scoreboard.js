// components/Scoreboard.js

import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
};

render() {
  // copying the array of players because `.sort()` **mutates!**
  const players_copy = [ ...this.state.players ];
  // sorting the players
  players_copy.sort((a, b) => b.score - a.score);
  console.log(players_copy);

  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <ul>
        {players_copy.map(this.renderPlayer)}
      </ul>
    </div>
  );
  }

  renderPlayer = player => {
    return (
      <Player
      id={player.id}
      name={player.name}
      score={player.score}
      key={player.id}
      />
    )
  }
}