import styled from "styled-components";

export const CardPlus = styled.section`
  cursor: pointer;
  display: flex;
  height: 28rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.backgroundColor};

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 1023.5px) {
    width: 100%;
  }
`;
export const CardItem = styled.section`
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: ${(props) => props.theme.backgroundColor};

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
  }
`;
export const CardHeader = styled.header`
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
  margin-top: 0.4rem;
  padding-top: 1.6rem;
  width: 100%;
  height: 12.8rem;
  word-break: break-all;
  color: ${(props) => props.theme.textColor};

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
  border-top: 0.1rem solid var(--color-grayscale-200);
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
  border: 1px solid var(--color-grayscale-200);
  background: var(--color-white);
`;
export const From = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
export const Name = styled.h1`
  width: 14rem;
  color: ${(props) => props.theme.textColor};
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
  color: var(--color-grayscale-400);
`;
export const PlusButton = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: var(--color-grayscale-500);
`;

export const ContentEndPoint = styled.div`
  position: absolute;
  bottom: 1rem;
`;
