import { useEffect, useState } from "react";
import * as S from "./CardList.style";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import Card from "../Card/Card";

const CardList = ({ data }) => {
  const [isLeftOn, setIsLeftOn] = useState(false);
  const [isRightOn, setIsRightOn] = useState(false);
  const [displayData, setDisplayData] = useState();
  const [currHeadIdx, setCurrHeadIdx] = useState(0);

  // 보여줄 데이터 세팅
  useEffect(() => {
    setDisplayData(data.slice(0, 4));
  }, []);

  // 카드 목록 개수가 4개 이상일 때만 화살표 버튼을 보여줍니다.
  useEffect(() => {
    if (data.length > 4) {
      setIsRightOn(true);
    }
  }, []);

  // 화살표 버튼 클릭 시 보여줄 데이터 변경
  const changeRange = (clickedType) => {
    if (clickedType === "right") {
      setDisplayData(data.slice(currHeadIdx + 1, currHeadIdx + 5));
      setCurrHeadIdx(currHeadIdx + 1);
    } else if (clickedType === "left") {
      setCurrHeadIdx(currHeadIdx - 1);
      setDisplayData(data.slice(currHeadIdx - 1, currHeadIdx + 3));
    }
  };

  // 화살표 버튼 노출 여부
  useEffect(() => {
    if (data.length < 4) {
      setIsRightOn(false);
    } else {
      if (currHeadIdx === 0) {
        setIsLeftOn(false);
      } else {
        setIsLeftOn(true);
      }
      if (currHeadIdx === data.length - 4) {
        setIsRightOn(false);
      } else {
        setIsRightOn(true);
      }
    }
  }, [currHeadIdx, data.length]);

  //  반응형 렌더링
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (data.length === 0) {
    return <div>로딩중...</div>;
  }

  if (isDesktop) {
    return (
      <S.DesktopContainer isLeftOn={isLeftOn}>
        <div className="list-with-btn">
          {isLeftOn && (
            <ArrowBtn type="left" onClick={() => changeRange("left")} />
          )}
          <div className="paper-list">
            {displayData?.map((data) => {
              return <Card key={data.id} data={data} />;
            })}
          </div>
          {isRightOn && (
            <ArrowBtn type="right" onClick={() => changeRange("right")} />
          )}
        </div>
      </S.DesktopContainer>
    );
  } else {
    return (
      <S.TabletContainer>
        <div className="list-with-btn">
          <div className="paper-list">
            {displayData?.map((data) => {
              return <Card key={data.id} data={data} />;
            })}
          </div>
        </div>
      </S.TabletContainer>
    );
  }
};

export default CardList;
