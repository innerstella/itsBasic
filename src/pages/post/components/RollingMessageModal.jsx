import { useState } from "react";
import {
	PostProfileImg,
	RollingMessageModalBackground,
	RollingMessageModalWrapper,
} from "./RollingMessageModal.style";

const SAMPLE_DATA = {
	id: 0,
	recipientId: 0,
	sender: "김동훈",
	profileImageURL: "logo192.png",
	relationship: "동료",
	createdAt: "2023.07.28",
	content: "코로나가기승을부리는중입니다.",
	font: "notoSans",
};

const RollingMessageModal = ({ rollingMessageData = SAMPLE_DATA }) => {
	const [messageModalOpen, setMessageModalOpen] = useState(false);
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

	return (
		<RollingMessageModalBackground>
			<RollingMessageModalWrapper>
				<header>
					<section>
						<PostProfileImg backgroundImg={profileImageURL} />
						<p>
							From. <span>김동훈</span>
						</p>
						<p>동료</p>
					</section>
					<p>2023.07.08</p>
					<div></div> {/* 밑줄 표시 예정*/}
				</header>
				<textarea></textarea>
				<button onClick={() => setMessageModalOpen(!messageModalOpen)}></button>
			</RollingMessageModalWrapper>
		</RollingMessageModalBackground>
	);
};

export default RollingMessageModal;
