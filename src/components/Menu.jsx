import React from 'react';
import Action from './Action';

const Menu = (props) => {
  return (
    <div className="Menu" onClick={props.changeMenu}>
      <div className="Menu-container">
        <Action action="Start" class="Menu-btn" />
      </div>
    </div>
  );
}

export default Menu;