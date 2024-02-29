import { useEffect, useState } from "react";
import * as S from "./Card.style";

/**
 *
 * @description 리스트 페이지 카드 컴포넌트
 * @param {data} object 롤링 페이퍼 카드 정보
 */

const MIN_CARD_NUM = 0;
const MAX_CARD_NUM = 3;
const COLORS = ["purple", "orange", "blue", "green"];

const Card = ({ data }) => {
  const [bgColor, setBgColor] = useState("purple");
  const [svgLink, setSvgLink] = useState("purple");

  // 카드 색상 설정
  useEffect(() => {
    if (COLORS.includes(data.bg)) {
      setBgColor(data.bg);
      setSvgLink(`/assets/link/${data.bg}.svg`);
    } else {
      setBgColor(data.bg);
      setSvgLink("");
    }
  }, [data.bg]);

  return (
    <S.Container color={bgColor}>
      <S.ContentContainer>
        <S.InfoContainer>
          <p className="font-24-bold">To. {data.userName}</p>
          <S.ProfileContainer>
            {data?.writers.slice(MIN_CARD_NUM, MAX_CARD_NUM).map((writer) => {
              return (
                <div key={writer.id}>
                  <img
                    className="profile-icon"
                    src={writer.imgUrl}
                    alt={writer.id}
                  />
                </div>
              );
            })}
            {data?.writers.length > 3 && (
              <div className="nums font-12-regular">
                + {data.writers.length - 3}
              </div>
            )}
          </S.ProfileContainer>
          <p className="font-16-regular">
            <span className="font-16-bold">{data.writers.length}</span>명이
            작성했어요!
          </p>
        </S.InfoContainer>
        <S.BadgeContainer>
          <S.Badge>
            <span className="number">👍 {data.emoji1}</span>
          </S.Badge>
          <S.Badge>
            <span className="number">😍 {data.emoji2}</span>
          </S.Badge>
          <S.Badge>
            <span className="number">😢 {data.emoji3}</span>
          </S.Badge>
        </S.BadgeContainer>
        {svgLink && <img className="svg" src={svgLink} alt="purple" />}
      </S.ContentContainer>
    </S.Container>
  );
};

export default Card;
