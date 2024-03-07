import styled from "styled-components";

const SkeletonUIStyle = styled.div`
  /* 이미지의 스켈레톤(뼈대) */
  .loading-img {
    width: 16.8rem;
    height: 16.8rem;
    border-radius: 1.6rem;
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
`;

export default SkeletonUIStyle;
