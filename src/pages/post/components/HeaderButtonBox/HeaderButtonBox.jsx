import HeaderAddEmojiButton from "../HeaderAddEmojiButton/HeaderAddEmojiButton";
import HeaderShareButton from "../HeaderShareButton/HeaderShareButton";
import * as S from "./HeaderButtonBox.style";
/**
 * @description 헤더부분에 있는 이모티콘 추가 버튼과 공유기능 버튼을 한곳에 담은 컴포넌트입니다.
 */
const HeaderButtonBox = ({ emojiFunc }) => {
  return (
    <S.Box>
      <HeaderAddEmojiButton emojiFunc={emojiFunc} />
      <HeaderShareButton />
    </S.Box>
  );
};

export default HeaderButtonBox;
