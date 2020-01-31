import React from 'react';
import Life from './Life';

const LifeMeter = () => {
  return (
    <div className="Life-meter">
      <div className="Life-meter-container">
        <div className="Life-meter-image">
          <Life />
        </div>
      </div>
    </div>
  );
}

export default LifeMeter;