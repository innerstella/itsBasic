import styled from "styled-components";

export const CardPlus = styled.div`
  cursor: pointer;
  display: flex;
  height: 28rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 1023.5px) {
    width: 100%;
  }
`;
export const CardItem = styled.div`
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  padding: 1rem 1rem 0 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;
export const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const Content = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 11.6rem;
  word-break: break-all;
  color: var(--gray-600, #4a4a4a);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  align-items: center;
  font-family: ${(props) => props.fontFamily};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
`;
export const CardHeaderName = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;
export const ProfileImage = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;
export const From = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
export const Name = styled.p`
  width: 14rem;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Date = styled.p`
  color: var(--gray-400, #999);

  /* Font/12 Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;
export const PlusButton = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;

export const ContentEndPoint = styled.div`
  position: absolute;
  bottom: 1rem;
`;
