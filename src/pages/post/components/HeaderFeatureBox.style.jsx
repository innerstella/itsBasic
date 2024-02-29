import styled from "styled-components";

export const Contaner = styled.div`
  padding: 1.3rem 0rem;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1247.5px) {
    width: 100%;
    padding: 1.3rem 2.4rem;
  }

  @media (max-width: 767.5px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: start;
  }
`;
