import React, { useState } from 'react'; //useState is for hook functions which will provide functionality
import { calculateWinner } from '../helpers/helpers';
import Squares from './Squares';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //initial state is set to an array of 9 null elements
  //useState returns two things
  //here const[board,setBoard] where first element board(random name)
  //is the state and setBoard is the update function
  //in which we will pass a new value on click that will be set as a updated state of board

  //we need another state to keep track of the next player
  //isXNext keeps track of next player and setIsXNext is the update function
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board); //passing the state to the winner function
  console.log(winner);
  const message = winner
    ? `Winner is ${winner}` //if winner is returning any value other than NULL then print winner
    : `Next player is ${isXNext ? 'X' : 'O'}`; //else next player

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
    //first state would be false. Now we will change the state so that true gets printed on the square
    setIsXNext(prevState => !prevState); //this will now change the previous state from false tp true
  };

  const renderSquare = position => {
    return (
      <Squares
        value={board[position]}
        onclick={() => {
          handlesquareclick(position);
        }}
      />
    );
  };

  //3 divs for 3 rows and 3 buttons in each row
  //we pass a function that will call squareclick() function
  return (
    <div className="board">
      <h2>{message}</h2>
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
