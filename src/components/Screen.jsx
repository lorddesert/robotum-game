import React from 'react';
import Field from './Field';
import ActionBar from './ActionBar';

const Screen = () => {
  return (
    <div className="Screen">
      <div className="Screen-container">
        <Field />
        <ActionBar />
      </div>
    </div>
  );
}

export default Screen;