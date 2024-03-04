import * as S from "./WriterImageBox.style";

const WriterImageBox = ({ data }) => {
  console.log(data.recentMessages);
  return (
    <S.Container>
      {data.recentMessages?.map(({ profileImageURL }) => {
        console.log(profileImageURL);
        return <S.Box profileImageURL={profileImageURL}></S.Box>;
      })}

      <S.NumberBox>
        <p className='font-12-regular'>+6</p>
      </S.NumberBox>
    </S.Container>
  );
};

export default WriterImageBox;
