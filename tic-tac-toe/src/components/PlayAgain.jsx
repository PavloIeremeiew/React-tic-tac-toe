function PlayAgain({ isWin }) {
  if (isWin)
    return (
      <button className="againButton" onClick={() => window.location.reload()}>
        Play Again
      </button>
    );
}

export default PlayAgain;
