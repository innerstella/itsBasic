import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;

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
    position: relative;

    .skeleton-container {
      display: flex;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 1250px) {
    .main-container {
      align-items: flex-start;
    }
    .list-container {
      position: relative;

      .title {
        padding: 0 2.4rem;
      }
      .skeleton-container {
        padding-left: 2.4rem;
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
    &:hover {
      background: var(--color-purple-700);
    }

    &:active {
      background: var(--color-purple-800);
    }
  }

  @media screen and (min-width: 375px) and (max-width: 1024px) {
    .btn {
      margin: 0 2.4rem;
      width: 100%;
    }
  }

  & :hover {
    cursor: pointer;
  }
`;
