import "./App.css";
import Player from "./Components/Player/Player";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player playerName="Sergio" playerSymbol="X"></Player>        
            <Player playerName="Patricia" playerSymbol="O"></Player>                
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
