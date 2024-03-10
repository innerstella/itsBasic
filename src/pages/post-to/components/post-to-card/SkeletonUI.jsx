import SkeletonUIStyle from "./SkeletonUI.style";

const SkeletonUI = () => {
  return (
    <SkeletonUIStyle>
      <div className="loading-img blink_me" />
    </SkeletonUIStyle>
  );
};

export default SkeletonUI;
