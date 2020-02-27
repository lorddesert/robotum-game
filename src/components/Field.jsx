import React, { Component } from 'react';
import Player from './Player';
import LifeMeter from './LifeMeter';
import Critic from './Critic';
import players from '../players/players.json';

export default class Field extends Component {

  // the turn is based in who receive damage,
  // true = recieve damage in this turn.
  state = {

    player1: {
      lifePoints: 100,
      turn: false,
      attacks: [...players[0].attacks],
      specials: [...players[0].specials],
    },
    player2: {
      lifePoints: 100,
      turn: true,
      attacks: [...players[1].attacks],
      specials: [...players[1].specials],
      bullet: false
    },
    damageTaken: 0
  }

  //Player Methods

  addBullet = () => {
    this.setState(() => ({
      player2: !state.player2.bullet
    }))
    console.log(`bullet: ${this.bullet}`);
  }

  doAction = (damageTaken, abilityName) => {
    console.log(abilityName);
    console.log(damageTaken);
    // console.log(`es el turno del jugador ${this.state.number} y su valor es: ${this.turn}`);
    if(this.state.player2.turn) {
      this.setState((state) => ({
        player2: {
          ...state.player2,
          turn: !state.player2.turn,
          lifePoints: state.player2.lifePoints - damageTaken
        },
        player1: {
          ...state.player1,
          turn: !state.player1.turn,
          lifePoints: state.player1.lifePoints
        }
      }))
      console.log(this.state.player2);
    }
    else if(!this.state.player2.turn) {
      if(abilityName == '¡Dispara!')
        this.setState((state) => ({
          player1: {
            ...state.player1,
            turn: !state.player1.turn,
            lifePoints: state.player1.lifePoints - damageTaken
          },
          player2: {
            ...state.player2,
            turn: !state.player2.turn,
            lifePoints: state.player2.lifePoints,
            bullet: false
          }
        }));
      else if(abilityName == 'Sacando el Fierro'){
        this.setState((state) => ({
          player1: {
            ...state.player1,
            turn: !state.player1.turn,
            lifePoints: state.player1.lifePoints
          },
          player2: {
            ...state.player2,
            turn: !state.player2.turn,
            lifePoints: state.player2.lifePoints,
            bullet: true
          }
        }));
      }
      else
        this.setState((state) => ({
          player1: {
            ...state.player1,
            turn: !state.player1.turn,
            lifePoints: state.player1.lifePoints - damageTaken
          },
          player2: {
            ...state.player2,
            turn: !state.player2.turn,
            lifePoints: state.player2.lifePoints
          }
        }));
      // console.dir(this.state.player1, this.state.player2)

    }
  }

  render = () => (
    <div className="Field" name="asd">
      <div className="Field-container">
        <Critic />
        <Player name="Player-1" number="1"/>
        <Player name="Player-2" number="2"/>
        <LifeMeter
          player={this.state.player1}
          number="1"
          lifePoints={this.state.player1.lifePoints}
          turn={this.state.player1.turn}
          doAction={this.doAction}
        />
        <LifeMeter
          player={this.state.player2}
          number="2"
          lifePoints={this.state.player2.lifePoints}
          turn={this.state.player2.turn}
          doAction={this.doAction}
        />
      </div>
    </div>
  )
}