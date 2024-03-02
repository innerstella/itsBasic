import { useState } from "react";
import DropdownClickCancel from "./DropdownClickCancel";
import * as S from "./MostEmojiBox.style.jsx";

const reactionEmojiListAll = [
	{ emoji: "👍", count: 24 },
	{ emoji: "😍", count: 16 },
	{ emoji: "🎉", count: 10 },
	{ emoji: "😂", count: 20 },
	{ emoji: "🥰", count: 25 },
	{ emoji: "🙄", count: 45 },
	{ emoji: "😫", count: 4 },
	{ emoji: "🤐", count: 10 },
	{ emoji: "🤐", count: 9 },
];

const EmojiDropDown = (emojiList) => {
	return (
		<>
			<S.EmojiListContainer>
				{emojiList.length === 0 ? (
					<span className='font-16-regular'>
						이모지를 선택하여 이 글에 반응해보세요!
					</span>
				) : (
					emojiList.map((item) => (
						<S.EmojiUsedWrapper key={item.emoji} className='font-16-regular'>
							<span>{item.emoji}</span>
							{item.count}
						</S.EmojiUsedWrapper>
					))
				)}
			</S.EmojiListContainer>
		</>
	);
};

const MostEmojiBox = () => {
	const [isEmojiDropDownOpen, setIsEmojiDropDownOpen] = useState(false);
	const reactionEmojiList = reactionEmojiListAll
		.sort((a, b) => b.count - a.count)
		.filter((item, i) => i < 8);
	const mostUsedEmoji = reactionEmojiList.filter((item, i) => i < 3);

	return (
		<>
			<S.DropdownFuncBtnContainer>
				{mostUsedEmoji.length === 0 ? (
					<S.EmojiMostUsedWrapper className='font-16-regular'>
						아직 글에 반응이 없어요.
					</S.EmojiMostUsedWrapper>
				) : (
					mostUsedEmoji.map((item) => (
						<S.EmojiMostUsedWrapper
							key={item.emoji}
							className='font-16-regular'
						>
							<span>{item.emoji}</span>
							{item.count}
						</S.EmojiMostUsedWrapper>
					))
				)}
				<S.DropdownButton
					onClick={() => setIsEmojiDropDownOpen(!isEmojiDropDownOpen)}
				>
					<img src='/assets/emoji_picker_dropdown_icon.svg' alt='' />
				</S.DropdownButton>
				{isEmojiDropDownOpen && EmojiDropDown(reactionEmojiList)}
				<DropdownClickCancel
					isOpen={isEmojiDropDownOpen}
					setIsOpen={setIsEmojiDropDownOpen}
				/>
			</S.DropdownFuncBtnContainer>
		</>
	);
};

export default MostEmojiBox;
