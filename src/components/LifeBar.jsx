import React, { Component } from 'react';
import LifePoint from './LifePoint'

export default class LifeBar extends Component {

  state = {
    lifePoints: this.props.lifePoints
  }
  
  turn = this.props.turn

// Improve the way that the life bar render

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

  // handleEvent = (e) => {
  //   console.log(e.target.innerText)
  //   if(this.state.lifePoints > 0) {
  //     if(e.target.innerText == "Attack")
  //       if(this.turn) {
  //         this.setState((state) => ({lifePoints: state.lifePoints - 10}))
  //         this.turn = !this.turn;
  //       }
  //       else if (!this.turn)
  //       {
  //         this.turn = !this.turn;
  //       }
  //   }
  // }

  componentDidMount() {
    // window.addEventListener("click", this.handleEvent);
    // console.log(`los componentes se han montado, el estado del jugador ${this.props.number} es: ${this.turn}`);  
  }

  render() {
    return (
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
    )
  }
}
