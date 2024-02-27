import './TabButton.css';
export default function TabButton({children}) {
  function handleClick(){
    console.log("Ey! Estas pulsando sobre uno de los botones del menu!");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
