import React, { Component } from 'react';

export default class Message extends Component {
  // rojo: 800f09 rojo oscuro: 2e0708
  state = {
    msg: ' ',
  }
  msg = 'Your turn'
  turn = false;
  i = 0; //For letter counter
  mOverMsg = true
  time = 0;

  componentDidMount() {
    window.addEventListener('click', this.handleEvent);
    window.addEventListener('mouseover', this.handleMEvent);
    setTimeout(this.changeMsg, 500);
  }

  handleMEvent = (e) => {
    console.log(this.props.player1);
    if(e.explicitOriginalTarget.data == "Ataques" && this.mOverMsg) {
      this.i = 0;
      this.msg = 'Lista de ataques';
      this.setState({msg: ' '})
      this.changeMsg();
    }
    else if(e.explicitOriginalTarget.data == "Especiales" && this.mOverMsg) {
      this.i = 0;
      this.msg = 'Lista de especiales';
      this.setState({msg: ' '})
      this.changeMsg();
    }

    for(let i = 0; i < this.props.player1.attacks.length; i++) {
      if(e.explicitOriginalTarget.data == this.props.player1.attacks[i].name && this.mOverMsg) {
        this.i = 0;
        this.msg =  this.props.player1.attacks[i].description;
        this.setState({msg: ' '});
        this.changeMsg();
      }
    }

    for(let i = 0; i < this.props.player1.specials.length; i++) {
      if(e.explicitOriginalTarget.data == this.props.player1.specials[i].name && this.mOverMsg) {
        this.i = 0;
        this.msg =  this.props.player1.specials[i].description;
        this.setState({msg: ' '})
        this.changeMsg();
      }
    }
  }

  handleEvent = (e) => {
    // this.i = 0;
    // if(e.target.innerText == 'Ataque') {
    //   if(this.turn) {
    //     // this.setState({msg: 'Enemy turn'});
    //     this.msg = 'Tu turno';
    //     this.turn = !this.turn;
    //     this.setState({msg: ' '})
    //     this.changeMsg();
    //   }
    
    //SI LA FUNCION NO RETORNA UN INT, MOSTRAMOS MENSAJE DE QUE NO SE PUEDE
  }

  clearMsg = () => {
    this.setState({msg: ' '});
    this.mOverMsg = true;
  }

  changeMsg = () => {
    if(!(this.i > this.msg.length)) {
      // For msg writing animation.
      this.setState((state) => ({msg : state.msg.concat(this.msg.charAt(this.i))}));
      // console.log(this.i);
      this.i++;
      setTimeout(this.changeMsg, 15);
    }
    else {
      // this.time = setTimeout(this.clearMsg, 700);
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

