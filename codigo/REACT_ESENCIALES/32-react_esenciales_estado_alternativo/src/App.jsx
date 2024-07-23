import './App.css';
import Player from './Components/Player/Player.jsx';
import GameBoard from './Components/GameBoard/GameBoard.jsx';
import LogTurns from './Components/LogTurns/LogTurns.jsx';
import GameOver from './Components/GameOver/GameOver.jsx';
import { WINNING_COMBINATIONS } from './data/winningCombination.js';

import { useState } from 'react';

function App() {
  function setActivePlayer(gameTurns, playerSymbols) {
    let activePlayer = playerSymbols.symbol1;
    activePlayer =
      gameTurns.length > 0 && gameTurns[0].symbol == playerSymbols.symbol1
        ? playerSymbols.symbol2
        : playerSymbols.symbol1;
    
      if(gameTurns.length > 4 && gameTurns[0].hasWinner) activePlayer = gameTurns[0].symbol;
    return activePlayer;
  }

  function setHasWinner(prevGameTurns, newGameBoard) {

    if (prevGameTurns.length < 4) return false;

    if (prevGameTurns.length >= 4) {
      for (const combination of WINNING_COMBINATIONS) {
        let symbolsWinner = {
          firstSymbol: newGameBoard[combination[0].row][combination[0].column],
          secondSymbol: newGameBoard[combination[1].row][combination[1].column],
          thirdSymbol: newGameBoard[combination[2].row][combination[2].column],
        };

        if (
          symbolsWinner.firstSymbol &&
          symbolsWinner.firstSymbol === symbolsWinner.secondSymbol &&
          symbolsWinner.secondSymbol === symbolsWinner.thirdSymbol
        ) {
          return {isWinner: true, winningCombination: combination};
        }
      }

      return false
    }
  }

  const [gameTurns, setGameTurns] = useState([]);
  
  const [playerNames, setPlayerNames] = useState({
    name1: 'Jugador 1',
    name2: 'Jugador 2',
  });

  const [playerSymbols, setPlayerSymbols] = useState({
    symbol1: 'X',
    symbol2: 'O',
  });

  const activePlayer = setActivePlayer(gameTurns, playerSymbols);

  function handleChangeName(event, nameKey) {
    setPlayerNames((...prevPlayerNames) => {
      const prevsPlayerNames = { ...prevPlayerNames };
      const otherKey = nameKey === 'name1' ? 'name2' : 'name1';
      const newPlayerNames = {
        [nameKey]: event.target.value,
        [otherKey]: prevsPlayerNames[0][otherKey],
      };

      return newPlayerNames;
    });
  }

    function handleChangeSymbol(event, symbolKey, gameTurnsLength) {
      setPlayerSymbols((...prevPlayerSymbols) => {
        const prevsPlayerSymbols = { ...prevPlayerSymbols };
        const otherKey = symbolKey === 'symbol1' ? 'symbol2' : 'symbol1';
        const newPlayerSymbols = {
          [symbolKey]: event.target.value,
          [otherKey]: prevsPlayerSymbols[0][otherKey],
        };

        debugger;
        if(gameTurnsLength > 1){
          alert("Los símbolos solo se pueden cambiar en el primer turno de cada jugador");
          return prevsPlayerSymbols[0];
        }

        if (newPlayerSymbols.symbol1 === newPlayerSymbols.symbol2) {
          alert('Los símbolos no pueden ser iguales');
          return prevsPlayerSymbols[0];
        } 
        
        return newPlayerSymbols;
      });
    }


  function handleSelectedSquare(rowIndex, colIndex, gameBoard) {
    setGameTurns((prevGameTurns) => {
      const actualSymbol = setActivePlayer(prevGameTurns, playerSymbols);
      let newGameBoard = [...gameBoard];
      newGameBoard[rowIndex][colIndex] = actualSymbol;
      const hasWinner = setHasWinner(prevGameTurns, gameBoard);

      const actualGameTurns = [
        {
          square: { rowIndex: rowIndex, colIndex: colIndex },
          symbol: actualSymbol,
          hasWinner: hasWinner,
        },
        ...prevGameTurns,
      ];
      return actualGameTurns;
    });
  }

  function handleRestartGame(){
    setGameTurns([]);
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
              onChangeSymbol={handleChangeSymbol}
              keySymbol='symbol1'
              playerSymbol={playerSymbols.symbol1}
              gameTurnsLength={gameTurns.length}
              isActive={activePlayer === playerSymbols.symbol1}></Player>           
            <Player
              namePlayer={playerNames.name2}
              onChangeName={handleChangeName}
              keyName='name2'
              onChangeSymbol={handleChangeSymbol}
              keySymbol='symbol2'
              playerSymbol={playerSymbols.symbol2}
              gameTurnsLength={gameTurns.length}
              isActive={activePlayer === playerSymbols.symbol2}></Player>
          </ol>
          {gameTurns.length > 4 && gameTurns[0].hasWinner && (
            <GameOver
              title='¡Revancha!'
              handleRestartGame={handleRestartGame}></GameOver>
          )}
          {gameTurns.length > 8 && !gameTurns[0].hasWinner && (
            <GameOver
              title='¡Otra partida!'
              handleRestartGame={handleRestartGame}></GameOver>
          )}
          <GameBoard
            gameTurns={gameTurns}
            onSelectedSquare={handleSelectedSquare}
          />
        </div>
        <LogTurns
          playerNames={playerNames}
          playerSymbols={playerSymbols}
          gameTurns={gameTurns}
        />
      </main>
    </>
  );
}

export default App;
