import './GameBoard.css';

const GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="gameBoard">
      {GAME_BOARD.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button>X</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
