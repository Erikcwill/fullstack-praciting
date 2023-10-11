import styled from "styled-components";
import logo from "./logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer className="logo">
      <LogoImage
        className="logo-img"
        src={logo}
        alt="Logo do AluraBooks"
      ></LogoImage>
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}
