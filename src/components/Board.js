import React, { useState } from 'react'; //useState is for hook functions which will provide functionality
import Squares from './Squares';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //initial state is set to an array of 9 null elements
  //useState returns two things
  //here const[board,setBoard] where first element board(random name)
  //is the state and setBoard is the update function
  //i.e. we will pass a new value on click that will be set as a state

  //we need another state to keep track of the next player
  //isXNext keeps track of next player and setIsXNext is the update function
  const [isXNext, setIsXNext] = useState(false);

  //console.log(board); you will see the value of a square after click in the console

  //this function will set the previous state by using a callback function
  //we need to map the previous array to new values
  //if position of currently iterated square is equal to the currently clicked square then X
  //here we change the current state which is named as either current or prev
  const handlesquareclick = position => {
    if (board[position]) {
      //check if the position is already filled. If yes then exit from the squareclick function
      return;
    }
    setBoard(prevState => {
      return prevState.map((Squares, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O'; //check if the current state is X or not.
        }
        return Squares;
      });
    });
    //first state would be false. Now we will change the state so that true gets printed on the square
    setIsXNext(prevState => !prevState); //this will now change the previous state
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
