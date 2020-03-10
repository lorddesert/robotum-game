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
import zarandeada from '../styles/music/zarandeada.mp3';
import rompecuellos from '../styles/music/rompecuellos.ogg';
import tramontina from '../styles/music/tramontina.ogg';
import deathSound from '../styles/music/deathSound.mp3';
import ending from '../styles/music/ending.mp3';

const Audio = () => {
  return (
    <div style={{display: 'none'}}>
      <audio id="audio" loop controls src={yakuza}>
      </audio>
      <audio id="deathSound" controls src={deathSound}>
      </audio>
      <audio id="ending" controls src={ending}>
      </audio>
      <audio id="rompecuellos" controls src={rompecuellos}>
      </audio>
      <audio id="tramontina" controls src={tramontina}>
      </audio>
      <audio id="zarandeada" controls src={zarandeada}>
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