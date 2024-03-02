import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import DropdownClickCancel from ".//DropdownClickCancel";

function HeaderAddEmojiButton() {
	const [isEmojiOpen, setIsEmojiOpen] = useState(false);

	return (
		<S.EmojiToggleBtnContainer>
			<S.Button
				className='font-16-regular'
				onClick={() => setIsEmojiOpen(!isEmojiOpen)}
			>
				<img src='/assets/post/icons/add-24.svg' alt='' />
				추가
			</S.Button>
			<S.EmojiPickerPositioner>
				{isEmojiOpen && <EmojiPicker emojiStyle='twitter' />}
			</S.EmojiPickerPositioner>
			<DropdownClickCancel isOpen={isEmojiOpen} setIsOpen={setIsEmojiOpen} />
		</S.EmojiToggleBtnContainer>
	);
}

export default HeaderAddEmojiButton;
