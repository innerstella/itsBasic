import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-grayscale-300);
  background: var(--color-white);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: #ededed;
  }

  @media (max-width: 767.5px) {
    padding: 0.6rem 0.8rem;
  }

  .share-button-image {
    width: 2.4rem;
    height: 2.4rem;

    @media (max-width: 767.5px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;
