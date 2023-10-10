import "./style.css";
import profile from "../../assets/images/profile.svg";
import bag from "../../assets/images/bag.svg";

export default function HeaderIcons() {
  const icons = [profile, bag];
  return (
    <ul className="icons">
      {icons.map((icon, index) => (
        <li className="icon" key={index}>
          <img src={icon}></img>
        </li>
      ))}
    </ul>
  );
}
