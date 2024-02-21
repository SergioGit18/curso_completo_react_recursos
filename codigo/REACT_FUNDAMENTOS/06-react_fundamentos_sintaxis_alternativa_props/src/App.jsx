import reactImage from './assets/react-logo-xs.png';


import { CORE_CONCEPTS } from './data.js'; 

const reactTitles = ['React Fundamentos', 'React Bases', 'React Principios'];

function getRandomIntInRange(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
  const titleWinner = reactTitles[getRandomIntInRange(0, 2)];

  return (
    <header>
      <img src={reactImage} alt="React logo" />
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

function CoreConcepts({imagePath, title, description}){
  return <div>
    <img src={imagePath} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
}

function App() {
  return (
    <div>
      <Header/>
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
        
        <CoreConcepts {...CORE_CONCEPTS[0]}/>
        <CoreConcepts {...CORE_CONCEPTS[1]}/>
        <CoreConcepts {...CORE_CONCEPTS[2]}/>
        <CoreConcepts imagePath={CORE_CONCEPTS[3].imagePath}  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
        
       
        </div>
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;
