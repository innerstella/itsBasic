import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  color: var(--color-grayscale-900);
  margin-right: 5.7rem;
  position: relative;

  @media (max-width: 1023.5px) {
    display: none;
  }

  p {
    color: ${(props) => props.theme.textColor};
  }
`;
