import styled from "styled-components";

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 6rem 2.4rem 2.4rem 2.4rem;
  gap: 3rem;

  .box-container {
    display: flex;
    justify-content: space-between;
    max-width: 120rem;
    width: 100%;
    height: 32.4rem;
    padding: 6rem 0 6rem 6rem;
    color: ${(props) => props.theme.whiteBgTextColor};
    border-radius: 1.6rem;
    background: var(--color-surface);
  }

  .box-container-bottom {
    padding: 6rem 19.2rem 6rem 12.5rem;
  }

  .point {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 3.2rem;

    border-radius: 5rem;
    background: var(--color-purple-600);

    color: var(--color-white);
  }

  .text {
    margin: 1.6rem 0 0.8rem;
  }

  .text > span {
    display: block;
  }

  .card-image {
    width: 72rem;
    height: 20.4rem;
  }

  .emoji-image {
    width: 47.1rem;
    height: 20.4rem;
  }

  @media screen and (max-width: 1024px) {
    margin: 4.9rem 2.4rem 7.2rem;
    .box-container {
      width: 100%;
      flex-direction: column;
      align-items: start;
      height: auto;
      padding: 0;
      margin: 0 2.4rem;
    }

    .text-container {
      margin: 4rem auto 3.6rem 4rem;
    }

    .text > span {
      display: inline;
    }

    .card-image {
      width: 100%;
      height: 100%;
      display: block;
      margin: 0 auto 4rem;
    }

    .emoji-image {
      width: 100%;
      height: 100%;
      padding: 0 12.5rem;
      order: 1;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4.2rem 2.4rem 6.1rem;

    .box-container {
      padding: 2.4rem auto 5rem;
      overflow: hidden;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin: 2.4rem 2.4rem 5rem 2.4rem;
    }

    .text-container:last-of-type {
      margin-bottom: 4.8rem;
    }

    .point {
      height: 2.8rem;
    }

    .text {
      margin: 1.6rem 0 0.4rem;
      font-size: 1.8rem;
      line-height: 2.8rem;
      letter-spacing: -0.018rem;
    }

    .box-container-bottom .text > span {
      display: block;
    }

    .sub-text {
      font-size: 1.5rem;
      line-height: 2.2rem;
      letter-spacing: -0.015rem;
    }

    .card-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .card-image {
      min-width: 36rem;
      height: 100%;
      margin-bottom: 6.2rem;
    }

    .emoji-image {
      width: 100%;
      max-width: 47rem;
      min-height: 26rem;
      margin: 0 auto 5.1rem auto;
      padding: 0 2.98rem;
    }
  }
  .btn {
    width: 28rem;
    display: flex;
    padding: 1.4rem 2.4rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
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
`;

export default MainPageStyle;
