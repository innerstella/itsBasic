import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import Card from "./components/Card/Card";
import dummyData from "./data/dummy.json";
import ArrowBtn from "./components/ArrowBtn/ArrowBtn";
import { useEffect, useState } from "react";

const ListPage = () => {
  const [isLeftOn, setIsLeftOn] = useState(false);
  const [isRightOn, setIsRightOn] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [currHeadIdx, setCurrHeadIdx] = useState(0);

  // 보여줄 데이터 세팅
  useEffect(() => {
    setDisplayData(dummyData.slice(0, 4));
  }, []);

  // 카드 목록 개수가 4개 이상일 때만 화살표 버튼을 보여줍니다.
  useEffect(() => {
    if (dummyData.length > 4) {
      setIsRightOn(true);
    }
  }, []);

  // 화살표 버튼 클릭 시 보여줄 데이터 변경
  const changeRange = (clickedType) => {
    if (clickedType === "right") {
      setDisplayData(dummyData.slice(currHeadIdx + 1, currHeadIdx + 5));
      setCurrHeadIdx(currHeadIdx + 1);
    } else if (clickedType === "left") {
      setCurrHeadIdx(currHeadIdx - 1);
      setDisplayData(dummyData.slice(currHeadIdx - 1, currHeadIdx + 3));
    }
  };

  // 화살표 버튼 노출 여부
  useEffect(() => {
    if (currHeadIdx === 0) {
      setIsLeftOn(false);
    } else {
      setIsLeftOn(true);
    }
    if (currHeadIdx === dummyData.length - 4) {
      setIsRightOn(false);
    } else {
      setIsRightOn(true);
    }
  }, [currHeadIdx]);

  return (
    <S.Container>
      <NavigationBar />
      <div className="main-container">
        <S.PaperListContainer isLeftOn={isLeftOn}>
          <p className="font-24-bold">인기 롤링 페이퍼 🔥</p>
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
        </S.PaperListContainer>
        <S.PaperListContainer>
          <p className="font-24-bold">최근에 만든 롤링 페이퍼 ⭐️️</p>
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
        </S.PaperListContainer>
      </div>
      <S.Button to="/post">
        <p className="font-18-bold">나도 만들어보기</p>
      </S.Button>
    </S.Container>
  );
};

export default ListPage;
