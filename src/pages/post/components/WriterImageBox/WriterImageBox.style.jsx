import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  .profile-icon {
    width: 2.8rem;
    height: 2.8rem;
    /* margin-right: -1rem; */
    display: flex;
    padding: 0.2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 3rem;
    background: #fff;
  }
`;

export const NumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 500rem;
  background-color: var(--color-white);
  border: 0.2rem solid #e3e3e3;
  margin-left: 0.1rem;

  p {
    font-weight: 500;
    color: #484848 !important;
  }
`;
