import React, { Component } from 'react';
import { myBtn, myAnm } from '../scripts/menu-animation';

class TransitionAnm extends Component {

  componentDidMount() {
    window.addEventListener('click', this.handleEvent);
  }


  render = () => (
    <div className="TransitionAnm">
      <div id="Anim-container">
        <div id="Anim">
        </div>
        <div id="Anim-2">
        </div>
      </div>
    </div>
  );

  // || e.target.innerText === 'Gnaro' || e.target.innerText === 'Nitsuga'
  handleEvent = e => {
    if(e.target.innerText === 'Start') {
      myBtn(myAnm);

    }
  }
}

export default TransitionAnm;