import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  position: relative;
  margin-left: 0.8rem;
  gap: 2.7rem;

  @media (max-width: 767.5px) {
    gap: 3.1rem;
    margin-left: 0.2rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 8.8rem;
    bottom: 1.8rem;
    height: 1px;
    width: 2.8rem;
    transform: rotate(90deg);
    background: #ededed;

    @media (max-width: 767.5px) {
      content: "";
      position: absolute;
      left: 3.95rem;
      bottom: 1.8rem;
      height: 1px;
      width: 2.8rem;
      transform: rotate(90deg);
      background: #ededed;
    }
  }
`;
