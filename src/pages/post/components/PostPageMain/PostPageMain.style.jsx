import styled from "styled-components";

const postBackgroundColor = {
  beige: "var(--color-orange-200)",
  purple: "var(--color-purple-200)",
  blue: "var(--color-blue-200)",
  green: "var(--color-green-200)",
};

export const Layout = styled.div`
  position: relative;
  background: ${({ background }) =>
    postBackgroundColor[background]
      ? postBackgroundColor[background]
      : `url(${background})`};
  padding-top: 11.4rem;
  padding-bottom: 24.6rem;
  height: calc(100% - 6.2rem - 6.8rem);
  @media (max-width: 1247.5px) {
    padding: 0rem 2.4rem;
    padding-top: 11.4rem;
    padding-bottom: 24.6rem;
  }
  @media (max-width: 1023.5px) {
    padding-top: 9.4rem;
    padding-bottom: 9.1rem;
  }

  @media (max-width: 767.5px) {
    padding-top: 2.4rem;
    padding-bottom: 3.8rem;
  }
`;

export const Container = styled.div`
  display: grid;
  width: 120rem;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1247.5px) {
    width: 100%;
  }
  @media (max-width: 1023.5px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767.5px) {
    display: flex;
    flex-direction: column;
  }
`;
