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
  background-color: ${(props) => props.theme.backgroundColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 2rem;
  @media (max-width: 767.5px) {
    width: 50rem;
    height: 65rem;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    img {
      width: 8rem;
      height: 8rem;
      @media (max-width: 767.5px) {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .modal-title {
    font-size: 4rem;
    @media (max-width: 767.5px) {
      font-size: 2.8rem;
    }
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
    @media (max-width: 767.5px) {
      height: 53rem;
    }
    .pokemon-detail-box {
      width: 10rem;
      height: 10rem;
      border: 0.12rem solid ${(props) => props.theme.textColor};
      border-radius: 500rem;
      padding: 0.5rem;

      @media (max-width: 767.5px) {
        width: 6rem;
        height: 6rem;
      }

      img {
        width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.3);
        }
      }

      p {
        text-align: center;
        position: relative;
        top: 9px;
        @media (max-width: 767.5px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
