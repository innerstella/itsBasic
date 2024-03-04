import * as S from "./HeaderServiceBox.style";
import MessageWriterBox from "../MessageWriterBox/MessageWriterBox";
import MostEmojiBox from "../MostEmojiBox/MostEmojiBox";
import HeaderButtonBox from "../HeaderButtonBox/HeaderButtonBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const fetchEmojiData = async (recipientId) => {
	const { results } = await (
		await fetch(
			`https://rolling-api.vercel.app/4-2/recipients/${recipientId}/reactions/`
		)
	).json();
	return results;
};

const HeaderServiceBox = () => {
	const [emojiData, setEmojiData] = useState([]);
	const { recipientId } = useParams();

	const handleSetEmojiData = async (recipientId) => {
		const emojiRaw = await fetchEmojiData(recipientId);
		setEmojiData(emojiRaw);
	};

	useEffect(() => {
		handleSetEmojiData(recipientId);
	}, [recipientId]);

	return (
		<S.Container>
			<MessageWriterBox />
			<MostEmojiBox emojiData={emojiData} />
			<HeaderButtonBox emojiFunc={handleSetEmojiData} />
		</S.Container>
	);
};

export default HeaderServiceBox;
