import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 120.7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 4rem;
    gap: 5rem;
  }
`;

export const PaperListContainer = styled.div`
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

export const Button = styled(Link)`
  display: flex;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 1.2rem;
  background: var(--Purple-600, #9935ff);

  color: var(--color-white, #fff);
`;
