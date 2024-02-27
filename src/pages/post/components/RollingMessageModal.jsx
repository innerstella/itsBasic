import { useState } from "react";
import {
	PrimaryButton,
	ModalMessageTextArea,
	PostProfileImg,
	RelationBadge,
} from "./RollingMessageModal.style";

import styled from "./RollingMessageModal.module.css";

const convertRelationColor = (relation) => {
	switch (relation) {
		case "지인":
			return "orange";
		case "동료":
			return "purple";
		case "가족":
			return "green";
		case "친구":
			return "blue";
		default:
			return "error";
	}
};

const SAMPLE_DATA = {
	sender: "김동훈",
	profileImageURL: "logo192.png",
	relationship: "친구",
	createdAt: "2023.07.28",
	content: "코로나가기승을부리는중입니다.",
	font: "notoSans",
};

const RollingMessageModal = ({ rollingMessageData = SAMPLE_DATA }) => {
	const [messageModalOpen, setMessageModalOpen] = useState(false);
	const { sender, profileImageURL, relationship, createdAt, content, font } =
		rollingMessageData;

	const relationColor = convertRelationColor(relationship);

	return (
		<div className={styled["rolling-message-modal-background"]}>
			<div className={styled["rolling-message-modal-wrapper"]}>
				<header>
					<section>
						<PostProfileImg backgroundImg={profileImageURL} />
						<section>
							<p className={styled["rolling-message-modal-sender"]}>
								From.<span>{sender}</span>
							</p>
							<RelationBadge
								color={relationColor}
								className={styled["rolling-message-modal-relationship"]}
							>
								{relationship}
							</RelationBadge>
						</section>
					</section>
					<p>{createdAt}</p>
				</header>
				<div className={styled["modal-header-line"]} />
				<ModalMessageTextArea font={font}>{content}</ModalMessageTextArea>
				<PrimaryButton
					width={"120"}
					onClick={() => setMessageModalOpen(!messageModalOpen)}
				>
					확인
				</PrimaryButton>
			</div>
		</div>
	);
};

export default RollingMessageModal;
