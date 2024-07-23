function Square({ value, onClick }) {
  const buttonColor =
    value === "x"
      ? "var(--red)"
      : value === "o"
      ? "var(--blue)"
      : "var(--black)";
  return (
    <button style={{ color: buttonColor }} className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
