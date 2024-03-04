import styled from "styled-components";

export const Container = styled.div`
  .recipient-input {
    width: 100%;
    height: 5rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;

    border: ${({ error }) =>
      error
        ? "0.1rem solid var(--color-error)"
        : "0.1rem solid var(--color-grayscale-300)"};
    background: var(--color-white);
  }

  .warning {
    padding-top: 0.5rem;
    color: var(--color-error);
    display: ${({ error }) => (error ? "block" : "none")};
  }
`;
