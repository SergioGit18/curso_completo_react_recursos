import "./App.css";
import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";

import { useState } from 'react';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handlePickedSquare(){
    console.log("Ahora mismo tiene el turno el jugador que utiliza el símbolo: "+activePlayer);
    setActivePlayer((lastActivePlayer)=> (activePlayer === 'X') ? 'O' : 'X');
    console.log("Hemos cambiado el turno, ahora el turno lo tiene el jugador que utiliza el símbolo: "+activePlayer);
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer" className="highlight-player">
            <Player initialName="Jugador 1" playerSymbol="X"></Player>        
            <Player initialName="Jugador 2" playerSymbol="O"></Player>                
          </ol>
          <GameBoard onSelectSquare={()=>handlePickedSquare()}/>
        </div>
      </main>
    </>
  );
}

export default App;
