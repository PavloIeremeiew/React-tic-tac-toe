import { useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const initialItems = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const [data, setData] = useState(initialItems);
  const [isX, setIsX] = useState(true);
  const handleClick = (rowIndex, colIndex, cell) => {
    if (cell === " ") {
      setData(SetSquare(rowIndex, colIndex, data, isX));
      setIsX(!isX);
    }
  };

  return <Board data={data} handleClick={handleClick} />;
}

export default TicTacToe;

function SetSquare(rowIndex, colIndex, data, isX) {
  const newDate = data.map((row, rIndex) =>
    row.map((cell, cIndex) => {
      if (rIndex === rowIndex && cIndex === colIndex) {
        return isX ? "x" : "o";
      }
      return cell;
    })
  );
  return newDate;
}
