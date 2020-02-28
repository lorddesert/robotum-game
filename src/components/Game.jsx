import React, { Component } from 'react';

// Components
import Menu from './Menu';
import Field from './Field';
import ActionBar from './ActionBar';
import PlayerSelect from './PlayerSelect'
import audio from '../music/Yakuza 0 OST   03 Force Addiction.mp3';

export default class Game extends Component {

  state = {
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
    audio.volume = "0.4";
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
        <audio src={audio} style="display: none;" controls id="audio"></audio>
        <Field
          player1Life={this.state.player1Life}
          player2Life={this.state.player2Life}
        />
        <ActionBar/>
      </div>
    </div>
  )};
}