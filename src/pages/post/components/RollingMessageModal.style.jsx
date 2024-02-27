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
`;

export {
	PostProfileImg,
	RollingMessageModalBackground,
	RollingMessageModalWrapper,
};
