import SkeletonUIStyle from "./SkeletonUI.style";

/**
 *
 * @description SkeletonUI 컴포넌트에 전달될 props 객체
 * @property {string} width - 스켈레톤 가로 길이
 * @property {string} height - 스켈레톤 세로 길이
 * @property {string} mWidth - 스켈레톤 모바일 시 가로 길이
 * @property {string} mWeight - 스켈레톤 모바일 시 세로 길이
 * @property {string} radius - 모서리 둥글기
 * @property {string} position - position, relative 지정 시 relative, 그 외 absolute
 */
const SkeletonUI = ({
  className,
  width,
  height,
  mWidth,
  mHeight,
  radius,
  position,
}) => {
  return (
    <SkeletonUIStyle
      className={className}
      width={width}
      height={height}
      mWidth={mWidth}
      mHeight={mHeight}
      radius={radius}
      position={position}
    >
      <div className="loading-img blink_me" />
    </SkeletonUIStyle>
  );
};

export default SkeletonUI;
