import WriterImageBox from "./WriterImageBox";
import * as S from "./MessageWriterBox.style";
const MessageWriterBox = () => {
  return (
    <S.Container>
      <WriterImageBox />
      <p className='font-18-regular'>
        <span className='font-18-bold'>23</span>명이 작성했어요!
      </p>
    </S.Container>
  );
};

export default MessageWriterBox;
