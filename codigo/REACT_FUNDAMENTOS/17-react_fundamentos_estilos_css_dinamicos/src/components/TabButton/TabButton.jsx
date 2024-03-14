import './TabButton.css';
export default function TabButton({children, onClick, isSelected}) {

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onClick}>{children}</button>
    </li>
  );
}
