import dummyData from "./data/dummy.json";
import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";

const ListPage = () => {
  return (
    <S.Container>
      <NavigationBar />
      <div className="main-container">
        <CardList title="인기 롤링 페이퍼 🔥" data={dummyData} />
        <CardList title="최근에 만든 롤링 페이퍼 ⭐️️" data={dummyData} />
      </div>
      <S.Button to="/post">
        <p className="font-18-bold">나도 만들어보기</p>
      </S.Button>
    </S.Container>
  );
};

export default ListPage;
