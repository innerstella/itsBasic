import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  padding: 0.8rem 1.2rem;
  gap: 0.2rem;

  .most-emoji {
    padding: 0rem 0.2rem;
    line-height: 2.1rem;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
  }

  p {
    line-height: 2rem;
    color: #fff;
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  padding: 0.6rem 0rem;
  background: none;
  border: none;

  .emoji-drop-down-image {
    cursor: pointer;
  }
`;
