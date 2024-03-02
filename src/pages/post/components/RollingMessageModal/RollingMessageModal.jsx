import * as S from "./RollingMessageModal.style.jsx";
import { StyleSheetManager } from "styled-components";
import { formatDate } from "../postCard/formatData.js";

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

const RollingMessageModal = ({ rollingMessageData, setIsOpen }) => {
	const { sender, profileImageURL, relationship, createdAt, content, font } =
		rollingMessageData;

	const relationColor = convertRelationColor(relationship);

	return (
		<S.RollingMessageModalBackground>
			<S.RollingMessageModalWrapper className='font-14-regular'>
				<header>
					<section>
						<StyleSheetManager shouldForwardProp={() => true}>
							<S.PostProfileImg image={profileImageURL} />
						</StyleSheetManager>
						<section>
							<S.RollingMessageSender className='font-20-regular'>
								From.<span>{sender}</span>
							</S.RollingMessageSender>
							<S.RelationBadge
								color={relationColor}
								className='font-14-regular'
							>
								{relationship}
							</S.RelationBadge>
						</section>
					</section>
					<p>{formatDate(createdAt)}</p>
				</header>
				<S.RollingMessageModalSeparator />
				<S.ModalMessageTextArea
					className='font-18-regular'
					fontFamily={font}
					defaultValue={content}
				/>
				<S.RollingPrimaryButton onClick={() => setIsOpen(false)}>
					확인
				</S.RollingPrimaryButton>
			</S.RollingMessageModalWrapper>
		</S.RollingMessageModalBackground>
	);
};

export default RollingMessageModal;
