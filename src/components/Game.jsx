import React, { Component } from 'react';

// Components
import Menu from './Menu';
import Field from './Field';
import ActionBar from './ActionBar';
import PlayerSelect from './PlayerSelect'

export default class Game extends Component {

  state = {
    menu: true,
    playerSelect: false
  }

  updateState = (f) => {
    f()
  }

  timer = () => {
    
  }

  changeMenu = e => {
    if(e.target.innerText == 'Confirm') {
      // setTimeout(this.timer, 1900);
      const audio = document.getElementById("audio");
      audio.volume = "0.4";
      // try introduce settimeout here.
      audio.play();
      this.setState({playerSelect: false});
    }
    else if(e.target.innerText === 'Start')
      this.setState({playerSelect: true, menu: false});
    else if(e.target.innerText === 'Confirm') {
      this.setState({playerSelect: false, menu: false});
    }
  }

  render () {
    if(this.state.menu)
      return <Menu onClick={this.changeMenu} />
    else if(this.state.playerSelect)
      return <PlayerSelect onClick={this.changeMenu} />
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