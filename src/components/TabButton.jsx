export default function TabButton(props) {
  function handleClick() {
    console.log("blqblabla");
  }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
