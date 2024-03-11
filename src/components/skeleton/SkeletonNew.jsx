import { useEffect } from "react";
import styled from "styled-components";

const SkeletonNew = ({ isLoaded, height, children }) => {
  useEffect(() => {
    console.log("SkeletonNew isLoaded:", isLoaded);
  }, [isLoaded]);
  return (
    <SkeletonUIStyle isLoaded={isLoaded} height={height}>
      <div className="loading-img blink_me">{children}</div>
    </SkeletonUIStyle>
  );
};

export default SkeletonNew;

const SkeletonUIStyle = styled.div`
  /* 이미지의 스켈레톤(뼈대) */
  .loading-img {
    width: 100%;
    height: ${({ height }) => height};
    border-radius: 1.6rem;
    background: #ffffff;
    background-color: #e0e0e0;
    z-index: 100;
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
