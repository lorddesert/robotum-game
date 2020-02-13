import React from 'react';

import LifeMeter from './LifeMeter';

const Player = (props) => {
  return (
    <div className={props.name}>
      <div className={props.name + "-container"}>
      </div>
    </div>
  );
}

export default Player;