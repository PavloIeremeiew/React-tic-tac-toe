import { useState } from "react";
import Board from "./Board";
import WinCheck from "./WinCheck";
import PlayAgain from "./PlayAgain";

function TicTacToe() {
  const initialItems = [
    [String.empty, String.empty, String.empty],
    [String.empty, String.empty, String.empty],
    [String.empty, String.empty, String.empty],
  ];
  const [data, setData] = useState(initialItems);
  const [isX, setIsX] = useState(true);
  const [whoWin, setWhoWin] = useState(String.empty);

  const handleClick = (rowIndex, colIndex, cell) => {
    if (cell === String.empty && whoWin == String.empty) {
      setData(SetSquare(rowIndex, colIndex, data, isX));
      setIsX(!isX);
    }
  };

  return (
    <div className="board">
      <WinCheck data={data} win={whoWin} setWhoWin={setWhoWin} />
      <Board data={data} handleClick={handleClick} />
      <PlayAgain isWin={whoWin !== String.empty} />
    </div>
  );
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
