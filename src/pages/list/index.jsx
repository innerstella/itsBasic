import dummyData from "./data/dummy.json";
import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <S.Container>
      <div className="gnb-container">
        <NavigationBar />
      </div>
      <div className="main-container">
        <div className="list-container">
          <p className="font-24-bold title">인기 롤링 페이퍼 🔥</p>
          <CardList data={dummyData} />
        </div>
        <div className="list-container">
          <p className="font-24-bold title">최근에 만든 롤링 페이퍼 ⭐️</p>
          <CardList data={dummyData} />
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
