import Button from "../../components/button/Button";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainPageStyle from "./MainPage.styles";

const serviceImg = [
  "/assets/main/service_image_card1.png",
  "/assets/main/service_image_card2.png",
  "/assets/main/service_image_card3.png",
];

const MainPage = () => {
  return (
    <MainPageStyle>
      <NavigationBar />
      <div className="main-container">
        <div className="box-container">
          <div>
            <p className="point">Point. 01</p>
            <p className="text">
              누구나 손쉽게, 온라인 <span>롤링 페이지를 만들 수 있어요</span>
            </p>
            <p className="sub-text">로그인 없이 자유롭게 만들어요.</p>
          </div>
          <div className="card-container">
            {serviceImg.map((img) => (
              <img
                className="card"
                src={img}
                alt="메인페이지 카드 예시 이미지"
              />
            ))}
          </div>
        </div>
        <div className="box-container box-container-bottom">
          <img
            className="emoji-add"
            src="/assets/main/service_image_emoji.png"
            alt="이모지 예시 이미지"
          ></img>
          <div>
            <p className="point">Point. 02</p>
            <p className="text">
              서로에게 이모지로 감정을 <span>표현해보세요</span>
            </p>
            <p className="sub-text">롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </div>
        </div>
      </div>
      <Button link="/list">구경해보기</Button>
    </MainPageStyle>
  );
};

export default MainPage;
