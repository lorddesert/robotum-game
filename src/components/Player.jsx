import React from 'react';
import LifeMeter from './LifeMeter';
import player1Img from '../styles/images/cara.png';
import player2Img from '../styles/images/gnaro.png';

const Player = (props) => {
  return (
    <div className={props.name}>
      <div className={props.name + "-container"}>
        <img src={props.number == 1 ? player1Img : player2Img } alt={props.name} style={{width: '100%'}}>
        </img>
      </div>
    </div>
  );
}

export default Player;