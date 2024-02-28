import styled from "styled-components";

const PrimaryButton40 = styled.button`
	background-color: ${(prop) =>
		prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-600)"};
	cursor: ${(prop) => (prop.disabled ? "default" : "pointer")};

	display: flex;
	padding: 7px 16px;
	justify-content: center;
	align-items: center;

	border: none;
	border: 1px solid transparent;
	border-radius: 6px;

	color: var(--color-white);
	text-align: center;
	font-family: Pretendard;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.6rem; /* 162.5% */
	letter-spacing: -0.016rem;

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

export default PrimaryButton40;
