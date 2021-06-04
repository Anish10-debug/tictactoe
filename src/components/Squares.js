import React from 'react';

const Squares = ({ value, onclick }) => {
  return (
    <button type="button" className="square" onClick={onclick}>
      {value}
    </button>
  ); //props are passed here as value (returns text as value) and onclick from board
};

export default Squares;
