import "./App.css";
import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import LogTurns from "./Components/LogTurns/LogTurns.jsx";

import { useState } from 'react';

function App() {

  function setActivePlayer(gameTurns){
    let activePlayer = 'X';
    activePlayer = gameTurns.length > 0 && gameTurns[0].symbol == 'X' ? 'O' : 'X';
    return activePlayer;
  }

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = setActivePlayer(gameTurns);
  const [playerNames, setPlayerNames] = useState({
    name1: 'Jugador 1',
    name2: 'Jugador 2',
  });

  function handleChangeName(event, nameKey){
    setPlayerNames((...prevPlayerNames)=>
      {
        debugger;
        const prevsPlayerNames = { ...prevPlayerNames };
        const otherKey = nameKey === 'name1' ? 'name2' : 'name1';
        const newPlayerNames = {
          [nameKey]: event.target.value,
          [otherKey]: prevsPlayerNames[0][otherKey],
        };

        return newPlayerNames;

      }  
    );
  }

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const actualSymbol = setActivePlayer(prevGameTurns);
      const actualGameTurns = [
        {
          square: { rowIndex: rowIndex, colIndex: colIndex },
          symbol: actualSymbol,
        },
        ...prevGameTurns,
      ];

      return actualGameTurns;
    });
  }

  return (
    <>
      <main>
        <div id='game-container'>
          <ol
            id='playersContainer'
            className='highlight-player'>
            <Player
              namePlayer={playerNames.name1}
              onChangeName={handleChangeName}
              keyName='name1'
              playerSymbol='X'
              isActive={activePlayer === 'X'}></Player>
            <Player
              namePlayer={playerNames.name2}
              onChangeName={handleChangeName}
              keyName='name2'
              playerSymbol='O'
              isActive={activePlayer === 'O'}></Player>
          </ol>
          <GameBoard
            gameTurns={gameTurns}
            onSelectedSquare={handleSelectedSquare}
          />
        </div>
        <LogTurns playerNames={playerNames} gameTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
