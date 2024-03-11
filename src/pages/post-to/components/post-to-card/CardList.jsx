import React from "react";
import CardStyle from "./Card.style";
import ImageCard from "./ImageCard";

// 컬러카드 색
const CARD_COLOR = [
  "--color-orange-200",
  "--color-purple-200",
  "--color-blue-200",
  "--color-green-200",
];

/**
 *
 * @description Card 컴포넌트에 전달될 props 객체
 * @property {string} type - 카드의 유형을 나타내는 문자열입니다. "color" 또는 "image"
 * @property {number} cardColorChecks - 체크이미지가 나타날 컬러카드 인덱스
 * @property {number} cardImageChecks - 체크이미지가 나타날 이미지카드 인덱스
 * @property {function} handleCardColorCheck - 카드 컬러를 변경할 때 호출되는 핸들러 함수
 * @property {function} handleCardImageCheck - 카드 이미지를 변경할 때 호출되는 핸들러 함수
 * @property {Array<string>} cardImage - 사용 가능한 카드 이미지 URL 목록
 */
const CardList = ({
  type,
  cardColorChecks,
  cardImageChecks,
  handleCardColorCheck,
  handleCardImageCheck,
  cardImage,
}) => {
  return (
    <>
      {type === "color"
        ? CARD_COLOR.map((color, index) => (
            <CardStyle
              key={index}
              value={color}
              color={color}
              onClick={() => handleCardColorCheck(index)}
            >
              {cardColorChecks === index && (
                <img
                  className="check-image"
                  src="/assets/post-to/Enabled.svg"
                  alt="체크 표시"
                />
              )}
            </CardStyle>
          ))
        : cardImage.map((imageUrl, index) => (
            <ImageCard
              key={index}
              imageUrl={imageUrl}
              handleCardImageCheck={handleCardImageCheck}
              cardImageChecks={cardImageChecks}
              index={index}
            />
          ))}
    </>
  );
};

export default CardList;
