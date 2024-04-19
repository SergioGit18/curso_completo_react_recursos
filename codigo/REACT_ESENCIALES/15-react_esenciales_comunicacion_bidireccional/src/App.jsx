import "./App.css";
import Player from "./Components/Player/Player.jsx";


function App() {


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer">
            <Player initialName="Jugador 1" playerSymbol="X"></Player>        
            <Player initialName="Jugador 2" playerSymbol="O"></Player>                
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
