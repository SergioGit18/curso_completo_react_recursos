import reactImage from './assets/react-logo-xs.png';

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

function CoreConcepts(props){
  return <div>
    <img src={props.imagePath} alt="..." />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
}

function App() {
  return (
    <div>
      <Header/>
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
        
        <CoreConcepts imagePath={reactImage}  title="Componentes" description="La característica principal de React para la construcción de la UI en bloques."/>
        
        <CoreConcepts imagePath={reactImage}  title="JSX" description="Retorna contenido HTML potencialmente dinámico que será renderizado para componer la estructura de la UI."/>
        
        <CoreConcepts imagePath={reactImage}  title="Props" description="Proporcionan a los componentes la capacidad de poder tener atributos personalizables para que estos reciban información."/>
        
        <CoreConcepts imagePath={reactImage}  title="States" description="Manejadores de información, cuando encuentran un cambio obligan al componente a re-renderizarse y actualizar la interfaz."/>
        </div>
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;
