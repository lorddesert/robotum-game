import React, { Component } from 'react';

export default class Message extends Component {


  // rojo: 800f09 rojo oscuro: 2e0708
  state = {
    // msg: "Your turn"
    msg: ' '
  }

  msg = 'Your turn'
  //The turn is false, because the player 1 starts first (false = player 1 turn)
  turn = false;
  i = 0;

  componentDidMount() {
    window.addEventListener('click', this.handleEvent);
    setTimeout(this.changeMsg, 500);
  }

  handleEvent = (e) => {
    this.i = 0;
    if(e.target.innerText == 'Attack') {
      if(this.turn) {
        // this.setState({msg: 'Enemy turn'});
        this.msg = 'Your turn';
        this.turn = !this.turn;
        this.setState({msg: ' '})
        this.changeMsg();
      }

      else {
        // this.setState({msg: 'Your turn'})
        this.msg = 'Enemy turn';
        this.turn = !this.turn;
        this.setState({msg: ' '})
        this.changeMsg();
      }
    }
  }

  clearMsg = () => {
    this.setState({msg: ' '});
  }

  changeMsg = () => {
    if(!(this.i > this.msg.length)) {
      this.setState((state) => ({msg : state.msg.concat(this.msg.charAt(this.i))}));
      console.log(this.i);
      this.i++;
      setTimeout(this.changeMsg, 25);
    }
    else {
      setTimeout(this.clearMsg, 1000)
    }

  }

  render() {
    return (
    <div className="Message">
      <div className="Message-container">
        {
          <span>
            {this.state.msg}
          </span>
        }
      </div>
    </div>
    )
  }
}

