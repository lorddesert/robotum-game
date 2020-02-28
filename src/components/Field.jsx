import React, { Component } from 'react';
import Player from './Player';
import LifeMeter from './LifeMeter';
import Critic from './Critic';
import Miss from './Miss';
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
      RHUses: 2,
      amplifiedDamage: 0,
      bleeding: 0
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
      if(abilityName == 'Rica Hamburguesa') {
        this.setState((state) => ({
          player2: {
            ...state.player2,
            turn: !state.player2.turn,
            lifePoints: state.player2.lifePoints
          },
          player1: {
            ...state.player1,
            turn: !state.player1.turn,
            lifePoints: state.player1.lifePoints + 15,
            RHUses: state.player1.RHUses - 1
          }
        }))
      }
    else if(abilityName == 'Papotearse') {
      this.setState((state) => ({
        player2: {
          ...state.player2,
          turn: !state.player2.turn,
          lifePoints: state.player2.lifePoints
        },
        player1: {
          ...state.player1,
          turn: !state.player1.turn,
          lifePoints: state.player1.lifePoints,
          amplifiedDamage: 10
        }
      }))
    }
    else
      this.setState((state) => ({
        player2: {
          ...state.player2,
          turn: !state.player2.turn,
          lifePoints: state.player2.lifePoints - damageTaken - state.player1.amplifiedDamage
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
      if(abilityName == '¡Dispara!') {
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
        const audio = document.getElementById('shoot');
        audio.play();
      }
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
        const audio = document.getElementById('recharge');
        audio.play();
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
    }
  }

  render = () => (
    <div className="Field" name="asd">
      <div className="Field-container">
        {/* this.state.player1.lifePoints && this.state.player2.lifePoints   &&
            imprimir player X win! and credits. */}
        <Miss />
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