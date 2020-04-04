import React, { Component } from 'react';
import Action from './Action';
import Message from './Message';
// import Actions from '../scripts/
// import the list of movements
class ActionBar extends Component {

  state = {
    toggleShowOptions: true,
    player : this.props.player1
  }
  
  showList = ' ';

  toggleShow = e => {
    e.persist();
    e.preventDefault()
    if(e.target.innerText == 'Ataques' || e.target.innerText == 'Atras' || e.target.innerText == 'Especiales') {
      if(e.target.innerText == 'Ataques' || e.target.innerText == 'Especiales') {
        this.showList = e.target.innerText;
      }
      this.setState( state => ({
        toggleShowOptions: !state.toggleShowOptions
      }));
    }
  }

  render = () => {
    if(this.showList == "Ataques" && !this.state.toggleShowOptions) {
      return (
        <div className="Actbar">
          <div className="Actbar-container">
              <div className="Message">
                <Message player1={this.state.player} />
              </div>
              <div className="Actions">
                <div className="Actions-container">
                  {this.state.player.attacks.map((atk, i) => <Action action={atk.name} key={i} handleClick={this.toggleShow} />)}
                  <Action action="Atras" handleClick={this.toggleShow} />
                </div>
              </div>
            </div>
          </div>
      );
    }
    else if (this.showList == "Especiales" && !this.state.toggleShowOptions) {
      return (
        <div className="Actbar">
        <div className="Actbar-container">
            <div className="Message">
              <Message player1={this.state.player} />
            </div>
            <div className="Actions">
              <div className="Actions-container">
                {this.state.player.specials.map((atk, i) =>
                  <Action
                    action={atk.name}
                    key={i}
                    handleClick={this.toggleShow}
                  />)
                }
                <Action action="Atras" handleClick={this.toggleShow} />
              </div>
            </div>
          </div>
        </div>
        );
    }

    return (
      <div className="Actbar">
        <div className="Actbar-container">
            <div className="Message">
              <Message/>
            </div>
            <div className="Actions">
              {/* If i press one action, show the attack, or special movement's list */}
              {this.state.toggleShowOptions &&
                <div className="Actions-container">
                  <Action action="Ataques" handleClick={this.toggleShow} />
                  <Action action="Especiales" handleClick={this.toggleShow}/>
                </div>
              }
            </div>
        </div>
      </div>
    );
  }
}

export default ActionBar;