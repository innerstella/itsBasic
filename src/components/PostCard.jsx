import { useState } from "react";
import * as S from "./PostCardStyle";

async function getCardData() {
  const response = await fetch();
  const body = await response.json();
  return body;
}
function PostCard() {
  const [CardData, setCardData] = useState([]);

  return (
    <S.PostCardBackgroud>
      <S.CardGrid>
        <S.CardPlus>
          <S.PlusButton href="https://www.google.com/" as="a">
            <img alt="플러스이미지" src={`/assets/post/plus.svg`}></img>
          </S.PlusButton>
        </S.CardPlus>

        <S.CardItem>
          <S.CardHeader>
            <S.ProfileImage
              src={`https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8`}
              alt="이미지"
            ></S.ProfileImage>
            <S.CardHeaderContainer>
              <S.CardHeaderName>
                <S.From>From.</S.From>
                <S.Name>김동훈</S.Name>
              </S.CardHeaderName>
              <S.CardHeaderTag>가족</S.CardHeaderTag>
            </S.CardHeaderContainer>
            <S.DeleteButton>
              <img src={`/assets/post/deleted.svg`} alt="삭제휴지통"></img>
            </S.DeleteButton>
          </S.CardHeader>
          <S.Content>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
            또하세요!
          </S.Content>
          <S.Data>2023.02.02</S.Data>
        </S.CardItem>
        <S.CardItem className="rolling-card">other1</S.CardItem>
        <S.CardItem className="rolling-card">other1</S.CardItem>
      </S.CardGrid>
    </S.PostCardBackgroud>
  );
}

export default PostCard;
