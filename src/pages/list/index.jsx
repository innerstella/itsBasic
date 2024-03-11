import { Link } from "react-router-dom";

import * as S from "./ListPage.style";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import CardList from "./components/CardList/CardList";

/**
 *
 * @description ListPage 컴포넌트는 인기 롤링페이퍼와 최근에 만든 롤링페이퍼를 보여주는 페이지입니다!
 */
const ListPage = () => {
  return (
    <S.Container>
      <NavigationBar />
      <div className="main-container">
        <div className="list-container">
          <h1 className="font-24-bold title">인기 롤링 페이퍼 🔥</h1>
          <CardList type="popular" />
        </div>
        <div className="list-container">
          <h1 className="font-24-bold title">최근에 만든 롤링 페이퍼 ⭐️</h1>
          <CardList type="recent" />
        </div>
      </div>
      <S.ButtonContainer>
        <Link to="/post">
          <button className="btn">
            <span className="font-18-bold">나도 만들어보기</span>
          </button>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ListPage;
