import * as S from "./PostCardStyle";
export function PostCardAdd() {
  return (
    <S.CardPlus>
      <S.PlusButton href="#" as="a">
        <img alt="플러스이미지" src={`/assets/post/plus.svg`}></img>
      </S.PlusButton>
    </S.CardPlus>
  );
}
