import React from 'react';
import img from '../styles/images/menu-background.jpg'

import MenuBtn from './MenuBtn';

const Menu = (props) => {
  return (
      <div className="Menu" >
    <div className="Menu-container">
          <div className="Menu-img">
            <img src={img}
            alt="IAMGEEEN" />
          </div>
        <div className="Menu-title">
          <h2>
            <span className="first-letter">Y</span>akuza X
          </h2>
        </div>
        <MenuBtn onClick={props.changeMenu} />
      </div>
    </div>
  );
}

export default Menu;