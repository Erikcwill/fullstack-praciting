import profile from "../../assets/images/profile.svg";
import bag from "../../assets/images/bag.svg";
import styled from "styled-components";

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

export default function HeaderIcons() {
  const icons = [profile, bag];
  return (
    <Icons>
      {icons.map((icon, index) => (
        <Icon key={index}>
          <img src={icon}></img>
        </Icon>
      ))}
    </Icons>
  );
}
