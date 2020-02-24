import React from 'react';

const Action = props => {
  return (
    <div className={`Action ${props.class}`}>
      <div className="Action-container" onClick={props.handleClick} >
        <div className="Action-name">
          <span>
            {
              props.action
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default Action;