import React from 'react';

const handleClick = e => {
  console.log(e.target.innerText);
  const nitsugaImg = document.getElementById('nitsugaImg');
  const gnaroImg = document.getElementById('gnaroImg');
  const btn = document.getElementsByClassName('btn');

  // uno de color rojo y otro blanco
  if(e.target.innerText == 'Nitsuga') {
    console.log(e.target.innerText, btn)
    nitsugaImg.style.opacity = '1'
    gnaroImg.style.opacity = '0';
    btn[0].style.color = 'red';
    btn[0].style.borderColor = 'red';
    btn[2].style.color = 'white';
    btn[2].style.borderColor = 'white';
    btn[1].style.opacity = '1';
  }
  else if(e.target.innerText == 'Gnaro') {
    console.log(e.target.innerText)
    gnaroImg.style.opacity = '1';
    nitsugaImg.style.opacity = '0'
    btn[0].style.color = 'white';
    btn[0].style.borderColor = 'white';
    btn[2].style.color = 'red';
    btn[2].style.borderColor = 'red';
  }
  // img.style.opacity = "1";
}

const PlayerSelect = props => {
  return (
    <div className="PlayerSelect">
      <div className="PlayerSelect-container">
        <div className="PlayerSelect-imgs">
          <div className="NitsugaSelect">
            <img id="nitsugaImg" src="../../src/styles/images/player-select-nitsuga.jpg" alt="Nitsuga"/>
          </div>
          <div className="GnaroSelect" >
            <img id="gnaroImg" src="../../src/styles/images/player-select-gnaro.jpg" alt="Gnaro"/>
          </div>
          <div className="PlayerSelect-btns">
            <button className="btn" onClick={handleClick}>Nitsuga</button>
            <button className="btn" onClick={props.onClick}>Confirm</button>
            <button className="btn" onClick={handleClick}>Gnaro</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSelect;