import styled from "styled-components";
import { Title } from "../Title";

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  max-width: 300px;
`;

const SubHeading = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgBook = styled.img`
  width: 150px;
`;

export default function RecommendationCard({
  heading,
  subheading,
  description,
  img,
}) {
  return (
    <Card>
      <div>
        {" "}
        <Title color="#EB9B00" fontSize="16px" $textAlign="left">
          {heading}
        </Title>
        <SubHeading>{subheading}</SubHeading>
        <Description>{description}</Description>
      </div>
      <div>
        {" "}
        <ImgBook src={img}></ImgBook>
        <Button>Saiba Mais!</Button>
      </div>
    </Card>
  );
}
