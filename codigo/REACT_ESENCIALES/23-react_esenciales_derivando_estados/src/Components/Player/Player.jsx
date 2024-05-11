import './Player.css';
import { useState } from 'react';

export default function Player({initialName, playerSymbol, isActive}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing,setIsEditing] = useState(false);

  function handleClickButton(){
    setIsEditing((isEditing)=> !isEditing);
  }

  function handleChangeName(event){
    setPlayerName(event.target.value);
  }

  const playerNameField = isEditing 
  ? (<input type="text" name="" id="" required value={playerName} onChange={(event)=>handleChangeName(event)}/>)
  : (<span className="player-name">{playerName}</span>);

  const buttonChangeValue = isEditing 
  ? ("Guardar")
  : ("Cambiar");

  return (
    <>
      <li className={isActive ? 'active': undefined}>    
        <span className="player">
          {playerNameField}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={()=>handleClickButton()}>{buttonChangeValue}</button>
      </li>
    </>
  );
}
