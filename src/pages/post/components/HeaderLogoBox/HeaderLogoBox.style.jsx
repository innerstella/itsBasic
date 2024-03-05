import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100vw;
  background-color: var(--color-white);
`;

export const Container = styled.div`
  padding: 1.1rem 0rem;
  width: 120rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1247.5px) {
    width: 100%;
  }

  @media (max-width: 767.5px) {
    display: none;
  }
`;

export const Box = styled.div`
  padding: 0.6rem 0rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1247.5px) {
    margin-left: 2.4rem;
  }

  .header-logo-image {
    color: #4a494f;
    font-family: Poppins;
    font-size: 1.9971rem;
    font-weight: 700;
  }

  p {
    color: #4a494f;
    font-family: Poppins;
    font-size: 1.9971rem;
    font-weight: 700;
  }
`;
