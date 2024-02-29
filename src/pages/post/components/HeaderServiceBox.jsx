import * as S from "./HeaderServiceBox.style";
import MessageWriterBox from "./MessageWriterBox";
import MostEmojiBox from "./MostEmojiBox";
import HeaderButtonBox from "./HeaderButtonBox";

const HeaderServiceBox = () => {
  return (
    <S.Container>
      <MessageWriterBox />
      <MostEmojiBox />
      <HeaderButtonBox />
    </S.Container>
  );
};

export default HeaderServiceBox;
