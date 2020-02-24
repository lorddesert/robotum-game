import React from 'react';
import Game from '../components/Game';
import TransitionAnm from '../components/TransitionAnm';

const Display = () => {
  return (
    <div className="Display">
      <div className="Display-container">
        <TransitionAnm />
        <Game />
      </div>
    </div>
  );
}

export default Display;