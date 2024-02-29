import { useEffect, useState } from "react";
import * as S from "./CardList.style";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import Card from "../Card/Card";

const CardList = ({ title, data }) => {
  const [isLeftOn, setIsLeftOn] = useState(false);
  const [isRightOn, setIsRightOn] = useState(false);
  const [displayData, setDisplayData] = useState(data.slice(0, 4));
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
  }, [currHeadIdx, data.length]);

  return (
    <S.Container isLeftOn={isLeftOn}>
      <h1 className="font-24-bold">{title}</h1>
      <div className="list-with-btn">
        {isLeftOn && (
          <ArrowBtn type="left" onClick={() => changeRange("left")} />
        )}
        <div className="paper-list">
          {displayData.map((data) => {
            return <Card key={data.userId} data={data} />;
          })}
        </div>
        {isRightOn && (
          <ArrowBtn type="right" onClick={() => changeRange("right")} />
        )}
      </div>
    </S.Container>
  );
};

export default CardList;
