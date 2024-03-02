import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 5rem;
  right: -0.2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 0.2rem 1.2prem 0px rgba(0, 0, 0, 0.08);
  padding: 1rem 0.1rem;
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 12px 16px;
  color: var(--gray-900, #181818);
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  background: var(--color-white);
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: var(--color-grayscale-100);
  }
`;
