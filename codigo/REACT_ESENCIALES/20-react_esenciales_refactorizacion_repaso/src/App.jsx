import "./App.css";
import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";

import { useState } from 'react';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectedSquare(){
    setActivePlayer((lastActivePlayer)=> (activePlayer === 'X') ? 'O' : 'X');
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
      </main>
    </>
  );
}

export default App;
