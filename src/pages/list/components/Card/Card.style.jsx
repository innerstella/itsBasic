import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  min-width: 27.5rem;
  height: 26rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${({ color }) => {
    if (["purple", "green", "blue", "orange"].includes(color)) {
      return `var(--color-${color}-100, #ecd9ff)`;
    } else {
      return `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(
        ${color}
      )`;
    }
  }};
  color: ${({ color }) => {
    if (["purple", "green", "blue", "orange"].includes(color)) {
      return `var(--color-grayscale-700)`;
    } else {
      return `var(--color-white)`;
    }
  }};
  background-size: cover;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  .svg {
    width: 14.2rem;
    height: 14.2rem;
    border-radius: 0 0 1.6rem 0;

    position: relative;
    left: 11rem;
    top: -16rem;
  }
`;

export const ContentContainer = styled.div`
  min-width: 27.5rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.3rem;
  z-index: 10;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .recipient-name-box {
    width: 22.7rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .profile-icon {
    width: 2.8rem;
    height: 2.8rem;

    display: flex;
    padding: 0.2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    border-radius: 3rem;
    background: #fff;
  }

  .nums {
    display: flex;
    padding: 0.5rem 0.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 3rem;
    background: #fff;
    color: var(--gray-500, #555);
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
  z-index: 10;
`;

export const EmptyBadgeContainer = styled.div`
  margin-top: 5.3rem;
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
