import React, { Component } from 'react';
import Player from './Player';
import LifeMeter from './LifeMeter';
import Critic from './Critic';

export default class Field extends Component {

  // If the turn is true, is player 1 turn,
  // if turn is false, it will be player 2 turn.

  changeTurn = () => {
    if(this.state.turn)
      this.setState({turn: !turn})
  }

  render = () => (
    <div className="Field" name="asd">
      <div className="Field-container" onClick={this.handleClick}>
        <Critic />
        <Player name="Player-1" number="1"/>
        <Player name="Player-2" number="2"/>
        <LifeMeter
          number="1"
          lifePoints={this.props.player2Life}
          turn={false}
        />
        <LifeMeter
          number="2"
          lifePoints={this.props.player1Life}
          turn={true}
        />
        {/* <LifeMeter number="2" lifePoints={props.player2Life}/> */}
      </div>
    </div>
  )
}