import './Player.css';
import { useState } from 'react';

export default function Player({ namePlayer, onChangeName, keyName, playerSymbol, isActive }) {
  debugger;
  const [isEditing, setIsEditing] = useState(false);

  function handleClickButton() {
    setIsEditing((isEditing) => !isEditing);
  }

  const playerNameField = isEditing ? (
    <input
      type='text'
      name=''
      id=''
      required
      value={namePlayer}
      onChange={(event) => onChangeName(event, keyName)}
    />
  ) : (
    <span className='player-name'>{namePlayer}</span>
  );

  const buttonChangeValue = isEditing ? 'Guardar' : 'Cambiar';

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className='player'>
          {playerNameField}
          <span className='player-symbol'>{playerSymbol}</span>
        </span>
        <button onClick={() => handleClickButton()}>{buttonChangeValue}</button>
      </li>
    </>
  );
}
