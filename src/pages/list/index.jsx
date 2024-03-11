import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";
import SkeletonUI from "../../components/skeleton-ui/SkeletonUI";

/**
 *
 * @description ListPage 컴포넌트는 인기 롤링페이퍼와 최근에 만든 롤링페이퍼를 보여주는 페이지입니다!
 */
const ListPage = () => {
  const [popularData, setPopularData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [cardLoaded, setCardLoaded] = useState(false);

  useEffect(() => {
    getRecipientList();
  }, []);

  const getRecipientList = async () => {
    fetch("https://rolling-api.vercel.app/4-2/recipients/")
      .then((res) => res.json())
      .then((data) => {
        sortPopularData(data.results);
        sortRecentData(data.results);
        setCardLoaded(true);
      });
  };

  const sortPopularData = (data) => {
    const sortedData = [...data].sort(
      (a, b) => b.messageCount - a.messageCount
    );
    setPopularData(sortedData);
  };

  const sortRecentData = (data) => {
    const sortedData = [...data].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setRecentData(sortedData);
  };

  return (
    <S.Container>
      <div className="gnb-container">
        <NavigationBar />
      </div>
      <div className="main-container">
        <div className="list-container">
          <h1 className="font-24-bold title">인기 롤링 페이퍼 🔥</h1>
          {!cardLoaded && (
            <div className="skeleton-container">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonUI
                  key={i}
                  width="27.7rem"
                  height="26rem"
                  mobileWidth="100%"
                  mobileWeight="100%"
                  radius="1.6rem"
                  position="relative"
                />
              ))}
            </div>
          )}
          {popularData.length > 0 && cardLoaded && (
            <CardList data={popularData} />
          )}
          {popularData.length === 0 && cardLoaded && (
            <S.EmptyCardList>
              <h3 className="font-24-bold">
                아직 작성된
                <br />
                롤링페이퍼가 없어요
              </h3>
              <div className="svg-container">
                <img className="svg" src="/assets/link/empty.svg" alt="empty" />
              </div>
            </S.EmptyCardList>
          )}
        </div>
        <div className="list-container">
          <h1 className="font-24-bold title">최근에 만든 롤링 페이퍼 ⭐️</h1>
          {cardLoaded ? (
            <CardList data={recentData} />
          ) : (
            <div className="skeleton-container">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonUI
                  key={i}
                  width="27.7rem"
                  height="26rem"
                  mobileWidth="100%"
                  mobileWeight="100%"
                  radius="1.6rem"
                  position="relative"
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <S.ButtonContainer>
        <button className="btn">
          <Link to="/post">
            <span className="font-18-bold">나도 만들어보기</span>
          </Link>
        </button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ListPage;
