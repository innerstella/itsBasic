import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import styled from "./RollingPostEmojiInput.module.css";

function EmojiInput() {
	const [isEmojiOpen, setIsEmojiOpen] = useState(false);

	return (
		<div className={styled["emoji-toggle-btn-container"]}>
			<button
				className={styled["emoji-picker-toggle-btn-in-post"]}
				onClick={() => setIsEmojiOpen(!isEmojiOpen)}
			>
				<img
					src="assets/post/icons/add-24.svg"
					alt="meaninglessDumbIcons"
					className={styled["emoji-picker-toggle-btn-in-post-icon"]}
				/>
				추가
			</button>
			<section className={styled["emoji-picker-position-container"]}>
				{isEmojiOpen && <EmojiPicker emojiStyle="twitter" />}
			</section>
			{isEmojiOpen && (
				<button
					className={styled["catch-click-not-valid-btn"]}
					onClick={() => setIsEmojiOpen(false)}
				/>
			)}
		</div>
	);
}

export default EmojiInput;
