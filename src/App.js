import React from 'react';

import Header from './components/header';
import Slider from './components/slider';
import Portfolio from './components/portfolio';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Portfolio />
    </div>
  );
}

export default App;
