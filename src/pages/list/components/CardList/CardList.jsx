import { useEffect, useState } from "react";

import * as S from "./CardList.style";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import Card from "../Card/Card";
import EmptyCard from "../EmptyCard/EmptyCard";
import SkeletonNew from "../../../../components/skeleton/SkeletonNew";

/**
 *
 * @description CardList 컴포넌트는 Card 컴포넌트를 리스트로 보여주는 컴포넌트입니다.
 * @param {string} type popular | recent
 */
const CardList = ({ type }) => {
  const [isLeftOn, setIsLeftOn] = useState(false);
  const [isRightOn, setIsRightOn] = useState(false);
  const [displayData, setDisplayData] = useState();
  const [currHeadIdx, setCurrHeadIdx] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  //  반응형 렌더링
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 모든 데이터 가져와서 정렬
  const sortPopularData = (data) => {
    return [...data].sort((a, b) => b.messageCount - a.messageCount);
  };

  const sortRecentData = (data) => {
    return [...data].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  const getAll = async (amount) => {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-2/recipients/?limit=${amount}`
    );
    const data = await response.json();
    if (type === "popular") {
      setDisplayData(sortPopularData(data.results));
    } else if (type === "recent") {
      setDisplayData(sortRecentData(data.results));
    }
    setIsLoaded(true);
  };

  // 처음 렌더링 시 데이터 개수만 먼저 가져오기
  const getRecipientList = async () => {
    fetch("https://rolling-api.vercel.app/4-2/recipients/")
      .then((res) => res.json())
      .then((data) => {
        getAll(data.count);
      });
  };

  useEffect(() => {
    getRecipientList();
  }, []);

  // 카드 목록 개수가 4개 이상일 때만 화살표 버튼을 보여줍니다.
  useEffect(() => {
    if (displayData?.length > 4) {
      setIsRightOn(true);
    }
  }, [displayData?.length]);

  // 화살표 버튼 클릭 시 보여줄 데이터 변경
  const changeRange = (clickedType) => {
    if (clickedType === "right") {
      setCurrHeadIdx(currHeadIdx + 1);
    } else if (clickedType === "left") {
      setCurrHeadIdx(currHeadIdx - 1);
    }
  };

  // 화살표 버튼 노출 여부
  useEffect(() => {
    if (displayData?.length < 4) {
      setIsRightOn(false);
    } else {
      if (currHeadIdx === 0) {
        setIsLeftOn(false);
      } else {
        setIsLeftOn(true);
      }
      if (currHeadIdx === displayData?.length - 4) {
        setIsRightOn(false);
      } else {
        setIsRightOn(true);
      }
    }
  }, [currHeadIdx, displayData?.length]);

  if (!isLoaded) {
    return <SkeletonNew isLoaded={isLoaded} height="26rem"></SkeletonNew>;
  } else {
    if (isDesktop) {
      return (
        <S.DesktopContainer $isLeftOn={isLeftOn}>
          <div className="list-with-btn">
            {isLeftOn && (
              <ArrowBtn type="left" onClick={() => changeRange("left")} />
            )}
            {displayData?.length > 0 ? (
              <div className="paper-list">
                {displayData
                  ?.slice(currHeadIdx, currHeadIdx + 4)
                  .map((data) => {
                    return <Card key={data.id} data={data} />;
                  })}
              </div>
            ) : (
              <EmptyCard />
            )}
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
            {displayData?.length > 0 ? (
              <div className="paper-list">
                {displayData?.map((data) => {
                  return <Card key={data.id} data={data} />;
                })}
              </div>
            ) : (
              <EmptyCard />
            )}
          </div>
        </S.TabletContainer>
      );
    }
  }
};

export default CardList;
