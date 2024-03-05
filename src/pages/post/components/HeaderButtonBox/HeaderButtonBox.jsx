import HeaderAddEmojiButton from "../HeaderAddEmojiButton/HeaderAddEmojiButton";
import HeaderShareButton from "../HeaderShareButton/HeaderShareButton";
import * as S from "./HeaderButtonBox.style";
const HeaderButtonBox = ({ emojiFunc }) => {
	return (
		<S.Box>
			<HeaderAddEmojiButton emojiFunc={emojiFunc} />
			<HeaderShareButton />
		</S.Box>
	);
};

export default HeaderButtonBox;
