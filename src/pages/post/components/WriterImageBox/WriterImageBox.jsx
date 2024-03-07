import * as S from "./WriterImageBox.style";

const WriterImageBox = ({ data }) => {
  return (
    <S.Container>
      {data.recentMessages?.map(({ profileImageURL, sender }) => {
        return <S.Box profileimageurl={profileImageURL} key={sender}></S.Box>;
      })}

      {data?.messageCount > 3 && (
        <S.NumberBox dataCount={data.messageCount}>
          <p className='font-12-regular'>+{data?.messageCount - 3}</p>
        </S.NumberBox>
      )}
    </S.Container>
  );
};

export default WriterImageBox;
