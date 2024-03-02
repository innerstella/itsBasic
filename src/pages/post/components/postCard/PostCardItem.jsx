import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import { formatDate } from "./formatData";
import getRecipientMessages from "./api";
import { useParams } from "react-router-dom";
import RollingMessageModal from "../RollingMessageModal";
export function PostCardItem() {
	const [cardData, setCardData] = useState([]);
	const [modalCardData, setModalCardData] = useState({});
	const [isMessageOpen, setIsMessageOpen] = useState(false);

	const { recipientId } = useParams();

	async function handleCardData() {
		const jsonData = await getRecipientMessages(recipientId);
		const paperData = jsonData.results;
		setCardData(paperData);
	}
	function handleMessageModalOpen(el) {
		setModalCardData(el);
		setIsMessageOpen(true);
	}

	useEffect(() => {
		handleCardData();
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
								<S.Relationship>가족</S.Relationship>
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
