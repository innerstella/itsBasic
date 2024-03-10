import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;

  .gnb-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding: 0 2.4rem;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 5rem 2.4rem 4rem 2.4rem;
    padding: 0 2.4rem;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 120rem;
  }

  @media screen and (min-width: 375px) and (max-width: 1250px) {
    .main-container {
      align-items: flex-start;
    }
    .list-container {
      .title {
        padding: 0 2.4rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  .btn {
    width: 28rem;
    display: flex;
    padding: 1.4rem 2.4rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 1.2rem;
    border: none;
    background: var(--Purple-600, #9935ff);

    color: var(--color-white, #fff);
  }

  @media screen and (min-width: 375px) and (max-width: 1024px) {
    .btn {
      margin: 0 2.4rem;
      width: 100%;
    }
  }
`;

export const EmptyCardList = styled.div`
  width: 27.5rem;
  height: 26rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;

  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--color-surface);
  color: var(--color-black);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  .svg-container {
    display: flex;
    justify-content: flex-end;
    .svg {
      width: 10rem;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 1024px) {
    margin: 0 2.4rem;
  }
`;
