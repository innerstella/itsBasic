import React, { useState } from "react";
import CardStyle from "./Card.style";
import SkeletonUI from "./SkeletonUI";

// 컬러카드 색
const CARDCOLOR = [
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
const Card = ({
  type,
  cardColorChecks,
  cardImageChecks,
  handleCardColorCheck,
  handleCardImageCheck,
  cardImage,
}) => {
  const [imageLoaded, setImageLoaded] = useState(
    Array(cardImage.length).fill(false)
  );

  return (
    <>
      {type === "color"
        ? CARDCOLOR.map((color, index) => (
            <CardStyle
              className="card card-color"
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
            <>
              <img
                src={imageUrl}
                style={{ display: "none" }}
                onLoad={() => {
                  const newImageLoaded = [...imageLoaded];
                  newImageLoaded[index] = true;
                  setImageLoaded(newImageLoaded);
                }}
                alt="카드 이미지"
              />
              {imageLoaded[index] ? (
                <CardStyle
                  className="card card-image"
                  key={index}
                  value={imageUrl}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  onClick={() => handleCardImageCheck(index)}
                >
                  {cardImageChecks === index && (
                    <>
                      <img
                        className="check-image"
                        src="/assets/post-to/Enabled.svg"
                        alt="체크 표시"
                      />
                      <div className="select-opacity" />
                    </>
                  )}
                </CardStyle>
              ) : (
                <SkeletonUI />
              )}
            </>
          ))}
    </>
  );
};

export default Card;
