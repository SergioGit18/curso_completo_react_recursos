import './GameBoard.css';
import { useState } from 'react';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare}) {
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

  function handleClickSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard)=> {
      const updatedGameBoard = [...prevGameBoard.map((cols)=> [...cols])];
      console.log(updatedGameBoard);
      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
      // Esta forma no es correcta
      // prevGameBoard[rowIndex][colIndex] = "X";
      // return prevGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleClickSquare(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
