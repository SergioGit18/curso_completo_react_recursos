import './LogTurns.css';

export default function LogTurns({ playerNames, gameTurns }) {
  let winnerText = gameTurns.length > 0 && gameTurns[0].hasWinner ? 'Existe un ganador' : '';
  debugger;
  return (
    <>
      <ol id='logTurns'>
        {gameTurns.map((turn, index) => {
          return (
            <li key={index}>
              <p>Turno {gameTurns.length - index}: </p>
              <p>
                {winnerText}
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
