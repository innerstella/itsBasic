import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Box = styled.div`
  width: 70rem;
  height: 75rem;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 2rem;

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }

  .modal-title {
    font-size: 4rem;
  }
  .pokemon-image-container::-webkit-scrollbar {
    width: 10px;
  }
  .pokemon-image-container::-webkit-scrollbar-thumb {
    background-color: #ff758f;
  }
  .pokemon-image-container::-webkit-scrollbar-track {
    background-color: #ff8fa3;
  }
  .pokemon-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 60rem;
    overflow-y: scroll;
    align-items: center;
    gap: 2rem;
    border: 2px solid #c9184a;
    padding: 2rem;

    .pokemon-detail-box {
      width: 10rem;
      height: 10rem;
      border: 0.12rem solid #000;
      border-radius: 500rem;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        img {
          transform: scale(1.3);
        }
      }

      img {
        width: 100%;
      }

      p {
        text-align: center;
        position: relative;
        top: 9px;
      }
    }
  }
`;
