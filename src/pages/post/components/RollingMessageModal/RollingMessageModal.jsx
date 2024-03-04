import * as S from "./RollingMessageModal.style.jsx";
import { StyleSheetManager } from "styled-components";
import { formatDate } from "../postCard/formatData.js";
import Relationship from "../postCard/CardRelationship.jsx";

const RollingMessageModal = ({ rollingMessageData, setIsOpen }) => {
	const { sender, profileImageURL, relationship, createdAt, content, font } =
		rollingMessageData;

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
							<Relationship state={relationship}>{relationship}</Relationship>
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
