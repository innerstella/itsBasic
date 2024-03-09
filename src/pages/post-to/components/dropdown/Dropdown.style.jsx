import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.8rem;
  border: 1px solid var(--color-grayscale-300, #ccc);
  width: 33rem;

  .dropdown-container {
    cursor: pointer;
    display: flex;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
    align-items: center;

    border: none;
    border-radius: 0.8rem;

    .text {
      color: var(--color-grayscale-500);
    }
  }

  /* 포커스 제거 */
  select:focus {
    outline: none;
    box-shadow: none;
  }
`;
