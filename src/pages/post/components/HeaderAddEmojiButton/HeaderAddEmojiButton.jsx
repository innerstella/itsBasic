import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel";
import { useParams } from "react-router";
import { toastNotify } from "../../../../utils/callToastNotify";

function HeaderAddEmojiButton({ emojiFunc }) {
	const [isEmojiOpen, setIsEmojiOpen] = useState(false);
	const { recipientId } = useParams();

	const handleEmojiSelect = async (s) => {
		try {
			if (localStorage.getItem(s.emoji) !== "increased") {
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
				localStorage.setItem(s.emoji, "increased");
			} else {
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
						body: JSON.stringify({ emoji: s.emoji, type: "decrease" }),
					}
				);
				localStorage.setItem(s.emoji, "decreased");
			}
			const notifyMessage =
				localStorage.getItem(s.emoji) === "increased"
					? "리액션이 성공적으로 추가되었습니다."
					: "리액션이 성공적으로 제거되었습니다.";
			toastNotify(notifyMessage);

			emojiFunc(recipientId);
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
