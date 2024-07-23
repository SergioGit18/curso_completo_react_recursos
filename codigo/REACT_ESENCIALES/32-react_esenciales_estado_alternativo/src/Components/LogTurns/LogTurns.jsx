import './LogTurns.css';

export default function LogTurns({ playerNames, gameTurns, playerSymbols }) {
  let winnerText = function winnerMessage(turn, playerNames){
    return (
      <span>
        👑 El Jugador '
        {turn.symbol == playerSymbols.symbol1 ? playerNames.name1 : playerNames.name2}'
        es el ganador 👑
      </span>
    );
  };

  let draftText = (
    <span>⚔️ Nadie ha ganado, la partida ha terminado con un empate ⚔️</span>
  );


  return (
    <>
      <ol id='logTurns'>
        {gameTurns.map((turn, index) => {
          debugger;
          const isWinner = turn.hasWinner;
          return (
            <li key={index}>
              <p>Turno {gameTurns.length - index}: </p>
              <p>{isWinner && winnerText(turn, playerNames)}</p>
              <p>{gameTurns.length - index === 9 && !turn.hasWinner && draftText}</p>
              <p>
                {turn.symbol == playerSymbols.symbol1 ? playerNames.name1 : playerNames.name2} ha
                colocado el símbolo '{turn.symbol}' en las coordenadas [
                {turn.square.rowIndex}][{turn.square.colIndex}]
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
