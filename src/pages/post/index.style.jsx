import styled from "styled-components";
import NavigationBar from "../../components/navigationBar/NavigationBar";

export const UpperHeaderWrapper = styled.div`
  width: 100vw;
  background-color: var(--color-white);
`;

export const UpperHeaderBar = styled(NavigationBar)`
  @media (max-width: 767.5px) {
    display: none;
  }
`;

export const OverScrollBox = styled.div`
  position: absolute;
  background: var(--color-white);
  width: 100vw;
  height: 10rem;
  top: -10rem;
`;

export const Layout = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 6.1rem;
    height: 1.2px;
    width: 100%;
    background: #ededed;

    @media (max-width: 1023.5px) {
      content: "";
      position: absolute;
      left: 0;
      bottom: 94.1rem;
      height: 1.2px;
      width: 100%;
      background: #ededed;
    }

    @media (max-width: 767.5px) {
      content: "";
      position: absolute;
      left: 0;
      top: 5.1rem;
      height: 1.2px;
      width: 100%;
      background: #ededed;
    }
  }
`;
