import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from "./searchData";
import { Title } from "../Title";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;
export default function Search() {
  const [searchedBook, setSearchedBook] = useState([]);

  return (
    <SearchContainer>
      {" "}
      <Title color="#fff" fontSize="36px">
        Já sabe por onde começar?
      </Title>
      <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const typedText = event.target.value;
          const searchResult = books.filter((book) =>
            book.name.includes(typedText)
          );
          setSearchedBook(searchResult);
        }}
      />
      {searchedBook.map((book, index) => (
        <Results key={index}>
          <p>{book.name}</p>
          <img src={book.src}></img>
        </Results>
      ))}
    </SearchContainer>
  );
}
