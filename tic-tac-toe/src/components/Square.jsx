function Square({ value, onClick }) {
  const buttonColor = value==="x"? "#df1515" : value==="o"? "#007bff" :"#000000";
  return <button style={{ color: buttonColor }} className="square" onClick={onClick}>{value} </button>;
}

export default Square;
