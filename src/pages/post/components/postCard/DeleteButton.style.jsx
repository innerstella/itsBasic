import styled from "styled-components";
import { Link } from "react-router-dom";
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
export const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  background: var(--color-purple-600);
  border: none;
  border-radius: 2rem;
  cursor: pointer;

  color: var(--color-white);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;

  &:hover {
    background: var(--color-purple-800);
  }

  @media (max-width: 767.5px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: var(--color-purple-600);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: var(--color-white);

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;

  &:hover {
    background: var(--color-purple-800);
    color: var(--color-white);
  }

  @media (max-width: 767.5px) {
    width: 100%;
  }
`;
