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
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 4rem;
    gap: 5rem;
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
