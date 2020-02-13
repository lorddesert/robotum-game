import React, { Component } from 'react';
import memoize from 'memoize-one';

// Components
import LifeBar from './LifeBar';
import LifeCount from './LifeCount';

export default class LifeMeter extends Component {

  state = {
    number: this.props.number,
    lifePoints: this.props.lifePoints,
  }

  turn = this.props.turn;

  //Event methods
  changeTurn = () => {
    if(this.turn && this.state.number == this.props.number) {
      console.log(`es el turno del jugador ${this.state.number} y su valor es: ${this.turn}`);
      this.turn = !this.turn;
      this.setState((state) => ({
        lifePoints: state.lifePoints - 10
      }))
    }
    else if(!this.turn){
      console.log(`es el turno del jugador ${this.state.number} y su valor es: ${this.turn}`);
      this.turn = !this.turn;
    }
  }

  handleEvent = (e) => {
    if(e.target.innerText == 'Attack')
      this.changeTurn();
  }


  //Lifecycle methods
  componentDidUpdate() {
    if(this.state.lifePoints == 0)
      alert("ganaste!");
  }

  componentDidMount() {
    window.addEventListener("click", this.handleEvent);
  }


  render() {
    return(
    <div
      className={"Life-meter-" + this.state.number}
      id="lifeMeter"
      >
      <div className="Life-meter-container">
        <LifeBar lifePoints={this.state.lifePoints} turn={this.turn} />
        <LifeCount lifePoints={this.state.lifePoints} />
      </div>
    </div>
    )
  }
}