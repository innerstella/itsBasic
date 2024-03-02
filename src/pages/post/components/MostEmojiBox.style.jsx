import styled from "styled-components";

export const DropdownFuncBtnContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

export const DropdownButton = styled.button`
	padding: 0.6rem 0rem;
	background: none;
	border: none;
	cursor: pointer;
`;

export const EmojiListContainer = styled.div`
	position: absolute;
	display: grid;
	padding: 2.4rem;
	border-radius: 0.8rem;
	border: 1px solid #b6b6b6;
	box-shadow: 0px 0.2rem 1.2rem 0px rgba(0, 0, 0, 0.08);
	right: 0;
	top: 4.7rem;
	gap: 1rem 0.8rem;
	background-color: var(--color-white);
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		padding: 16px;
	}
`;

export const EmojiUsedWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3.2rem;
	color: var(--color-white);
	background: rgba(0, 0, 0, 0.54);
	padding: 0.6rem 1.2rem;
	gap: 0.2rem;

	@media (max-width: 767.5px) {
		padding: 0.4rem 0.8rem;
		font-size: 1.4rem;
		line-height: 2rem;
		letter-spacing: -0.007rem;
	}
`;

export const EmojiMostUsedWrapper = styled.div`
	display: flex;
	color: var(--color-white);
	align-items: center;
	justify-content: center;
	border-radius: 3.2rem;
	background: rgba(0, 0, 0, 0.54);
	padding: 0.8rem 1.2rem;
	gap: 0.4rem;

	@media (max-width: 767.5px) {
		padding: 0.4rem 0.8rem;
		font-size: 1.4rem;
		line-height: 2rem;
		letter-spacing: -0.007rem;
	}
`;
