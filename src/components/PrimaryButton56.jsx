import styled from "styled-components";

const PrimaryButton56 = styled.button`
	background-color: ${(prop) =>
		prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-600)"};
	width: ${(prop) => prop.width || "100%"};
	cursor: ${(prop) => (prop.disabled ? "default" : "pointer")};

	display: flex;
	padding: 14px 24px;
	justify-content: center;
	align-items: center;

	border: none;
	border: 2px solid transparent;
	border-radius: 12px;

	color: var(--color-white);
	text-align: center;
	font-family: Pretendard;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.8rem; /* 155.556% */
	letter-spacing: -0.018rem;

	&:hover {
		background-color: ${(prop) =>
			prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-700)"};
	}

	&:active {
		background-color: ${(prop) =>
			prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-800)"};
	}

	&:focus {
		border: ${(prop) =>
			prop.disabled ? "none" : "1px solid var(--color-purple-900)"};
		background-color: ${(prop) =>
			prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-800)"};
	}
`;

export default PrimaryButton56;
