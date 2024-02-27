import { styled } from "styled-components";

const PostProfileImg = styled.div`
	background-image: url(${(props) => `${props.backgroundImg}`});
	background-size: cover;
	border-radius: 50%;
	height: 56px;
	width: 56px;
`;

const RollingMessageModalBackground = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 99;
`;

const RollingMessageModalWrapper = styled.div`
	position: absolute;
	background-color: var(--color-white);
	transform: translateX(-50%) translateY(-50%);
	border-radius: 16px;
	padding: 40px;
	width: 600px;
	height: 476px;
	top: 50%;
	left: 50%;

	& > header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 19px;
	}

	& > textarea {
		border: none;
		resize: none;
		width: 100%;
		height: 240px;
		margin-bottom: 24px;

		color: #5a5a5a;

		/* Font/18 Regular */
		font-family: Pretendard;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 28px; /* 155.556% */
		letter-spacing: -0.18px;
	}

	& > textarea:focus {
		outline: none;
	}

	& > textarea::-webkit-scrollbar {
		width: 5px;
	}

	& > textarea::-webkit-scrollbar-thumb {
		background-color: var(--color-grayscale-200);
	}
	& > textarea::-webkit-scrollbar-track {
		background-color: var(--color-white);
	}

	& > header > section {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	& > header > p {
		color: var(--gray-400, #999);
		/* Font/14 Regular */
		font-family: Pretendard;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
		letter-spacing: -0.07px;
	}

	& > header > section > section {
		display: flex;
		flex-flow: column;
	}

	& > header > section > section > p {
		margin-bottom: 6px;
		color: #000;

		font-family: Pretendard;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px; /* 120% */
	}

	& > header > section > section > p > span {
		margin-left: 6px;
		color: #000;

		font-family: Pretendard;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px; /* 120% */
	}

	& > header > section > section > div {
		display: flex;
		width: max-content;
		padding: 0px 8px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 4px;
		background: var(--Purple-100, #f8f0ff);
	}
`;

const ModalHeaderLine = styled.div`
	background-color: var(--color-grayscale-200);
	width: 100%;
	height: 1px;
	margin-bottom: 16px;
`;

const Button = styled.button`
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

export {
	PostProfileImg,
	RollingMessageModalBackground,
	RollingMessageModalWrapper,
	ModalHeaderLine,
	Button,
};
