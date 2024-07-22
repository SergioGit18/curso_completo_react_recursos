import './GameOver.css';

export default function GameOver({ handleRestartGame, title }) {
  return (
    <div id='gameOver'>
      <p>
        <button onClick={handleRestartGame}>{title}</button>
      </p>
    </div>
  );
}