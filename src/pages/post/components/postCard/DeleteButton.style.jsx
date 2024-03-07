import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto 2.5rem;
  width: 120rem;
  display: flex;
  gap: 20px;
  justify-content: right;

  @media (max-width: 1247.5px) {
    width: 100%;
  }

  @media (max-width: 767.5px) {
    width: 90%;
    z-index: 2;
    position: fixed;
    bottom: 25px;
    right: 25px;
    left: 25px;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: #9935ff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: gray;
    color: #fff;
  }
<<<<<<< HEAD:src/pages/post/components/postCard/DeleteButton.style.jsx
  @media (max-width: 767.5px) {
    width: 100%;
  }
`;
=======
}
.edit {
  display: flex;
  width: 100%;
  justify-content: right;
}
@media (max-width: 1247.5px) {
  .button-box {
    width: 100%;
  }
}
@media (max-width: 767.5px) {
  .button-box {
    width: 90%;
    z-index: 2;
    position: fixed;
    bottom: 0;
    right: 25px;
    left: 25px;
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .btn {
    width: 100%;
  }
}
>>>>>>> upstream/develop:src/pages/post/components/postCard/DeleButton.module.css
