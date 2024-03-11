import { useEffect, useState } from "react";
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
      <div className="gnb-container">
        <NavigationBar />
      </div>
      <div className="main-container">
        <div className="list-container">
          <h1 className="font-24-bold title">인기 롤링 페이퍼 🔥</h1>
          {/* {popularData ? ( */}
          <CardList type="popular" />
          {/* ) : (
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
          )} */}
        </div>
        <div className="list-container">
          <h1 className="font-24-bold title">최근에 만든 롤링 페이퍼 ⭐️</h1>
          {/* {recentData && <CardList type="recent" />} */}
          <CardList type="recent" />
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
