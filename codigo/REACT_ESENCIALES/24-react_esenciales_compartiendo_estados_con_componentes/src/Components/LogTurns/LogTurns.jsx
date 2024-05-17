import './LogTurns.css'

export default function LogTurns({gameTurns}) {
  return (
    <>
      <ol id="logTurns">
        {gameTurns.map((turn, index)=>{
          return (
            <li key={index}>
              <p>Turno {(gameTurns.length - index)}: </p>
              <p>
                Jugador 1 ha colocado el símbolo '{turn.symbol}' en las
                coordenadas [{turn.square.rowIndex}][{turn.square.colIndex}]
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
