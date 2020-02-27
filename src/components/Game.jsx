import React, { Component } from 'react';

// Components
import Menu from './Menu';
import Field from './Field';
import ActionBar from './ActionBar';
import PlayerSelect from './PlayerSelect'

export default class Game extends Component {

  state = {
    // players: {
    //   player1:
    //   {
    //     life: 100,
    //     attack: 10
    //   },
    //   player2:
    //   {
    //     life: 100,
    //     attack: 20
    //   }
    // }
    player1Life: 100,
    player2Life: 100,
    menu: true
  }

  updateState = (f) => {
    f()
  }

  timer = () => {
    
  }

  changeMenu = () => {
    // setTimeout(this.timer, 1900);
    const audio = document.getElementById("audio");
    // try introduce settimeout here.
    audio.play();
    this.setState({menu: false});
  }

  render () {
    if(this.state.menu)
      return <Menu changeMenu={this.changeMenu} />
    else if(this.state.playerSelect) {
      return <PlayerSelect />
    }
    else
      return (
    <div className="Game">
      <div className="Game-container">
        <Field
          player1Life={this.state.player1Life}
          player2Life={this.state.player2Life}
        />
        <ActionBar/>
      </div>
    </div>
  )};
}