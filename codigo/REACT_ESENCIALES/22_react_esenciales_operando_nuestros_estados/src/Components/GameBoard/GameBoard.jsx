import './GameBoard.css';
import { useState } from 'react';

const INITIAL_GAME_BOARD = [];
for (let index = 0; index <= 2; index++) INITIAL_GAME_BOARD.push(Array(3).fill(null));


export default function GameBoard({onSelectedSquare}) {


  return (
    <ol id="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> {
                  if(gameBoard[rowIndex][colIndex] === null) onSelectedSquare(rowIndex, colIndex)}
                }>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
