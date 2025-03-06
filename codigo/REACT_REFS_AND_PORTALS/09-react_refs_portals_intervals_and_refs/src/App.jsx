import Player from './Components/Player.jsx';
import TimerContainer from './Components/TimerContainer.jsx';
import Timer from './Components/Timer.jsx';

function App() {
  return (
    <>
      <Player></Player>
      <TimerContainer>
        <Timer title="Nivel Fácil" time="3"></Timer>
        <Timer title="Nivel Intermedio" time="5"></Timer>
        <Timer title="Nivel Difícil" time="40"></Timer>
        <Timer title="Nivel Reto" time="60"></Timer>
      </TimerContainer>
    </>
  );
}

export default App;
