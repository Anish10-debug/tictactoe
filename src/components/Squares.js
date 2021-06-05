import React from 'react';

const Squares = ({ value, onclick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  ); //props are passed here as value (returns text as value) and onclick from board
};

export default Squares;
