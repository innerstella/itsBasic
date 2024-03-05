import * as S from "./WriterImageBox.style";

const WriterImageBox = ({ data }) => {
 
  return (
    <S.Container>
      {data.recentMessages?.map(({ profileImageURL }) => {
        
        return <S.Box profileImageURL={profileImageURL}></S.Box>;
      })}

      {data?.messageCount > 3 && (
        <S.NumberBox>
          <p className='font-12-regular'>+{data?.messageCount - 3}</p>
        </S.NumberBox>
      )}
    </S.Container>
  );
};

export default WriterImageBox;
