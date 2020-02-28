import React, { Component } from 'react';
import memoize from 'memoize-one';
import LifePoint from './LifePoint';

import { kamenyameya, barrelRoll, deliciousHamburger } from '../scripts/specialMovements';
import { criticAnm, changeCritDisplay } from '../scripts/menu-animation';
import { missAnm, changeMissDisplay } from '../scripts/menu-animation';
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
    if(this.state.number == "1" && !this.props.turn && e.target.innerText != 'Start') {
      this.compareWithNitsugaAttacks(e);
      this.compareWithNitsugaSpecials(e);
    }
  }
  changeNpcTurn = () => {
    let decision = makeChoice(this.props.player.bullet);
    console.log(`la decision es: ${decision}`);
    this.compareWithGnaroAttacks(decision);
    this.compareWithGnaroSpecials(decision);
  }

  //Players methods
  compareWithNitsugaAttacks = e => {
    for(let i = 0; i < this.state.player.attacks.length; i++) {
      if(e.target.innerText == this.state.player.attacks[i].name && this.state.number == "1" && !this.state.turn) {
        if(e.target.innerText == "Patada del Dragon Tuerto") {
            if(this.getRandomInt() >= 80) {
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
  compareWithNitsugaSpecials = e => {
    for(let i = 0; i < this.state.player.specials.length; i++) {
      if(e.target.innerText == this.state.player.specials[i].name && this.state.number == "1") {
        if(e.target.innerText == "Kamenyameya") {
          const lifePointsLeft = this.props.lifePoints;
          const prob = this.getRandomInt();
          console.log(prob);
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
        else if(e.target.innerText == "Rica Hamburguesa") {
          console.log(this.props.player.RHUses);
          if(this.props.player.RHUses > 0) {
          document.getElementById('rica-hamburgesa').play()
          setTimeout(() => {
            this.props.doAction(15, "Rica Hamburguesa"); // Gains 15 life points
          }, 3000);
          }
          else {
            missAnm(changeMissDisplay);
            this.props.doAction(0);
          }
        }
        else if(e.target.innerText == "Papotearse") {
          document.getElementById('papotearse').play();
          setTimeout(() => {
            this.props.doAction(10, "Papotearse"); // Gains 10 points of aditional damage
          }, 3000);
          }
        }
      }

        // else
        //   this.props.doAction(this.state.player.specials[i].damage);
          // console.log("NO PASO POR KAMEN")
          // Adjust barrel roll when the IA it's finished.
          // else if(e.target.innerText == "¡Do a Barrel Roll!") {
          //   let probability = this.getRandomInt();
          //   console.log("asdasd" + dmg)
          //   if(probability >= 50)
          //     this.props.doAction(dmg);
          //   else alert("Fallaste!");
          // }
        // else if(e.target.innerText == this.state.player.specials[i].name && this.state.number == "1" && !this.turn)
        //   if(e.target.innerText == "Rica Hamburguesa") {
        //       let LifePointsGained = deliciousHamburger(this.state.player.specials[i].uses)
        //       console.log(this.state.player.specials[i].uses)
        //       console.log(LifePointsGained);
        //       this.props.doAction(LifePointsGained);
        //       this.state.player.specials[i].uses = this.state.player.specials[i].uses - 1;
        //       console.log(this.state.player.specials[i].uses)
        //     }
    }
  compareWithGnaroSpecials = decision => {
    for(let i = 0; i < this.state.player.specials.length; i++)
      if(decision == this.state.player.specials[i].name)
        if(decision == this.state.player.specials[i].name) {
          if(decision == 'Sacando el Fierro') {
            console.log(`gnaro recargo`);
            this.props.doAction(this.props.player.specials[i].damage, decision);
        }
      }
  }
  compareWithGnaroAttacks = decision => {
    for(let i = 0; i < this.state.player.attacks.length; i++)
      if(decision == this.state.player.attacks[i].name) {
        if(decision == "¡Dispara!") {
          console.log("Gnaro disparo!")
          console.log(this.props.player.attacks[i].damage);
          this.props.doAction(this.props.player.attacks[i].damage, decision);
        }
      }
        // else {
        //   console.log("Gnaro hizo :" + this.state.player.attacks[i].damage + " de daño");
        //   this.props.doAction(this.state.player.attacks[i].damage);
        // }
      }

  //Lifecycle methods
  componentDidUpdate() {
    if(this.props.number == '2' && this.props.turn == false) {
      setTimeout(this.changeNpcTurn, 800)
    }
    if(this.props.lifePoints <= 0) {
      alert("ganaste!");
    }

  }
  componentDidMount() {
    window.addEventListener("click", this.handleEvent);
    console.log(`los componentes se han montado, el estado del jugador ${this.props.number} es: ${this.state.player.turn}`);
  }

  render() {
    return(
    <div
      className={"Life-meter-" + this.state.number}
      id="lifeMeter"
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