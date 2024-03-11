import styled from "styled-components";

const SkeletonUIStyle = styled.div`
  position: ${(props) =>
    props.position === "relative" ? "relative" : "absolute"};
  top: 0;
  left: 0;

  /* 이미지의 스켈레톤(뼈대) */
  .loading-img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ radius }) => radius};
    background: #ffffff;
    background-color: #e0e0e0;
  }

  @keyframes blinker {
    50% {
      opacity: 50%;
    }
  }
  .blink_me {
    animation: blinker 1s linear infinite;
  }

  @media screen and (max-width: 768px) {
    .loading-img {
      width: ${({ mWidth }) => mWidth};
      height: ${({ mHeight }) => mHeight};
    }
  }
`;

export default SkeletonUIStyle;
