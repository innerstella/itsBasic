import Button from "../../components/button/Button";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainPageStyle from "./MainPage.style";

const MainPage = () => {
  return (
    <>
      <NavigationBar show="show" />
      <MainPageStyle>
        <div className="box-container">
          <div className="text-container">
            <p className="point font-14-bold">Point. 01</p>
            <p className="text font-24-bold">
              누구나 손쉽게, 온라인 <span>롤링 페이지를 만들 수 있어요</span>
            </p>
            <p className="sub-text font-18-regular">
              로그인 없이 자유롭게 만들어요.
            </p>
          </div>
          <div className="card-container">
            <img
              src="/assets/main/service_card_image.png"
              className="card-image"
              alt="카드 예시 이미지"
            />
          </div>
        </div>
        <div className="box-container box-container-bottom">
          <img
            className="emoji-image"
            src="/assets/main/service_image_emoji.png"
            alt="이모지 예시 이미지"
          ></img>
          <div className="text-container">
            <p className="point font-14-bold">Point. 02</p>
            <p className="text font-24-bold">
              서로에게 이모지로 감정을 <span>표현해보세요</span>
            </p>
            <p className="sub-text font-18-regular">
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </p>
          </div>
        </div>
      </MainPageStyle>
      <Button link="/list" width="short" show="none" className="button">
        구경해보기
      </Button>
    </>
  );
};

export default MainPage;
