import { styled } from "styled-components";

const PostProfileImg = styled.div`
	background-image: url(${(props) => `${props.image}`});
	background-size: cover;
	border-radius: 50%;
	height: 56px;
	width: 56px;
`;

const ModalMessageTextArea = styled.textarea`
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

const RelationBadge = styled.p`
	background-color: var(
		--color-${(prop) => (prop.color === "error" ? prop.color : prop.color + "-100")}
	);
	color: var(--color-${(prop) => prop.color}-500);
`;

const PrimaryButton = styled.button`
	margin: auto;
	width: ${(prop) => prop.width}px;
	border: none;

	cursor: pointer;
	color: var(--color-white);
	text-align: center;

	display: flex;
	padding: 7px 16px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 6px;
	background: var(--color-purple-600);
`;

export { PostProfileImg, PrimaryButton, ModalMessageTextArea, RelationBadge };
