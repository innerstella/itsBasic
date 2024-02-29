import styled from "styled-components";

const NavContainer = styled.div`
  width: 100vw;
  border-bottom: 0.1rem solid #ededed;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120.7rem;
    height: 6.2rem;
    margin: 0 auto;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #4a494f;
  }

  .button,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.7rem;
    height: 4rem;
    cursor: pointer;
  }

  button {
    color: var(--color-grayscale-900);
    border-radius: 0.6rem;
    border: 0.1rem solid var(--color-grayscale-300);
    background: var(--color-white);
  }

  @media screen and (max-width: 1248px) {
    .nav-container {
      width: auto;
      padding: 0 2.4rem;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 767px) {
    .button,
    button {
      width: 14.2rem;
    }

    button {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export default NavContainer;
