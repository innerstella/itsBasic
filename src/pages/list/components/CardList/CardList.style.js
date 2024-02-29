import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 116rem;

  .list-with-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-left: ${({ isLeftOn }) => (isLeftOn ? "-2rem" : "0")};
  }

  .paper-list {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;
