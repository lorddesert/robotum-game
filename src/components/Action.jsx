import React from 'react';

const Action = (props) => {
  return (
    <div className={`Action ${props.class}`}>
      <div className="Action-container">
        <div className="Action-name">
          <button>
            {
              props.action
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;