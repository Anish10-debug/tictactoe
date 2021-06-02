import React from 'react';

const Squares = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Squares;
