import styled from "styled-components";

export const Container = styled.div`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;

  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  border: 0.1rem solid #dadcdf;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(2px);
  background-color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  margin-left: ${({ type }) => (type === "right" ? "-2rem" : "0")};
  margin-right: ${({ type }) => (type === "left" ? "-2rem" : "0")};

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1024px) {
    display: none;
  }
`;
