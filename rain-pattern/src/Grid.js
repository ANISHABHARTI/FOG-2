import React from 'react';
import './Grid.css'; // Create this CSS file for styling

const Grid = ({ rows, columns, drops }) => {
  return (
    <div
      className="grid-container"
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 20px)`,
        gridTemplateColumns: `repeat(${columns}, 20px)`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div
          key={index}
          className={`grid-cell ${drops.includes(index) ? 'rain' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default Grid;