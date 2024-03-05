import { useEffect, useState } from "react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel.jsx";
import * as S from "./MostEmojiBox.style.jsx";
import { useParams } from "react-router";
import handleEmojiSelect from "../Utils/handleEmojiSelect.js";

const EmojiDropDown = ({ emojiList, emojiFunc, recipientId }) => {
	return (
		<>
			{emojiList.length === 0 ? (
				<S.EmojiListContainer columns={"1fr"}>
					<span className='font-16-regular'>
						이모지를 선택하여 이 글에 반응해보세요!
					</span>
				</S.EmojiListContainer>
			) : (
				<S.EmojiListContainer>
					{emojiList.map((item) => (
						<S.EmojiUsedWrapper
							key={item.emoji}
							state={localStorage.getItem(item.emoji)}
							className='font-16-regular'
							onClick={() =>
								handleEmojiSelect(item.emoji, recipientId, emojiFunc)
							}
						>
							<span>{item.emoji}</span>
							{item.count}
						</S.EmojiUsedWrapper>
					))}
				</S.EmojiListContainer>
			)}
		</>
	);
};

const MostEmojiBox = ({ emojiData, emojiFunc }) => {
	const [isEmojiDropDownOpen, setIsEmojiDropDownOpen] = useState(false);
	const [favoriteEmoji, setFavoriteEmoji] = useState([]);
	const [usedEmojiList, setUsedEmojiList] = useState([]);
	const { recipientId } = useParams();

	useEffect(() => {
		if (emojiData.length !== 0) {
			const usedEmojiList = emojiData
				.sort((a, b) => b.count - a.count)
				.filter((item) => item.count !== 0)
				.filter((item, i) => i < 8);
			const mostFavorEmoji = usedEmojiList.filter((item, i) => i < 3);
			setFavoriteEmoji(mostFavorEmoji);
			setUsedEmojiList(usedEmojiList);
		}
	}, [emojiData]);

	return (
		<>
			<S.DropdownFuncBtnContainer>
				{favoriteEmoji.length === 0 ? (
					<S.EmojiMostUsedWrapper className='font-16-regular'>
						아직 글에 반응이 없어요.
					</S.EmojiMostUsedWrapper>
				) : (
					favoriteEmoji.map((item) => (
						<S.EmojiMostUsedWrapper
							key={item.emoji}
							state={localStorage.getItem(item.emoji)}
							className='font-16-regular'
							onClick={() =>
								handleEmojiSelect(item.emoji, recipientId, emojiFunc)
							}
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
				{isEmojiDropDownOpen && (
					<EmojiDropDown
						emojiList={usedEmojiList}
						emojiFunc={emojiFunc}
						recipientId={recipientId}
					/>
				)}
				<DropdownClickCancel
					isOpen={isEmojiDropDownOpen}
					setIsOpen={setIsEmojiDropDownOpen}
				/>
			</S.DropdownFuncBtnContainer>
		</>
	);
};

export default MostEmojiBox;
