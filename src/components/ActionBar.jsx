import React from 'react';
import Action from './Action';
import Message from './Message';

const ActionBar = (props) => {
  return (
    <div className="Actbar">
      <div className="Actbar-container">
          <div className="Message">
            <Message/>
          </div>
          <div className="Actions">
            <Action action="Attack" handleClick={props.handleClick} />
            <Action action="Defend" />
            <Action action="Special" />
          </div>
      </div>
    </div>
  );
}

export default ActionBar;