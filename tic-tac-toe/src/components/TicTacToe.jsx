import { useState } from "react";
import Square from "./Square";

function TicTacToe() {
  const initialItems = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const [data, setData] = useState(initialItems);
  const handleClick = (rowIndex, colIndex) =>
    SetSquare(rowIndex, colIndex, data);

  const board = data.map((row, rowIndex) => (
    <div key={rowIndex} className="board-row">
      {row.map((cell, colIndex) => (
        <Square
          key={colIndex}
          value={cell}
          onClick={() => setData(handleClick(rowIndex, colIndex))}
        />
      ))}
    </div>
  ));

  return <div className="board">{board}</div>;
}

export default TicTacToe;

function SetSquare(rowIndex, colIndex, data) {
  const newDate = data.map((row, rIndex) =>
    row.map((cell, cIndex) => {
      if (rIndex === rowIndex && cIndex === colIndex) {
        return "x";
      }
      return cell;
    })
  );
  return newDate;
}
