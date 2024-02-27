import { styled } from "styled-components";

const SAMPLE_DATA = {
	id: 0,
	recipientId: 0,
	sender: "김동훈",
	profileImageURL: "gtp",
	relationship: "동료",
	createdAt: "2023.07.28",
	content: "코로나가기승을부리는중입니다.",
	font: "notoSans",
};

const RollingMessageModal = (rollingMessageData = SAMPLE_DATA) => {
	const {
		id,
		recipientId,
		sender,
		profileImageURL,
		relationship,
		createdAt,
		content,
		font,
	} = rollingMessageData;

	return <RollingMessageModalBackground></RollingMessageModalBackground>;
};

const RollingMessageModalBackground = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0px;
	left: 0px;
`;

export default RollingMessageModal;
