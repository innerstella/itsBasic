import styled from "styled-components";

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .list-with-btn {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ isLeftOn }) => (isLeftOn ? "-2rem" : "0")};
  }

  .paper-list {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const TabletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: 100vw;
  overflow-x: scroll;
  padding: 0 2.4rem;

  .list-with-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .paper-list {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-right: 5rem;
  }
`;
