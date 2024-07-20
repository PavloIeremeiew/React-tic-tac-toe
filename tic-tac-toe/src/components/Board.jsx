import Square from "./Square";
function Board({ data, handleClick }) {
  const board = data.map((row, rowIndex) => (
    <div key={rowIndex} className="board-row">
      {row.map((cell, colIndex) => (
        <Square
          key={colIndex}
          value={cell}
          onClick={() => handleClick(rowIndex, colIndex, cell)}
        />
      ))}
    </div>
  ));

  return <div className="board">{board}</div>;
}

export default Board;
