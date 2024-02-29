import * as S from "./WriterImageBox.style";

const WriterImageBox = () => {
  return (
    <S.Container>
      <S.Box></S.Box>
      <S.Box></S.Box>
      <S.Box></S.Box>
      <S.NumberBox>
        <p className='font-12-regular'>+6</p>
      </S.NumberBox>
    </S.Container>
  );
};

export default WriterImageBox;
