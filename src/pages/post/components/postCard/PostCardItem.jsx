import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import { getUserPaper } from "./api";
export function PostCardItem() {
  const [cardData, setCardData] = useState([]);

  async function handleCardData() {
    const jsonData = await getUserPaper();
    const paperData = jsonData.results;
    setCardData(paperData);
  }

  useEffect(() => {
    handleCardData();
  }, []);

  return (
    <>
      {console.log(cardData)}
      {cardData.map((el) => (
        <S.CardItem key={el.id}>
          <S.CardHeader>
            <S.ProfileImage
              src={el.profileImageURL}
              alt="이미지"
            ></S.ProfileImage>
            <S.CardHeaderContainer>
              <S.CardHeaderName>
                <S.From>From.</S.From>
                <S.Name>{el.sender}</S.Name>
              </S.CardHeaderName>
              <S.Relationship>가족</S.Relationship>
            </S.CardHeaderContainer>
            <S.DeleteButton>
              <img src={`/assets/post/deleted.svg`} alt="삭제휴지통"></img>
            </S.DeleteButton>
          </S.CardHeader>
          <S.Content>{el.content}</S.Content>
          <S.Data>2023.02.02</S.Data>
        </S.CardItem>
      ))}
    </>
  );
}
