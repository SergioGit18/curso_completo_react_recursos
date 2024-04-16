import './Player.css';
import { useState } from 'react';

export default function Player({playerName, playerSymbol}) {

  const [isEditing,setIsEditing] = useState(false);

  console.log("Se esta ejecutando el componente Player");

  function handleChangeClick(){
    // Forma correcta
    setIsEditing((isEditing)=> !isEditing);
    //Forma incorrecta
    // setIsEditing(!isEditing);
  }

  const playerNameField = isEditing 
  ? (<input type="text" name="" id="" required defaultValue={playerName}/>)
  : (<span className="player-name">{playerName}</span>);

  const buttonChangeValue = isEditing 
  ? ("Guardar")
  : ("Cambiar");

  return (
    <>
      <li>
        
        <span className="player">
          {playerNameField}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
      </li>
    </>
  );
}
