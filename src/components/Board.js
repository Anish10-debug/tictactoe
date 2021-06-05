import React, { useState } from 'react'; //useState is for hook functions which will provide functionality
import { calculateWinner } from '../helpers/helpers';
import Squares from './Squares';
import StatusMessage from './StatusMessage';

const Board = () => {
  const renderSquare = position => {
    const isWinningSquare = winningSquares.includes(position); //if the position of the winning squares matches the position
    return (
      <Squares
        value={board[position]}
        onclick={() => handlesquareclick(position)}
        isWinningSquare={isWinningSquare} //use this as a prop in Squares.js for highlighting
      />
    );
  };

  const NEWGAME = Array(9).fill(null); //an array of 9 null elements
  const [board, setBoard] = useState(NEWGAME); //initial state is set to an array of 9 null elements
  //useState returns two things
  //here const[board,setBoard] where first element board(random name)
  //is the state and setBoard is the update function
  //in which we will pass a new value on click that will be set as a updated state of board

  //we need another state to keep track of the next player
  //isXNext keeps track of next player and setIsXNext is the update function
  const [isXNext, setIsXNext] = useState(true);

  const { winner, winningSquares } = calculateWinner(board); //passing the state to the winner function

  //console.log(board); you will see the value of a square after click in the console

  //this function will set the previous state by using a callback function
  const handlesquareclick = position => {
    if (board[position] || winner) {
      //check if the position is already filled or winner is already found. If yes then exit from the squareclick function
      return;
    }
    //here we change the current state which is named as either current or prev
    setBoard(prevState => {
      //we need to map the previous array to new values
      return prevState.map((Squares, pos) => {
        //if position of currently iterated square is equal to the currently clicked square then X/O
        if (pos === position) {
          return isXNext ? 'X' : 'O'; //check if the current state(isXNext) is true or or not.
        }
        return Squares;
      });
    });
    //first state would be false. Now we will change the state so that X/O gets printed on the square
    setIsXNext(prevState => !prevState); //this will now change the previous state from false to true
  };

  //if we want to start a new game
  const onNewGame = () => {
    setBoard(NEWGAME);
  };

  //here in the newgame button we have done string interpolation
  //if there is a winner only then the active class of btn-reset class will be applied
  return (
    <div className="board">
      <StatusMessage winner={winner} board={board} isXNext={isXNext} />
      <button
        id="newgame"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
