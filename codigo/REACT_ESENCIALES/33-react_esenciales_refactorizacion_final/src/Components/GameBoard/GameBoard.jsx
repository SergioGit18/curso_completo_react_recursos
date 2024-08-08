import './GameBoard.css';

const INITIAL_GAME_BOARD = Array.from({ length: 3 }, () => Array(3).fill(null));

export default function GameBoard({ onSelectedSquare, gameTurns }) {

  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  function isWinningSquare(rowIndex, colIndex) {
    if (gameTurns.length > 4 && gameTurns[0].hasWinner) {
      return gameTurns[0].hasWinner.winningCombination.some(
        ({row, column}) => row === rowIndex && column === colIndex
      );
    }
    return false;
  }

  for (const turn of gameTurns) {
    const { square, symbol } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = symbol;
  }

  return (
    <ol id='gameBoard'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  className={
                    isWinningSquare(rowIndex, colIndex) ? 'winningSquare' : ''
                  }
                  onClick={() => {
                    if (gameTurns.length > 4 && gameTurns[0].hasWinner)
                      return false;
                    if (gameBoard[rowIndex][colIndex] === null)
                      onSelectedSquare(rowIndex, colIndex, gameBoard);
                  }}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
