import React from 'react';
import Action from './Action';

const ActionBar = () => {
  return (
    <div className="Actbar">
      <div className="Actbar-container">
          <Action action="Attack" />
          <Action action="Defend" />
          <Action action="Special" />
      </div>
    </div>
  );
}

export default ActionBar;