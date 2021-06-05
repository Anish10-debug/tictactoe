import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
const App = () => {
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <div className="bg-balls" />
      <Board />
    </div>
  );
};

export default App;
