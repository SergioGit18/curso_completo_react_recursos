import './Player.css';
import { useState } from 'react';

export default function Player({initialName, playerSymbol}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing,setIsEditing] = useState(false);

  function handleChangeClick(){
    // Forma correcta
    setIsEditing((isEditing)=> !isEditing);
    //Forma incorrecta
    // setIsEditing(!isEditing);
  }

  function handleNameChange(event){
    setPlayerName(event.target.value);
  }

  const playerNameField = isEditing 
  ? (<input type="text" name="" id="" required value={playerName} onChange={(event)=>handleNameChange(event)}/>)
  : (<span className="player-name">{playerName}</span>);

  const buttonChangeValue = isEditing 
  ? ("Guardar")
  : ("Cambiar");

  return (
    <>
      <li className='active'>    
        <span className="player">
          {playerNameField}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
      </li>
    </>
  );
}
