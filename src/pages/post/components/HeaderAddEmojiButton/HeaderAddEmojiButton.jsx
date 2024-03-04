import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel";
import { useParams } from "react-router";
import handleEmojiSelect from "../Utils/handleEmojiSelect";

function HeaderAddEmojiButton({ emojiFunc }) {
	const [isEmojiOpen, setIsEmojiOpen] = useState(false);
	const { recipientId } = useParams();

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
				{isEmojiOpen && (
					<EmojiPicker
						emojiStyle='twitter'
						onEmojiClick={(sel) =>
							handleEmojiSelect(sel.emoji, recipientId, emojiFunc)
						}
					/>
				)}
			</S.EmojiPickerPositioner>
			<DropdownClickCancel
				isOpen={isEmojiOpen}
				recipientId={recipientId}
				setIsOpen={setIsEmojiOpen}
			/>
		</S.EmojiToggleBtnContainer>
	);
}

export default HeaderAddEmojiButton;
