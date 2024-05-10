import "./App.css";
import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import LogTurns from "./Components/LogTurns/LogTurs.jsx";

import { useState } from 'react';

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectedSquare(rowIndex, colIndex){
    setActivePlayer((lastActivePlayer)=> (activePlayer === 'X') ? 'O' : 'X');
    setGameTurns((prevGameTurns)=>{
      let actualSymbol = 'X';
      if(gameTurns.length > 0 && gameTurns[0].symbol == 'X') actualSymbol = 'O';
      const actualGameTurns = [
        {square: {rowIndex: rowIndex, colIndex: colIndex}, symbol: actualSymbol},
        ...prevGameTurns
      ];

      return actualGameTurns;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer" className="highlight-player">
            <Player initialName="Jugador 1" playerSymbol="X" isActive={activePlayer === 'X'}></Player>        
            <Player initialName="Jugador 2" playerSymbol="O" isActive={activePlayer === 'O'}></Player>                
          </ol>
          <GameBoard activePlayerSymbol={activePlayer} onSelectedSquare={()=>handleSelectedSquare()}/>
        </div>
        <LogTurns/>
      </main>
    </>
  );
}

export default App;
