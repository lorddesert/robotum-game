import React, { Component } from 'react';
import LifePoint from './LifePoint';

import { criticAnm, changeCritDisplay, missAnm, changeMissDisplay, changePlayersDisplay } from '../scripts/menu-animation';
import { makeChoice } from '../scripts/gnaro';

export default class LifeMeter extends Component {

  // Do i need the state?
  state = {
    turn: this.props.turn,
    player: this.props.player,
    number: this.props.number,
    lifePoints: this.props.lifePoints,
  }
  damageTaken = 0;

  getRandomInt = () => {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }
  loop = (lp) => {
    let array = [lp];
    for(let j = 0; j < lp; j++)
    {
      array[j] = this.printLF(j);
    }
    return array;
  }
  printLF = (e) => {
    return e;
  }

  //Event methods
  handleEvent = e => {
    // If nitsugas turn is false
    // console.log(e.target.innerText);
    if(this.state.number == "1" && !this.props.turn && e.target.innerText != 'Start') {
      if(this.state.player.name == "Gnaro") {
        this.compareWithGnaroAttacks(e.target.innerText);
        this.compareWithGnaroSpecials(e.target.innerText);
      }
      else {
        this.compareWithNitsugaAttacks(e.target.innerText);
        this.compareWithNitsugaSpecials(e.target.innerText);
      }
    }
  }
  changeNpcTurn = () => {
    let decision = makeChoice(this.props.player.bullet, this.props.player.name, this.props.player.lifePoints, this.props.player.RHUses);
    // console.log(`la decision es: ${decision}`);
    if(this.state.player.name == "Gnaro") {
      this.compareWithGnaroAttacks(decision);
      this.compareWithGnaroSpecials(decision);
    }
    else {
      this.compareWithNitsugaAttacks(decision);
      this.compareWithNitsugaSpecials(decision);
    }
  }

  //Players methods
  compareWithNitsugaAttacks = decision => {
    for(let i = 0; i < this.state.player.attacks.length; i++) {
      if(decision == this.state.player.attacks[i].name) {
        if(decision == "Patada del Dragon Tuerto") {
            if(this.getRandomInt() >= 60) {
              document.getElementById('kick').play();
              setTimeout(() => {
                this.props.doAction(this.state.player.attacks[i].damage + 25);
                criticAnm(changeCritDisplay);
                }, 600);
            }
            else {
              document.getElementById('kick').play();
              setTimeout(() => { this.props.doAction(this.state.player.attacks[i].damage );}, 600);
            }
        }
        else {
          this.props.doAction(this.state.player.attacks[i].damage);
          document.getElementById('punch').play();
        }
      }
    }
  }
  compareWithNitsugaSpecials = decision => {
    for(let i = 0; i < this.state.player.specials.length; i++) {
      if(decision == this.state.player.specials[i].name) {
        if(decision == "Kamenyameya") {
          const lifePointsLeft = this.props.lifePoints;
          const prob = this.getRandomInt();
          // console.log(prob);
          if(lifePointsLeft <= 50) {
            if(prob >= 30) {
              document.getElementById('kamen').play();
              setTimeout(() => {
                this.props.doAction(20 + lifePointsLeft);
              }, 3500);
            }
            else {
              missAnm(changeMissDisplay);
              this.props.doAction(0);
            }
          }
          else {
            missAnm(changeMissDisplay);
            this.props.doAction(0);
          }
        }
        else if(decision == "Rica Hamburguesa") {
          // console.log(this.props.player.RHUses);
          if(this.props.player.RHUses > 0) {
          document.getElementById('rica-hamburgesa').play();
          setTimeout(() => {
            this.props.doAction(this.state.player.specials[i].heal, "Rica Hamburguesa"); // Gains 15 life points
          }, 3000);
          }
          else {
            missAnm(changeMissDisplay);
            this.props.doAction(0);
          }
        }
        else if(decision == "Papotearse") {
          document.getElementById('papotearse').play();
          setTimeout(() => {
            this.props.doAction(10, "Papotearse"); // Gains 10 points of aditional damage
          }, 3000);
          }
        }
      }
  }
  compareWithGnaroSpecials = decision => {
    for(let i = 0; i < this.state.player.specials.length; i++)
      if(decision == this.state.player.specials[i].name)
        if(decision == this.state.player.specials[i].name) {
          if(decision == "Sacando el Fierro") {
            // console.log("gnaro recargo");
            this.props.doAction(this.props.player.specials[i].damage, decision);
          }
          else if(decision == "Tramontina") {
            // console.log("gnaro acuchicho");
            document.getElementById("tramontina").play();
            setTimeout(() => {
              this.props.doAction(this.props.player.specials[i].damage, decision);
            }, 2000);
          }
          else if(decision == "Rompe Cuellos") {
            // console.log("gnaro aprieta el cuello");
            document.getElementById("rompecuellos").play();
            setTimeout(() => {
              this.props.doAction(this.props.player.specials[i].damage, decision);
            }, 1000);
          }
      }
  }
  compareWithGnaroAttacks = decision => {
    for(let i = 0; i < this.state.player.attacks.length; i++)
      if(decision == this.state.player.attacks[i].name) {
        if(decision == "¡Dispara!") {
          if(this.props.player.bullet) {
            // console.log("Gnaro disparo!");
            // console.log(this.props.player.attacks[i].damage);
            this.props.doAction(this.props.player.attacks[i].damage, decision);
          }
          else {
            missAnm(changeMissDisplay);
            this.props.doAction(0);
          }
        }

        else if(decision == "Zarandeada") {
          // console.log(this.props.player.attacks[i].damage);
          document.getElementById("zarandeada").play();
          this.props.doAction(this.props.player.attacks[i].damage, decision);
        }
      }
  }

  //Lifecycle methods
  componentDidUpdate() {
    if(this.props.number == "2" && this.props.turn == false && this.props.lifePoints > 0) {
      setTimeout(this.changeNpcTurn, 800);
    }
    if(this.props.lifePoints <= 0) {
      document.getElementById("deathSound").play();
      changePlayersDisplay(this.state.number);
      setTimeout(() => {
        document.getElementById("audio").pause();
        this.props.changeToCredits();
        document.getElementById("ending").play();
      }, 1000);

    }
  }
  componentDidMount() {
    window.addEventListener("click", this.handleEvent);
    // console.log(`los componentes se han montado, el estado del jugador ${this.props.number} es: ${this.state.player.turn}`);
  }

  render() {
    return(
    <div
      className={"Life-meter-" + this.state.number}
      id={`lifeMeter-${this.props.number}`}
    >
      <div className="Life-meter-container">
        <div className="Life-bar">
          <div className="Life-bar-container">
            <div className="Life-bar-image">
              <div className="Life-bar-content">
              {
                //The issue of the 1 point remaining when te life is 0, needs to be repaired
                this.loop(this.props.lifePoints).map((n) => <LifePoint key={`${n}`} />)
              }
              </div>
            </div>
          </div>
       </div>
        <div className="Life-count">
          <div className="Life-count-container">
            <div className="Life-count-points">
              <span>{this.props.lifePoints}</span>
            </div>
          </div>
      </div>
      </div>
    </div>
    )
  }
}