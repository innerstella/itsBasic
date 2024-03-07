import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto 2.5rem;
  width: 120rem;
  display: flex;
  gap: 20px;
  justify-content: right;

  @media (max-width: 1247.5px) {
    width: 100%;
  }

  @media (max-width: 767.5px) {
    width: 90%;
    z-index: 2;
    position: fixed;
    bottom: 25px;
    right: 25px;
    left: 25px;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: #9935ff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: gray;
    color: #fff;
  }
  @media (max-width: 767.5px) {
    width: 100%;
  }
`;
