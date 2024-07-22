import './LogTurns.css';

export default function LogTurns({ playerNames, gameTurns }) {
  let winnerText = function winnerMessage(turn, playerNames){
    return (
      <span>
        👑 El Jugador '
        {turn.symbol == 'X' ? playerNames.name1 : playerNames.name2}' es el
        ganador 👑
      </span>
    );
  };
  return (
    <>
      <ol id='logTurns'>
        {gameTurns.map((turn, index) => {
          const isWinner = turn.hasWinner;
          return (
            <li key={index}>
              <p>Turno {gameTurns.length - index}: </p>
              <p>{isWinner && winnerText(turn, playerNames)}</p>
              <p>
                {turn.symbol == 'X' ? playerNames.name1 : playerNames.name2} ha
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
