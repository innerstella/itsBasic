import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .skeleton-name {
    margin-left: 4rem;
  }

  @media (max-width: 767.5px) {
    padding: 1.2rem 2rem;
  }

  p {
    color: ${(props) => props.theme.textColor};

    @media (max-width: 767.5px) {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.8rem;
      letter-spacing: -0.018rem;
    }
  }
`;
