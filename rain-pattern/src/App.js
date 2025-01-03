
import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import './App.css'; // For additional styling if required.

const App = () => {
  // State for rows, columns, and raindrops
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(20);
  const [drops, setDrops] = useState([]);

  // Generate raindrops at intervals
  useEffect(() => {
    const generateDrops = () => {
      const totalCells = rows * columns;
      const newDrops = Array.from({ length: Math.floor(columns / 2) }, () =>
        Math.floor(Math.random() * totalCells)
      );
      setDrops(newDrops);
    };

    const interval = setInterval(generateDrops, 200); // Adjust timing for rain speed
    return () => clearInterval(interval);
  }, [rows, columns]);

  // Input handlers for rows and columns
  const handleRowsChange = (e) => {
    setRows(Number(e.target.value));
  };

  const handleColumnsChange = (e) => {
    setColumns(Number(e.target.value));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Falling Rain Pattern</h1>
        <p>Customize the grid and watch the dynamic rain animation!</p>
      </header>

      {/* Control Panel */}
      <div className="control-panel">
        <label>
          Rows:
          <input
            type="number"
            min="5"
            max="50"
            value={rows}
            onChange={handleRowsChange}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            min="5"
            max="50"
            value={columns}
            onChange={handleColumnsChange}
          />
        </label>
      </div>

      {/* Grid Display */}
      <Grid rows={rows} columns={columns} drops={drops} />

      {/* Footer */}
      <footer className="app-footer">
        <p>Designed with ❤️ using React.js</p>
      </footer>
    </div>
  );
};

export default App;


 


