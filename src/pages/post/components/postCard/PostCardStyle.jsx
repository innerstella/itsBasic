import styled from "styled-components";

// export const PostCardBackgroud = styled.div`
//   display: flex;
//   justify-content: center;
//   background: var(--color-orange-200, #ffe2 ad);
//   padding-top: 12rem;
//   padding-bottom: 24.6rem;
//   @media (max-width: 1247px) {
//     padding: 6rem 2.4rem;
//   }
// `;
// export const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 38.4rem);
//   grid-auto-rows: 28rem;
//   gap: 24px;
//   @media (max-width: 1247px) {
//     max-width: 120rem;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 2.4rem;
//   }
//   @media (max-width: 767px) {
//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     gap: 2.4rem;
//   }
// `;
export const CardPlus = styled.div`
  width: 43rem;
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

  /* @media (max-width: 767.5px) {
  } */
`;
export const CardItem = styled.div`
  /* width: 38.4rem; */
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
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
export const Relationship = styled.div`
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
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 70rem;
  line-height: 24px; /* 120% */
`;
export const Content = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 11.6rem;
  color: var(--gray-600, #4a4a4a);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
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
  cursor: pointer;
  position: absolute;
  right: 2.8rem;
  top: 2.8rem;
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
