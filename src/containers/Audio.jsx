import React from 'react';

// MP3/4

import yakuza from '../styles/music/Yakuza 0 OST   03 Force Addiction.mp3';
import shoot from '../styles/music/disparo.mp4';
import kamenyameya from '../styles/music/kamenyameya.mp4';
import papotearse from '../styles/music/papotearse.mp4';
import patada from '../styles/music/patada.mp4';
import punch from '../styles/music/punch.mp4';
import recarga from '../styles/music/recarga.mp4';
import hamburgesa from '../styles/music/rica-hamburgesa.mp4';

const Audio = () => {
  return (
    <div style={{display: 'none'}}>
      <audio id="audio" loop controls src={yakuza}>
      </audio>
      <audio id="shoot" src={shoot}>
      </audio>
      <audio id="recharge" src={recarga}>
      </audio>
      <audio id="kamen" src={kamenyameya}>
      </audio>
      <audio id="punch" src={punch}>
      </audio>
      <audio id="kick" src={patada}>
      </audio>
      <audio id="papotearse" src={papotearse}>
      </audio>
      <audio id="rica-hamburgesa" src={hamburgesa}>
      </audio>
    </div>
  );
}

export default Audio;