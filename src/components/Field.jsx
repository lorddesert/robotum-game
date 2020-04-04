import React, { Component } from "react";
import Player from "./Player";
import LifeMeter from "./LifeMeter";
import Critic from "./Critic";
import Miss from "./Miss";
import players from "../players/players.json";

export default class Field extends Component {

  // the turn is based in who receive damage,
  // true = recieve damage in this turn.
  state = {
    player1: {...this.props.player1, turn: false},
    player2: {...this.props.player2, turn: true}
  }

  //Player Methods
  addBullet = () => {
    this.setState(() => ({
      player2: !state.player2.bullet
    }))
    // console.log(`bullet: ${this.bullet}`);
  }

  doAction = (damageTaken, abilityName) => {
    // console.log(this.state, players);
    // console.log(abilityName);
    // console.log(damageTaken);
    if(this.state.player2.turn) {
      if(abilityName == "Rica Hamburguesa") {
        this.setState((state) => ({
          player2: {
            ...state.player2,
            turn: !state.player2.turn,
            lifePoints: state.player2.lifePoints
          },
          player1: {
            ...state.player1,
            turn: !state.player1.turn,
            lifePoints: state.player1.lifePoints + damageTaken,
            RHUses: state.player1.RHUses - 1
          }
        }))
      }
      else if(abilityName == "Papotearse") {
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
            amplifiedDamage: state.player1.amplifiedDamage + 10
          }
        }))
      }
      // Gnaro"s specials left
      else if(this.state.player1.name == "Gnaro") {
        if(abilityName == "¡Dispara!") {
          this.setState((state) => ({
            player1: {
              ...state.player1,
              turn: !state.player1.turn,
              lifePoints: state.player1.lifePoints
            },
            player2: {
              ...state.player2,
              turn: !state.player2.turn,
              lifePoints: state.player2.lifePoints - damageTaken,
              bullet: false
            }
          }));
          const audio = document.getElementById("shoot");
          audio.play();
        }
        else if(abilityName == "Sacando el Fierro") {
          this.setState((state) => ({
            player1: {
              ...state.player1,
              turn: !state.player1.turn,
              lifePoints: state.player1.lifePoints,
              bullet: true
            },
            player2: {
              ...state.player2,
              turn: !state.player2.turn,
              lifePoints: state.player2.lifePoints,
            }
          }));
          const audio = document.getElementById("recharge");
          audio.play();
        }
        else {
          // console.log("Paso por el area de gnaro, el daño es: ", damageTaken);
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
          }));
        }
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
        }));
    }
    else if(!this.state.player2.turn) {
      if(this.state.player2.name == "Nitsuga") {
        if(abilityName == "Rica Hamburguesa") {
          this.setState((state) => ({
            player2: {
              ...state.player2,
              turn: !state.player2.turn,
              lifePoints: state.player2.lifePoints + damageTaken,
              RHUses: state.player2.RHUses - 1
            },
            player1: {
              ...state.player1,
              turn: !state.player1.turn,
              lifePoints: state.player1.lifePoints
            }
          }))
        }
        else if(abilityName == "Papotearse") {
          this.setState((state) => ({
            player2: {
              ...state.player2,
              turn: !state.player2.turn,
              lifePoints: state.player2,
              amplifiedDamage: state.player2.amplifiedDamage + 10
            },
            player1: {
              ...state.player1,
              turn: !state.player1.turn,
              lifePoints: state.player1.lifePoints,
            }
          }));
        }
        else
          this.setState((state) => ({
            player2: {
              ...state.player2,
              turn: !state.player2.turn,
              lifePoints: state.player2.lifePoints
            },
            player1: {
              ...state.player1,
              turn: !state.player1.turn,
              lifePoints: state.player1.lifePoints - damageTaken - state.player2.amplifiedDamage
            }
          }));
    }
      else {
        // console.log(this.state.player2, "PASO POR EL ELSE IF");
        if(abilityName == "¡Dispara!") {
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
          const audio = document.getElementById("shoot");
          audio.play();
        }
        else if(abilityName == "Sacando el Fierro") {
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
          const audio = document.getElementById("recharge");
          audio.play();
        }
        else {
          // console.log("paso por donde no debia")
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
    }
  }

  componentDidMount() {
    // console.log(this.state);
  }
  render = () => (
    <div className="Field" name="asd">
      <div className="Field-container">
        <Miss />
        <Critic />
        <Player
          name={this.state.player1.name}
          number="1"
        />
         <Player
            name={this.state.player2.name}
            number="2"
          />
        <LifeMeter
          player={this.state.player1}
          number="1"
          lifePoints={this.state.player1.lifePoints}
          turn={this.state.player1.turn}
          doAction={this.doAction}
          changeToCredits={this.props.changeToCredits}
        />
        <LifeMeter
          player={this.state.player2}
          number="2"
          lifePoints={this.state.player2.lifePoints}
          turn={this.state.player2.turn}
          doAction={this.doAction}
          changeToCredits={this.props.changeToCredits}
        />
      </div>
    </div>
  )
}