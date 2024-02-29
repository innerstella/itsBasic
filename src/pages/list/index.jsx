import dummyData from "./data/dummy.json";
import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
          {popularData?.length && <CardList data={popularData} />}
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
