import styled from "styled-components";
import { books } from "./lastReleasesData";
import { Title } from "../Title";
import RecommendationCard from "../RecommendationCard";
import bookImg from "../../assets/images/book-2.png";

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title color="#EB9B00" fontSize="36px">
        ÚLTIMOS LANÇAMENTOS!
      </Title>
      <NewBooksContainer>
        {books.map((book, index) => (
          <img src={book.src} key={index} />
        ))}
      </NewBooksContainer>
      <RecommendationCard
        heading="Talvez você se interesse por"
        subheading="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        img={bookImg}
      />
    </LastReleasesContainer>
  );
}
