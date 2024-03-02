import * as S from "./HeaderServiceBox.style";
import MessageWriterBox from "../MessageWriterBox/MessageWriterBox";
import MostEmojiBox from "../MostEmojiBox/MostEmojiBox";
import HeaderButtonBox from "../HeaderButtonBox/HeaderButtonBox";

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
