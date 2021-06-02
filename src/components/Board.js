import React from 'react';
import Squares from './Squares';
//3 divs for 3 rows and 3 buttons in each row
const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Squares value={0} />
        <Squares value={1} />
        <Squares value={2} />
      </div>

      <div className="board-row">
        <Squares value={3} />
        <Squares value={4} />
        <Squares value={5} />
      </div>

      <div className="board-row">
        <Squares value={6} />
        <Squares value={7} />
        <Squares value={8} />
      </div>
    </div>
  );
};

export default Board;
