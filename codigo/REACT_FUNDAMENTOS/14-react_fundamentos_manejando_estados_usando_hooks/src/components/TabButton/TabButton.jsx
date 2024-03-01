import './TabButton.css';
export default function TabButton({children, onClick}) {

  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}
