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
    justify-content: flex-start;
    gap: 5rem;
    margin: 5rem 2.4rem 4rem 2.4rem;
    padding: 0 2.4rem;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media screen and (min-width: 375px) and (max-width: 1024px) {
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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  .btn {
    display: flex;
    width: 28rem;
    padding: 1.4rem 2.4rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 1.2rem;
    background: var(--Purple-600, #9935ff);

    color: var(--color-white, #fff);
  }
`;
