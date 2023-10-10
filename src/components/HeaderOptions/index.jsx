import "./style.css";
export default function HeaderOptions() {
  const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

  return (
    <ul className="options">
      {textOptions.map((text, index) => (
        <li className="option" key={index}>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
