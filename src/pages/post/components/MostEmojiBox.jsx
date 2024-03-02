import { useEffect, useState } from "react";
import DropdownClickCancel from "./DropdownClickCancel";
import * as S from "./MostEmojiBox.style.jsx";
import { useParams } from "react-router";

const reactionEmojiListAllSample = [
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

const fetchEmojiData = async (recipientId) => {
	const { results } = await (
		await fetch(
			`https://rolling-api.vercel.app/4-2/recipients/${recipientId}/reactions/`
		)
	).json();
	return results;
};

const EmojiDropDown = (emojiList) => {
	return (
		<>
			<S.EmojiListContainer columns='1fr'>
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
	const [emojiData, setEmojiData] = useState([]);
	const [favoriteEmoji, setFavoriteEmoji] = useState([]);
	const [usedEmojiList, setUsedEmojiList] = useState([]);
	const { recipientId } = useParams();

	const handleSetEmojiData = async (recipientId) => {
		const emojiRaw = await fetchEmojiData(recipientId);
		setEmojiData(emojiRaw);
	};

	useEffect(() => {
		handleSetEmojiData(recipientId);
	}, [recipientId]);

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
				{isEmojiDropDownOpen && EmojiDropDown(usedEmojiList)}
				<DropdownClickCancel
					isOpen={isEmojiDropDownOpen}
					setIsOpen={setIsEmojiDropDownOpen}
				/>
			</S.DropdownFuncBtnContainer>
		</>
	);
};

export default MostEmojiBox;
