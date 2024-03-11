import styled from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.4rem;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => (width === "short" ? "28rem" : "72rem")};
    height: 5.6rem;

    border-radius: 1.2rem;
    border: none;
    background: var(--color-purple-600);

    color: var(--color-white);
  }

  .disabled {
    border-radius: 12px;
    background: var(--gray-300, #ccc);
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2.4rem;
    .button {
      ${({ width }) => (width === "short" ? "width: 100%" : "max-width: 100%")};
    }
  }
`;

export default ButtonStyle;
