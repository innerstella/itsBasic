import { useState } from "react";
import {
	ModalMessageTextArea,
	PostProfileImg,
	RelationBadge,
} from "./RollingMessageModal.style";
import PrimaryButton40 from "../../../components/PrimaryButton40";

import styled from "./RollingMessageModal.module.css";
import { StyleSheetManager } from "styled-components";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SAMPLE_DATA = {
	sender: "김동훈",
	profileImageURL: "logo192.png",
	relationship: "가족",
	createdAt: "2023.07.28",
	content: "코로나가기승을부리는중입니다.",
	font: "notoSans",
};

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

const toastNotify = (toastMessage = "default Message") =>
	toast.success(toastMessage, {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		transition: Bounce,
	});

const RollingMessageModal = ({ rollingMessageData = SAMPLE_DATA }) => {
	const [messageModalOpen, setMessageModalOpen] = useState(false);
	const { sender, profileImageURL, relationship, createdAt, content, font } =
		rollingMessageData;
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const relationColor = convertRelationColor(relationship);

	return (
		<div className={styled["rolling-message-modal-background"]}>
			<div
				className={`${styled["rolling-message-modal-wrapper"]} font-14-regular`}
			>
				<header>
					<section>
						<StyleSheetManager shouldForwardProp={() => true}>
							<PostProfileImg image={profileImageURL} />
						</StyleSheetManager>
						<section>
							<p
								className={`${styled["rolling-message-modal-sender"]} font-20-regular`}
							>
								From.<span>{sender}</span>
							</p>
							<RelationBadge
								color={relationColor}
								className={`${styled["rolling-message-modal-relationship"]} font-14-regular`}
							>
								{relationship}
							</RelationBadge>
						</section>
					</section>
					<p>{createdAt}</p>
				</header>
				<div className={styled["modal-header-line"]} />
				<ModalMessageTextArea
					className="font-18-regular"
					fontFamily={font}
					defaultValue={content}
				/>
				<PrimaryButton40
					className={styled["rolling-message-modal-confirm-design"]}
					disabled={isButtonDisabled}
					onClick={() => toastNotify()}
				>
					확인
				</PrimaryButton40>
			</div>
		</div>
	);
};

export default RollingMessageModal;
