import { styled } from "styled-components";

const PostProfileImg = styled.div`
	background-image: url(${(props) => `${props.backgroundImg}`});
	background-size: cover;
	border-radius: 50%;
	height: 56px;
	width: 56px;
`;

const ModalMessageTextArea = styled.textarea`
	padding-right: 20px;
	border: none;
	resize: none;
	width: 100%;
	height: 240px;
	margin-bottom: 24px;

	color: #5a5a5a;

	/* Font/18 Regular */
	font-family: ${(prop) => prop.font || "pretendard"};
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px; /* 155.556% */
	letter-spacing: -0.18px;

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

const ModalHeaderLine = styled.div`
	background-color: var(--color-grayscale-200);
	width: 100%;
	height: 1px;
	margin-bottom: 16px;
`;

const PrimaryButton = styled.button`
	margin: auto;
	width: ${(prop) => prop.width}px;
	border: none;

	cursor: pointer;
	color: var(--white, #fff);
	text-align: center;
	/* Font/16 Regular */
	font-family: Pretendard;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px; /* 162.5% */
	letter-spacing: -0.16px;

	display: flex;
	padding: 7px 16px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 6px;
	background: var(--Purple-600, #9935ff);
`;

export { PostProfileImg, ModalHeaderLine, PrimaryButton, ModalMessageTextArea };
