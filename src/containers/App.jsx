import React from 'react';

//Components
import Display from './Display';
import Header from './Header';
import Footer from './Footer';
import Audio from './Audio';

function handleCLick(e) {
  e.preventDefault();
  e.persist();
  console.log("asd");
  console.log(e);
}

const App = () => {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-content'>
          {/* <Header /> */}
          <Audio />
          <Display />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;