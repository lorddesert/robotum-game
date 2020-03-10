import React from 'react';

const Credits = () => {
  return (
    <div className="Credits-container">
      <div className="Credits-content">
        <div className="Credits">
          <section>
            <h3>Programadores</h3>
            <span>
              Sacha y
              Sacha
            </span>
          </section>
          <section>
              <h3>Artistas</h3>
              <span>
                Sacha
              </span>
          </section>
          <section>
            <h3>Ing. de audio</h3>
            <span>Sacha</span>
          </section>
          <section>
            <h3>Escritores</h3>
            <span>
            Sacha<br />
            Gnaro<br />
            Nitsuga
            </span>
          </section>
          <section id="testers">
            <h3>Testers</h3>
            <span>
              Wox Wox <br />
              Color Colorido <br />
            </span>
          </section>
          <section id="thanks">
            <span>¡Gracias por jugar!</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Credits;