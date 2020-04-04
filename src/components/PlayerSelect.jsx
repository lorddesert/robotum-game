import React, { Component } from 'react';
import gnaro from '../../src/styles/images/player-select-gnaro.jpg';
import nitsuga from '../../src/styles/images/player-select-nitsuga.jpg';



class PlayerSelect extends Component {

  handleClick = e => {
    // console.log(e.target.innerText);
    const nitsugaImg = document.getElementById('nitsugaImg');
    const gnaroImg = document.getElementById('gnaroImg');
    const btn = document.getElementsByClassName('btn');

    if(e.target.innerText == 'Nitsuga') {
      // console.log(e.target.innerText, btn)
      nitsugaImg.style.opacity = '1'
      gnaroImg.style.opacity = '0';
      btn[0].style.color = 'red';
      btn[0].style.borderColor = 'red';
      btn[2].style.color = 'white';
      btn[2].style.borderColor = 'white';
      btn[1].style.opacity = '1';
      this.props.onClick(e);
    }
    else if(e.target.innerText == 'Gnaro') {
      // console.log(e.target.innerText)
      gnaroImg.style.opacity = '1';
      nitsugaImg.style.opacity = '0'
      btn[0].style.color = 'white';
      btn[0].style.borderColor = 'white';
      btn[2].style.color = 'red';
      btn[2].style.borderColor = 'red';
      btn[1].style.opacity = '1';
      this.props.onClick(e);
    }
    // img.style.opacity = "1";
  }
  render() {
    return (
      <div className="PlayerSelect">
        <div className="PlayerSelect-container">
          <div className="PlayerSelect-imgs">
            <div className="NitsugaSelect">
              <img id="nitsugaImg" src={nitsuga} alt="Nitsuga"/>
            </div>
            <div className="GnaroSelect" >
              <img id="gnaroImg" src={gnaro} alt="Gnaro"/>
            </div>
            <div className="PlayerSelect-btns">
              <button className="btn" onClick={this.handleClick}>Nitsuga</button>
              <button className="btn" onClick={this.props.onClick}>Confirm</button>
              <button className="btn" onClick={this.handleClick}>Gnaro</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerSelect;