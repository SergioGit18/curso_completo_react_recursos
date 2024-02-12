const reactTitles = ['React Fundamentos', 'React Bases', 'React Principios'];

function getRandomIntInRange(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
  const titleWinner = reactTitles[getRandomIntInRange(0, 2)];

  return (
    <header>
      <img src="src/assets/react-logo-xs.png" alt="React logo" />
      <h1>{titleWinner}</h1>
      {/* De esta forma podríamos hacerlo directamente en una línea
      <h1>{reactTitles[getRandomIntInRange(0, 2)]}</h1> */}
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;
