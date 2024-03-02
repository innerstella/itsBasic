import HeaderAddEmojiButton from "../HeaderAddEmojiButton/HeaderAddEmojiButton";
import HeaderShareButton from "../HeaderShareButton/HeaderShareButton";
import * as S from "./HeaderButtonBox.style";
const HeaderButtonBox = () => {
  return (
    <S.Box>
      <HeaderAddEmojiButton />
      <HeaderShareButton />
    </S.Box>
  );
};

export default HeaderButtonBox;
