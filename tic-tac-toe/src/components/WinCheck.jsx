function WinCheck({ data, win, setWhoWin }) {
  if (win === "x") {
    return <h2 style={{ color: "var(--red)" }}>X Win</h2>;
  }
  if (win === "o") {
    return <h2 style={{ color: "var(--blue)" }}>O Win</h2>;
  }
  if (win === "draw") {
    return <h2 style={{ color: "var(--black)" }}>Draw</h2>;
  }
  const checks = [horizontalCheck, verticalCheck, diagonalCheck, drawCheck];
  for (let i = 0; i < 4; i++) {
    const check = checks[i](data);
    if (check !== String.empty) {
      setWhoWin(check);
      break;
    }
  }
}

export default WinCheck;

function horizontalCheck(data) {
  for (let i = 0; i < 3; i++) {
    if (
      data[i][0] === data[i][1] &&
      data[i][1] === data[i][2] &&
      data[i][0] !== String.empty
    )
      return data[i][0];
  }
  return String.empty;
}
function verticalCheck(data) {
  for (let i = 0; i < 3; i++) {
    if (
      data[0][i] === data[1][i] &&
      data[1][i] === data[2][i] &&
      data[1][i] !== String.empty
    )
      return data[0][i];
  }
  return String.empty;
}
function diagonalCheck(data) {
  if (
    (data[0][0] === data[1][1] && data[1][1] === data[2][2]) ||
    (data[2][0] === data[1][1] && data[1][1] === data[0][2])
  )
    return data[1][1];
  return String.empty;
}

function drawCheck(data) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (data[i][j] === String.empty) return String.empty;
    }
  }
  return "draw";
}
