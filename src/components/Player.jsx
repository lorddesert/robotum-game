import React from 'react';
import player1Img from '../styles/images/cara.png';
import player2Img from '../styles/images/gnaro.png';

const Player = props => {
  console.log("props:", props);
  let img = null;
  if(props.name == "Nitsuga")
    img = player1Img;
  else
    img = player2Img;
  return (
    <div id={`playerImg-${props.number}`} className={`player-${props.number}`}>
      <div className={`player-${props.number}-container`}>
        <img src={img} alt={props.name} style={{width: "100%" , height: "100%"}}>
        </img>
      </div>
    </div>
  );
}

export default Player;