import React, { Component } from 'react';
import Menu from './Menu';

// Components
import Field from './Field';
import ActionBar from './ActionBar';

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

  handleEvent = (e) => {
    e.preventDefault();
    e.persist
    console.log(e);
    if(this.state.player1Life > 0)
    this.setState((state) => ({player1Life: state.player1Life - 10}))
    console.log(this.state)
  }

  updateState = (f) => {
    f()
  }

  timer = () => {
    setTimeout(this.changeMenu, 2000);
  }

  changeMenu = () => {
    const audio = document.getElementById("audio");
    // try introduce settimeout here.
    audio.play();
    this.setState({menu: false});
  }

  render () {
    if(this.state.menu)
      return <Menu changeMenu={this.changeMenu} />
    else
      return (
    <div className="Game">
      <div className="Game-container">
        <Field
          player1Life={this.state.player1Life}
          player2Life={this.state.player2Life}
          updateState={this.updateState}
          f={this.handleClick}
        />
        <ActionBar/>
      </div>
    </div>
  )};
}