export default function TabButton({ children, onSelect }) {
    console.log('TABBUTTON COMPONENT RENDERING');

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
