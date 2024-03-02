import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel";
import { useParams } from "react-router";

function HeaderAddEmojiButton() {
	const [isEmojiOpen, setIsEmojiOpen] = useState(false);
	const { recipientId } = useParams();

	const handleEmojiSelect = async (s) => {
		try {
			await fetch(
				`https://rolling-api.vercel.app/4-2/recipients/${recipientId}/reactions/`,
				{
					method: "POST",
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
						"X-CSRFToken":
							"Bk3gqgI4mVP95yjXHakJ56YvHIICSlhOI4lQEztPAT734s9WjGvk04ga24gCLkb6",
					},
					body: JSON.stringify({ emoji: s.emoji, type: "increase" }),
				}
			);
		} finally {
		}
	};

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
						onEmojiClick={(select) => handleEmojiSelect(select)}
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
