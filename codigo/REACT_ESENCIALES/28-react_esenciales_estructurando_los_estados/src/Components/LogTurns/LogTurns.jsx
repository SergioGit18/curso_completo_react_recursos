import './LogTurns.css'

export default function LogTurns({ playerNames, gameTurns }) {
  return (
    <>
      <ol id='logTurns'>
        {gameTurns.map((turn, index) => {
          return (
            <li key={index}>
              <p>Turno {gameTurns.length - index}: </p>
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
