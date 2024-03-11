import { useEffect, useState } from "react";
import * as S from "./Card.style";
import { useNavigate } from "react-router-dom";
import { COLOR_LIST } from "../../../../constant/list";

/**
 *
 * @description 리스트 페이지 내 카드 컴포넌트
 * @param {data} object 롤링 페이퍼 카드 개별 정보
 */
const Card = ({ data }) => {
  const navigate = useNavigate();

  const [bgColor, setBgColor] = useState("purple");
  const [svgLink, setSvgLink] = useState("purple");

  // 카드 색상 설정
  useEffect(() => {
    const bgColor =
      data.backgroundColor === "beige" ? "orange" : data.backgroundColor;

    if (COLOR_LIST.includes(bgColor)) {
      setBgColor(bgColor);
      setSvgLink(`/assets/link/${bgColor}.svg`);
    } else {
      setBgColor(bgColor);
      setSvgLink("");
    }
  }, [data.backgroundColor]);

  return (
    <S.Container
      color={bgColor.length > 0 ? bgColor : data.backgroundImageURL}
      onClick={() => navigate(`/post/${data.id}`)}
    >
      <S.ContentContainer>
        <S.InfoContainer>
          <div className="recipient-name-box">
            <p className="font-24-bold">To. {data.name}</p>
          </div>
          <S.ProfileContainer>
            {data?.recentMessages?.map((writer) => {
              return (
                <div key={writer.id}>
                  <img
                    className="profile-icon"
                    src={writer.profileImageURL}
                    alt="프로필 이미지"
                  />
                </div>
              );
            })}
            {data?.messageCount > 3 && (
              <div className="nums font-12-regular">
                + {data.messageCount - 3}
              </div>
            )}
            {data?.messageCount === 0 && (
              <div className="nums font-12-regular">+ 0</div>
            )}
          </S.ProfileContainer>
          <p className="font-16-regular">
            <span className="font-16-bold">{data.messageCount}</span>명이
            작성했어요!
          </p>
        </S.InfoContainer>
        {data?.topReactions.length > 0 ? (
          <S.BadgeContainer>
            {data?.topReactions.map((reaction) => {
              if (reaction.count > 0) {
                return (
                  <S.Badge key={reaction.id}>
                    <span className="number">
                      {reaction.emoji} {reaction.count}
                    </span>
                  </S.Badge>
                );
              } else {
                return null;
              }
            })}
          </S.BadgeContainer>
        ) : (
          <S.EmptyBadgeContainer />
        )}
        {svgLink && <img className="svg" src={svgLink} alt="svg" />}
      </S.ContentContainer>
    </S.Container>
  );
};

export default Card;
