import styled from "styled-components";

export const Container = styled.div`
  width: 27.5rem;
  height: 26rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.3rem;

  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--Purple-200, #ecd9ff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
`;

export const Badge = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);

  .number {
    color: #fff;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem; /* 125% */
  }
`;
