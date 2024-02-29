import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";

const ListPage = () => {
  const [popularData, setPopularData] = useState();
  const [recentData, setRecentData] = useState();

  useEffect(() => {
    getRecipientList();
  }, []);

  const getRecipientList = async () => {
    fetch("https://rolling-api.vercel.app/4-2/recipients/")
      .then((res) => res.json())
      .then((data) => {
        // sortPopularData(data.results);
        sortRecentData(data.results);
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
          <p className="font-24-bold title">인기 롤링 페이퍼 🔥</p>
          {popularData ? (
            <CardList data={popularData} />
          ) : (
            <S.EmptyCardList>
              <p className="font-24-bold">
                아직 작성된
                <br />
                롤링페이퍼가 없어요
              </p>
              <div className="svg-container">
                <img className="svg" src="/assets/link/empty.svg" alt="empty" />
              </div>
            </S.EmptyCardList>
          )}
        </div>
        <div className="list-container">
          <p className="font-24-bold title">최근에 만든 롤링 페이퍼 ⭐️</p>
          {recentData && <CardList data={recentData} />}
        </div>
      </div>
      <S.Button>
        <Link className="btn" to="/post">
          <p className="font-18-bold">나도 만들어보기</p>
        </Link>
      </S.Button>
    </S.Container>
  );
};

export default ListPage;
