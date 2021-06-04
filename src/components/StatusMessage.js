import React from 'react';

//here winner is passed a s a prop from board
const StatusMessage = ({ winner, board, isXNext }) => {
  //.every method iterates over array and for every element it runs the callback function.
  //if for every element the (el) callback function returns true then the whole condition will be set to true
  //if for some element (el) returns false then whole condition will be false
  const tie = board.every(el => el !== null); //check if every position in the board is either X/O.

  //the concept used below is conditional rendering
  // if winner is returning X/O then print winner
  //else if winner is null areturning nd tie is false then next player
  //else if winner is null and tie is true then tie condition
  return (
    <div id="status">
      <h3>
        {winner && `Winner is ${winner}`}
        {!winner && !tie && `Next player is ${isXNext ? 'X' : 'O'}`}
        {!winner && tie && `X and O tied`}
      </h3>
    </div>
  );
};

export default StatusMessage;
