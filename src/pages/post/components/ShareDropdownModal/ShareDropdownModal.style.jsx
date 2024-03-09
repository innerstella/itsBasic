import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 5rem;
  right: -0.2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--color-grayscale-300);
  background: var(--color-white);
  box-shadow: 0px 0.2rem 1.2prem 0px rgba(0, 0, 0, 0.08);
  padding: 1rem 0.1rem;
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 1.2rem 1.6rem;
  color: var(--gray-900, #181818);
  background: var(--color-white);
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: var(--color-grayscale-100);
  }
  @media (max-width: 767.5px) {
    font-size: 1.2rem;
  }
`;
