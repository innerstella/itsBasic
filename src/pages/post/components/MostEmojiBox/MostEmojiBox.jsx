import { useEffect, useState } from "react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel.jsx";
import * as S from "./MostEmojiBox.style.jsx";
import { useParams } from "react-router";
import { toastNotify } from "../../../../utils/callToastNotify.js";

const EmojiDropDown = ({ emojiList, emojiFunc }) => {
	const { recipientId } = useParams();

	const handleEmojiSelect = async (emoji) => {
		try {
			if (localStorage.getItem(emoji) !== "increased") {
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
						body: JSON.stringify({ emoji: emoji, type: "increase" }),
					}
				);
				localStorage.setItem(emoji, "increased");
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
						body: JSON.stringify({ emoji: emoji, type: "decrease" }),
					}
				);
				localStorage.setItem(emoji, "decreased");
			}
			const notifyMessage =
				localStorage.getItem(emoji) === "increased"
					? "리액션이 성공적으로 추가되었습니다."
					: "리액션이 성공적으로 제거되었습니다.";
			toastNotify(notifyMessage);
			emojiFunc(recipientId);
		} finally {
		}
	};

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
							className='font-16-regular'
							onClick={() => handleEmojiSelect(item.emoji)}
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

	useEffect(() => {
		if (emojiData.length !== 0) {
			const usedEmojiList = emojiData
				.sort((a, b) => b.count - a.count)
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
				{isEmojiDropDownOpen && (
					<EmojiDropDown emojiList={usedEmojiList} emojiFunc={emojiFunc} />
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
