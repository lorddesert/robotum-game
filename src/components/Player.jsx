import React from 'react';

const Player = (props) => {
  return (
    <div className="Player">
      <div className="Player-container">
        {
          props.name
        }
      </div>
    </div>
  );
}

export default Player;