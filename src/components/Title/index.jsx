import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  color: ${({ color }) => color || "#000000"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  margin: 0;
`;
