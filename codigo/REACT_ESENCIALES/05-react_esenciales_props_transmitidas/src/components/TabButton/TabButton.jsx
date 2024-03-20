import './TabButton.css';
export default function TabButton({children, title, ...events}) {

  return (
    <li title={title}>
      <button {...events}>{children}</button>
    </li>
  );
}
