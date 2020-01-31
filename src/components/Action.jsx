import React from 'react';

const Action = (props) => {
  return (
    <div className="Action">
      <div className="Action-container">
        <div className="Action-name">
          {
            props.action
          }
        </div>
      </div>
    </div>
  );
}

export default Action;  