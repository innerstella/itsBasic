import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  .selected-profile {
    display: flex;
    padding: 2.4rem;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 10rem;
    background: var(--color-grayscale-300, #ccc);

    width: 8rem;
    height: 8rem;

    .text {
      color: var(--color-grayscale-500);
    }
  }

  .select-profile {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .profile {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }
  }
`;
