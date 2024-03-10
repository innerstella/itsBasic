import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-grayscale-300);
  background: var(--color-white);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  color: var(--color-grayscale-900);

  @media (max-width: 767.5px) {
    padding: 0.6rem 0.8rem;
    font-size: 0;
    gap: 0;
    > img {
      height: 2rem;
      width: 2rem;
    }
  }
  &:hover {
    background-color: #ededed;
  }
`;

export const EmojiToggleBtnContainer = styled.div`
  position: relative;
  text-align: right;
  z-index: 2;
`;

export const EmojiPickerPositioner = styled.section`
  position: absolute;
  right: 18px;
  transform: translateY(0.6rem);
  z-index: 2;
`;
