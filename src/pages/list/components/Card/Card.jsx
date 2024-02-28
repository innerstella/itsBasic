import * as S from "./Card.style";

const Card = () => {
  const userName = "John";
  return (
    <S.Container>
      <S.InfoContainer>
        <p className="font-24-bold">To. {userName}</p>
        <p>icons</p>
        <p className="font-16-regular">
          <span className="font-16-bold">30</span>명이 작성했어요!
        </p>
      </S.InfoContainer>
      <S.BadgeContainer>
        <S.Badge>
          <span className="number">👍 20</span>
        </S.Badge>
        <S.Badge>
          <span className="number">👍 20</span>
        </S.Badge>
        <S.Badge>
          <span className="number">👍 20</span>
        </S.Badge>
      </S.BadgeContainer>
    </S.Container>
  );
};

export default Card;
