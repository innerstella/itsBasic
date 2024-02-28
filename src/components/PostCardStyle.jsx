import styled from "styled-components";
import createGlobalStyle from "styled-components";

export const PostCardBackgroud = styled.div`
  background: var(--color-orange-200, #ffe2 ad);
  padding-top: 12rem;
  padding-bottom: 24.6rem;
`;
export const CardGrid = styled.div`
  margin: 0 auto;
  width: 100rem;
  display: grid;
  grid-template-columns: repeat(3, 38.4rem);
  grid-auto-rows: 28rem;
  gap:24px;
}
`;
export const CardPlus = styled.div`
  display: flex;
  width: 38.4rem;
  height: 28rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
export const CardItem = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--color-white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  gap: 1.5rem;
`;
export const Horizon = styled.div`
  width: 33.6rem;
  height: 1px;
  background: var(--color-grayscale-200, #eee);
`;
export const CardHeader = styled.div`
  display: flex;
  width: 38.4rem;
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
export const CardHeaderTag = styled.div`
  display: flex;
  padding: 0px 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  background: var(--color-green-100, #e4fbdc);
  color: var(--color-green-500, #2ba600);

  /* Font/14 Regular */
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.07px;
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
  font-weight: 70rem;
  line-height: 24px; /* 120% */
`;
export const Content = styled.p`
  width: 33.6rem;
  height: 10.6rem;
  flex-shrink: 0;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Font/18 Regular */
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;
export const Data = styled.p`
  color: var(--gray-400, #999);

  /* Font/12 Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;
export const DeleteButton = styled.button`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;
export const PlusButton = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;
