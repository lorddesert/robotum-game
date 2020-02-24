import React from 'react';

const MenuBtn = props => {
  return (
    <div className="Menu-btn" onClick={props.onClick}>
      <div className="Menu-btn-container">
        <div className="Menu-btn-text">
          <span>Start</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBtn;