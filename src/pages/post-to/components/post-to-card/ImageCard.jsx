import { useState } from "react";
import CardStyle from "./Card.style";
import SkeletonUI from "./SkeletonUI";

/**
 *
 * @description ImageCard 컴포넌트에 전달될 props 객체
 * @property {string} imageUrl - 이미지 url
 * @property {number} handleCardImageCheck - 카드 이미지를 변경할 때 호출되는 핸들러 함수
 * @property {number} cardImageChecks - 체크이미지가 나타날 이미지카드 인덱스
 * @property {function} index - 선택된 카드의 인덱스
 */
const ImageCard = ({
  imageUrl,
  handleCardImageCheck,
  cardImageChecks,
  index,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <CardStyle onClick={() => handleCardImageCheck(index)}>
      <img
        className="img"
        src={imageUrl}
        alt="카드 이미지"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
      {!imageLoaded && <SkeletonUI />}
      {cardImageChecks === index && imageLoaded && (
        <>
          <img
            className="check-image"
            src="/assets/post-to/Enabled.svg"
            alt="체크 표시"
          />
          {imageLoaded && <div className="select-opacity" />}
        </>
      )}
    </CardStyle>
  );
};

export default ImageCard;
