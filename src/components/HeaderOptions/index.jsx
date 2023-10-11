import styled from "styled-components";

const Opitions = styled.ul`
  display: flex;
`;

const Opition = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  cursor: pointer;
`;

export default function HeaderOptions() {
  const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

  return (
    <Opitions>
      {textOptions.map((text, index) => (
        <Opition key={index}>
          <p>{text}</p>
        </Opition>
      ))}
    </Opitions>
  );
}
