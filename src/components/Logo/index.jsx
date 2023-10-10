import logo from "./logo.svg";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="Logo do AluraBooks"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}
