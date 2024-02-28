import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6.4rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.4rem;

  .logo-container {
    display: flex;
    width: auto;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

    color: var(--gray-light-gray-90, #4a494f);
    text-align: center;
    font-family: Poppins;
    font-size: 1.9971rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .button > button {
    width: 15.7rem;
    height: 4rem;
    cursor: pointer;

    border-radius: 0.6rem;
    border: 0.1rem solid var(--color-grayscale-300);
    background: var(--color-white);
  }

  @media screen and (max-width: 1248px) {
    height: 6.2rem;
    .logo-text {
      color: var(--gray-light-gray-90, #4a494f);
      text-align: center;
      font-family: Poppins;
      font-size: 1.9971rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .button > button {
      color: var(--color-grayscale-900);
      text-align: center;

      /* Font/16 Bold */
      font-family: Pretendard;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.6rem; /* 162.5% */
      letter-spacing: -0.016rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 767px) {
      .button > button {
        width: 14.2rem;
        height: 4rem;

        color: var(--color-grayscale-900);
        text-align: center;

        /* Font/14 Bold */
        font-family: Pretendard;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem; /* 142.857% */
        letter-spacing: -0.007rem;
      }
    }
  }
`;

export default NavContainer;
