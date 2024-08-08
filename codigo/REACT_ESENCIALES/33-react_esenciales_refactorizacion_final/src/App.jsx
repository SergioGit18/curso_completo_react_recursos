import './App.css';
import Player from './Components/Player/Player.jsx';
import GameBoard from './Components/GameBoard/GameBoard.jsx';
import LogTurns from './Components/LogTurns/LogTurns.jsx';
import GameOver from './Components/GameOver/GameOver.jsx';
import { WINNING_COMBINATIONS } from './data/winningCombination.js';

import { useState } from 'react';

function setActivePlayer(gameTurns, playerSymbols) {
  if (gameTurns.length === 0) {
    return playerSymbols.symbol1;
  }

  if (gameTurns.length > 4 && gameTurns[0].hasWinner) {
    return gameTurns[0].symbol;
  }

  return gameTurns[0].symbol === playerSymbols.symbol1
    ? playerSymbols.symbol2
    : playerSymbols.symbol1;
}

function setHasWinner(prevGameTurns, newGameBoard) {
  if (prevGameTurns.length >= 4) {
    for (const combination of WINNING_COMBINATIONS) {
      const [first, second, third] = combination;

      const [firstSymbol, secondSymbol, thirdSymbol] = [
        newGameBoard[first.row][first.column],
        newGameBoard[second.row][second.column],
        newGameBoard[third.row][third.column],
      ];

      if (
        firstSymbol &&
        firstSymbol === secondSymbol &&
        secondSymbol === thirdSymbol
      ) {
        return { isWinner: true, winningCombination: combination };
      }
    }
    return false;
  }
  return false;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [playerNames, setPlayerNames] = useState({
    name1: 'Jugador 1',
    name2: 'Jugador 2',
  });

  const [playerSymbols, setPlayerSymbols] = useState({
    symbol1: 'X',
    symbol2: 'O',
  });

  function handleChangeName(event, nameKey) {
    setPlayerNames((prevPlayerNames) => {
      const otherKey = nameKey === 'name1' ? 'name2' : 'name1';
      const newPlayerNames = {
        ...prevPlayerNames,
        [nameKey]: event.target.value,
        [otherKey]: prevPlayerNames[otherKey],
      };

      return newPlayerNames;
    });
  }

  function handleChangeSymbol(event, symbolKey, gameTurnsLength) {
    setPlayerSymbols((prevPlayerSymbols) => {
      const otherKey = symbolKey === 'symbol1' ? 'symbol2' : 'symbol1';
      const newPlayerSymbols = {
        ...prevPlayerSymbols,
        [symbolKey]: event.target.value,
        [otherKey]: prevPlayerSymbols[otherKey],
      };

      if (gameTurnsLength > 1) {
        alert(
          'Los símbolos solo se pueden cambiar en el primer turno de cada jugador'
        );
        return prevsPlayerSymbols;
      }

      if (newPlayerSymbols.symbol1 === newPlayerSymbols.symbol2) {
        alert('Los símbolos no pueden ser iguales');
        return prevsPlayerSymbols;
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

  function handleRestartGame() {
    setGameTurns([]);
  }

  const activePlayer = setActivePlayer(gameTurns, playerSymbols);

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
