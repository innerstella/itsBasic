import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import Relationship from "./CardRelationship";
import { formatDate } from "./formatData";
import getRecipientMessages from "./api";
import { useParams } from "react-router-dom";
import RollingMessageModal from "../RollingMessageModal/RollingMessageModal.jsx";

const BASE_URL = "https://rolling-api.vercel.app/4-2";

export function PostCardItem() {
	const [cardData, setCardData] = useState([]);
	const [modalCardData, setModalCardData] = useState({});
	const [isMessageOpen, setIsMessageOpen] = useState(false);
	const { recipientId } = useParams();

	function handleMessageModalOpen(el) {
		setModalCardData(el);
		setIsMessageOpen(true);
	}

	const dataUrl = `${BASE_URL}/recipients/${recipientId}/messages/`;

	async function handleCardData() {
		const jsonData = await getRecipientMessages(dataUrl);
		const paperData = jsonData.results;
		setCardData(paperData);
	}
	useEffect(() => {
		handleCardData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{isMessageOpen && (
				<RollingMessageModal
					rollingMessageData={modalCardData}
					setIsOpen={setIsMessageOpen}
				/>
			)}
			{cardData &&
				cardData.map((el) => (
					<S.CardItem key={el.id} onClick={() => handleMessageModalOpen(el)}>
						<S.CardHeader>
							<S.ProfileImage
								src={el.profileImageURL}
								alt='이미지'
							></S.ProfileImage>
							<S.CardHeaderContainer>
								<S.CardHeaderName>
									<S.From>From.</S.From>
									<S.Name>{el.sender}</S.Name>
								</S.CardHeaderName>
								<Relationship state={el.relationship}>
									{el.relationship}
								</Relationship>
							</S.CardHeaderContainer>
							<S.DeleteButton>
								<img src={`/assets/post/deleted.svg`} alt='삭제휴지통'></img>
							</S.DeleteButton>
						</S.CardHeader>
						<S.Content fontFamily={el.font}>{el.content}</S.Content>
						<S.Data>{formatDate(el.createdAt)}</S.Data>
					</S.CardItem>
				))}
		</>
	);
}
