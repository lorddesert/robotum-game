import React, { Component } from 'react';
import memoize from 'memoize-one';
import players from '../players/players.json';
import { kamenyameya, barrelRoll, deliciousHamburger } from '../scripts/specialMovements';
import { criticAnm, changeDisplay } from '../scripts/menu-animation';
import { makeChoice } from '../scripts/gnaro';


// Components
import LifeBar from './LifeBar';
import LifeCount from './LifeCount';

const nitsuga = players[0];
const gnaro = players[1];

export default class LifeMeter extends Component {

  state = {
    number: this.props.number,
    lifePoints: this.props.lifePoints,
  }

  turn = this.props.turn;
  bullet = true;
  damageTaken = 0;

  getRandomInt = () => {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }

  addBullet = () => {
    this.bullet = !this.bullet;
    console.log(`bullet: ${this.bullet}`);
  }


  //Event methods
  changeTurn = damageTaken => {
    // console.log(`es el turno del jugador ${this.state.number} y su valor es: ${this.turn}`);
    if(this.turn || this.state.number == "1" && !this.turn) {
      this.turn = !this.turn;
      console.log(`soy el jugador ${this.state.number} y mi valor es : ${this.turn}`)
      this.setState((state) => ({
        lifePoints: state.lifePoints - damageTaken
      }));
    }
    else if(!this.turn){
      this.turn = !this.turn
      console.log(`es el turno del jugador ${this.state.number} y su valor es: ${this.turn}`);
    }
  }

  handleEvent = e => {
    this.findNitsugaAttack(e) // compareWithNitsugaAttacks && changeturn = executeAction?
    this.findNitsugaSpecial(e);
    if(e.target.innerText != 'Start' && e.target.innerText != 'Ataques' && e.target.innerText != 'Especiales' &&
    e.target.innerText != 'Atras')
      this.changeNitsugaTurn();
  }

  //Players methods
  changeNitsugaTurn = () => {
    console.log(`CNT: es el turno del jugador ${this.state.number}, y su valor es: ${this.turn}`);
      if(this.state.number == "1" && !this.turn) {
        this.turn = !this.turn;
        console.log(`CNT: es el turno del jugador ${this.state.number}, y su valor cambio, es: ${this.turn}`);
      }
  }

  changeNpcTurn = () => {
      let decision = makeChoice(this.bullet);
      console.log(`la decision es: ${decision}`);
      for(let i = 0; i < gnaro.attacks.length; i++)
        if(decision == gnaro.attacks[i].name) {
          if(decision == "¡Dispara!") {
            console.log("Gnaro disparo!")
            this.bullet = false;
            console.log(`bullet: ${this.bullet}`);
            // this.turn = !this.turn;
            this.changeTurn(30);
            this.damageTaken = 30;
            break;
          }
          else if(decision == 'Sacando el Fierro') {
            console.log(`gnaro recargo`);
            this.addBullet()
            this.turn = !this.turn;
            break;
          }
          else {
            console.log("Gnaro hizo :" + gnaro.attacks[i].damage + " de daño");
            this.changeTurn(gnaro.attacks[i].damage);
            break;
          }
        }

      for(let i = 0; i < gnaro.specials.length; i++)
        if(decision == gnaro.specials[i].name)
          if(decision == gnaro.specials[i].name) {
            if(decision == 'Sacando el Fierro') {
              console.log(`gnaro recargo`);
              this.addBullet()
              this.turn = !this.turn;
              break;
            }
          }
          // this.changeTurn(gnaro.attacks[i].damage);
        //specials

  }

  findNitsugaAttack = e => {
    for(let i = 0; i < nitsuga.attacks.length; i++) {
      if(e.target.innerText == nitsuga.attacks[i].name && this.state.number == "2") {
        if(e.target.innerText == "Patada del Dragon Tuerto" && this.turn) {
          if(this.turn == true) {
            let prob = this.getRandomInt();
            console.log("la probabilidad de exito es " + prob);
            if(prob >= 80) {
              criticAnm(changeDisplay);
              this.changeTurn(nitsuga.attacks[i].damage + 25);
            }
            else
              this.changeTurn(nitsuga.attacks[i].damage);
          }
        }
        else {
        this.changeTurn(nitsuga.attacks[i].damage);
        }
      }
    }
  }

  findNitsugaSpecial = e => {
    for(let i = 0; i < nitsuga.specials.length; i++) {
      if(e.target.innerText == nitsuga.specials[i].name && this.state.number == "2") {
        if(e.target.innerText == "Kamenyameya") {
          let dmg = kamenyameya(this.state.lifePoints);
          console.log("asdasd" + dmg)
          if(dmg >= 80)
            this.changeTurn(dmg);
          else if(this.turn)
            alert("Fallaste!");
            this.turn = !this.turn;
        }


        else if(e.target.innerText == "Rica Hamburguesa") {
          if(!this.turn && this.state.number == "1") {
            let LifePointsGained = this.getRandomInt()
            console.log(nitsuga.specials[i].uses)
            this.changeTurn(LifePointsGained);
            nitsuga.specials[i].uses = nitsuga.specials[i].uses - 1;
            console.log(nitsuga.specials[i].uses)
          }
        }


        else
          this.changeTurn(nitsuga.specials[i].damage);
          // console.log("NO PASO POR KAMEN")
          // Adjust barrel roll when the IA it's finished.
          // else if(e.target.innerText == "¡Do a Barrel Roll!") {
          //   let probability = this.getRandomInt();
          //   console.log("asdasd" + dmg)
          //   if(probability >= 50)
          //     this.changeTurn(dmg);
          //   else alert("Fallaste!");
          // }
        }
        else if(e.target.innerText == nitsuga.specials[i].name && this.state.number == "1" && !this.turn)
          if(e.target.innerText == "Rica Hamburguesa") {
              let LifePointsGained = deliciousHamburger(nitsuga.specials[i].uses)
              console.log(nitsuga.specials[i].uses)
              console.log(LifePointsGained);
              this.changeTurn(LifePointsGained);
              nitsuga.specials[i].uses = nitsuga.specials[i].uses - 1;
              console.log(nitsuga.specials[i].uses)
            }
    }
  }

  // e.target.innerText == nitsuga.attacks[i].name && this.state.number == "1" && this.turn
  //Lifecycle methods
  componentDidUpdate() {
    if(this.state.number == "2" && !this.turn)
      this.changeNpcTurn();
    // console.log(`los componentes se van a actualizar , el estado del jugador ${this.props.number} es: ${this.turn}`);
    if(this.state.lifePoints <= 0) {
      alert("ganaste!");
    }

  }

  componentDidMount() {
    window.addEventListener("click", this.handleEvent);
    console.log(`los componentes se han montado, el estado del jugador ${this.props.number} es: ${this.turn}`);
  }


  render() {
    return(
    <div
      className={"Life-meter-" + this.state.number}
      id="lifeMeter"
      >
      <div className="Life-meter-container">
        <LifeBar lifePoints={this.state.lifePoints} turn={this.turn} number={this.state.number} />
        <LifeCount lifePoints={this.state.lifePoints} />
      </div>
    </div>
    )
  }
}