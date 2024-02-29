import HeaderAddEmojiButton from "./HeaderAddEmojiButton";
import HeaderShareButton from "./HeaderShareButton";
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
