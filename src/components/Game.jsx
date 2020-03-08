import React, { Component } from "react";

// Components
import Menu from "./Menu";
import Field from "./Field";
import ActionBar from "./ActionBar";
import PlayerSelect from "./PlayerSelect"
import players from "../players/players.json";

export default class Game extends Component {

  state = {
    menu: true,
    playerSelect: false,
    player1: " ",
    player2: " "
  }
  
  handleClick = e => {
    if(e.target.innerText == "Nitsuga")
      this.setState(state => ({
        ...state,
        player1: {...players[0]},
        player2: {...players[1]}
      }));

    else if(e.target.innerText == "Gnaro")
    this.setState(state => ({
      ...state,
      player1: {...players[1]},
      player2: {...players[0]}
    }));

    console.log(this.state);
  }

  changeMenu = e => {
    if(e.target.innerText == "Confirm") {
      // setTimeout(this.timer, 1900);
      const audio = document.getElementById("audio");
      audio.volume = "0.4";
      // try introduce settimeout here.
      audio.play();
      this.setState(() => ({playerSelect: false}));
      console.log(this.state);
    }
    else if(e.target.innerText === "Start")
      this.setState({playerSelect: true, menu: false});
    // else if(e.target.innerText === "Confirm") {
    //   this.setState({playerSelect: false, menu: false});
    // }
    this.handleClick(e);
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
        <Field player1={this.state.player1} player2={this.state.player2} />
        <ActionBar player1={this.state.player1} player2={this.state.player2} />
      </div>
    </div>
  )};
}