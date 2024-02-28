import styled from "styled-components";

const MainPageStyle = styled.div`
  max-width: 120.7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 6rem;
    gap: 3rem;
  }

  .box-container {
    display: flex;
    width: 100%;
    height: 32.4rem;
    justify-content: space-between;
    padding: 6rem 0 6rem 6rem;

    border-radius: 1.6rem;
    background: var(--color-surface);
  }

  .box-container-bottom {
    padding: 6rem 19.2rem 6rem 0;
  }

  .point {
    display: flex;
    width: 8rem;
    height: 3.2rem;
    padding: 0.6rem 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    border-radius: 5rem;
    background: var(--color-purple-600);

    color: var(--color-white);

    /* Font/14 Bold */
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 142.857% */
    letter-spacing: -0.007rem;
  }

  .text {
    margin: 0;
    margin: 1.6rem 0 0.8rem;

    color: var(--color-grayscale-900);

    /* Font/24 Bold */
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.6rem; /* 150% */
    letter-spacing: -0.024rem;
  }

  .text > span {
    display: block;
  }

  .sub-text {
    margin: 0;
    color: var(--color-grayscale-500);

    /* Font/18 Regular */
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem; /* 155.556% */
    letter-spacing: -0.018rem;
  }

  .card-container {
    display: flex;
    width: 72rem;
    height: 20.4rem;
    padding: 2.1rem 4rem;
    justify-content: center;
    // gap: 1.2rem;
  }

  .card {
    width: 20.5rem;
    height: 16.2rem;
    object-fit: cover;
  }

  .emoji-add {
    width: 47rem;
    height: 20.4rem;
    margin: 0 12.5rem;
  }

  @media screen and (max-width: 1248px) {
    margin: 0 2.4rem;

    .main-container {
      margin-top: 4.9rem;
    }

    .box-container {
      height: auto;
      flex-direction: column;
      padding: 4rem;
    }

    .text > span {
      display: inline;
    }

    .card-container {
      margin: 3.6rem auto 0;
      padding: 2.1rem 0;
    }

    .emoji-add {
      order: 1;
      margin: 3.6rem auto 0;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    .box-container {
      position: relative;
      padding: 2.4rem 0 6.228rem 0;
      justify-content: center;
      align-items: center;
    }

    .box-container > div:first-of-type {
      padding: 0 2.4rem 0 2.4rem;
    }

    .box-container-bottom {
      padding-bottom: 5.1rem;
    }

    .point {
      width: 8rem;
      height: 2.8rem;
    }

    .text {
      color: var(--color-grayscale-900);

      /* Font/18 Bold */
      font-family: Pretendard;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.8rem; /* 155.556% */
      letter-spacing: -0.018rem;
    }

    .box-container-bottom .text > span {
      display: block;
    }

    .sub-text {
      color: var(--color-grayscale-500);

      /* Font/15 Regular */
      font-family: Pretendard;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.2rem; /* 146.667% */
      letter-spacing: -0.015rem;
    }

    .card-container {
      display: flex;
      width: 100%;
      height: auto;
      justify-content: center;
      padding: 0;
      margin-top: 5rem;
      overflow: hidden;
      gap: 0.656rem;
    }

    .card {
      width: 11.4rem;
      height: 9rem;
    }

    .emoji-add {
      width: 26rem;
      height: 11.3rem;
      margin: 0;
      margin-top: 4.8rem;
    }
  }
`;

export default MainPageStyle;
