import { styled } from "styled-components";
import PrimaryButton40 from "../../../components/PrimaryButton40";

export const RollingPrimaryButton = styled(PrimaryButton40)`
	width: 12rem;
`;

export const RollingMessageModalBackground = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 99;
`;

export const RollingMessageSender = styled.p`
	margin-bottom: 6px;
	color: #000;
	& span {
		font-weight: 700;
	}
`;

export const RollingMessageModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	background-color: var(--color-white);
	transform: translateX(-50%) translateY(-50%);
	border-radius: 16px;
	padding: 40px;
	width: 600px;
	height: 476px;
	top: 50%;
	left: 50%;

	& header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 19px;
		width: 100%;

		color: var(--gray-400, #999);

		& section {
			display: flex;
			align-items: center;
			column-gap: 16px;

			& section {
				display: flex;
				flex-flow: column;
				align-items: flex-start;
			}
		}
	}
`;

export const PostProfileImg = styled.div`
	background-image: url(${(props) => `${props.image}`});
	background-size: cover;
	border-radius: 50%;
	height: 56px;
	width: 56px;
`;

export const ModalMessageTextArea = styled.textarea`
	font-family: ${(prop) => prop.fontFamily || "pretendard"};

	padding-right: 20px;
	border: none;
	resize: none;
	width: 100%;
	height: 240px;
	margin-bottom: 24px;
	color: #5a5a5a;

	&:focus {
		outline: none;
	}

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--color-grayscale-200);
	}
	&::-webkit-scrollbar-track {
		background-color: var(--color-white);
	}
`;

export const RelationBadge = styled.p`
	background-color: var(
		--color-${(prop) => (prop.color === "error" ? prop.color : prop.color + "-100")}
	);
	color: var(--color-${(prop) => prop.color}-500);
	display: flex;
	margin-bottom: 0;
	width: max-content;
	padding: 0px 8px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 4px;
`;

export const RollingMessageModalSeparator = styled.div`
	background-color: var(--color-grayscale-200);
	width: 100%;
	height: 0.1rem;
	margin-bottom: 1.6rem;
`;
