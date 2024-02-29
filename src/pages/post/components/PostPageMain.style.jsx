import styled from "styled-components";

export const Layout = styled.div`
  background-color: var(--color-orange-300);
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

  .post-delete-button {
    position: relative;
    top: -10px;
    left: 135rem;
    padding: 1rem 2rem;
    background: #fff;
    border: none;
    border-radius: 2rem;
    cursor: pointer;

    &:hover {
      background: gray;
      color: #fff;
    }
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
