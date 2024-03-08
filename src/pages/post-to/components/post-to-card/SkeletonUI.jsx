import SkeletonUIStyle from "./SkeletonUI.style";

/**
 *
 * @description SkeletonUI 컴포넌트에 전달될 props 객체
 * @property {string} width - 스켈레톤 가로 길이
 * @property {string} height - 스켈레톤 세로 길이
 * @property {string} mobileWidth - 스켈레톤 모바일 시 가로 길이
 * @property {string} mobileWeight - 스켈레톤 모바일 시 세로 길이
 * @property {string} radius - 모서리 둥글기
 */
const SkeletonUI = ({ width, height, mWidth, mHeight, radius }) => {
  return (
    <SkeletonUIStyle
      width={width}
      height={height}
      mWidth={mWidth}
      mHeight={mHeight}
      radius={radius}
    >
      <div className="loading-img blink_me" />
    </SkeletonUIStyle>
  );
};

export default SkeletonUI;
