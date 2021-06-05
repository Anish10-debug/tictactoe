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
  //instead of using simple string interpolation we have used a wrapper(react fragment) for applying the css
  //an empty bracket after 'Winner is' is for space
  return (
    <div id="status">
      <h3>
        {winner && (
          <>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </>
        )}
        {!winner && !tie && (
          <>
            Next player is{' '}
            <span className={isXNext ? 'text-green' : 'text-orange'}>
              {isXNext ? 'X' : 'O'}{' '}
            </span>
          </>
        )}
        {!winner && tie && (
          <>
            <span className="text-green">X</span> and{' '}
            <span className="text-orange">O</span> tied
          </>
        )}
      </h3>
    </div>
  );
};

export default StatusMessage;
