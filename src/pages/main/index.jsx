import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainPageStyle from "./MainPage.style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 *
 * @description 메인 소개 페이지
 */
const MainPage = () => {
  return (
    <>
      <NavigationBar show={"show"} />
      <MainPageStyle>
        <div className="box-container">
          <div className="text-container">
            <h1 className="point font-14-bold">Point. 01</h1>
            <h2 className="text font-24-bold">
              누구나 손쉽게, 온라인 <span>롤링 페이지를 만들 수 있어요</span>
            </h2>
            <h3 className="sub-text font-18-regular">
              로그인 없이 자유롭게 만들어요.
            </h3>
          </div>
          <div className="card-container">
            <img
              src="/assets/main/service_card_image.webp"
              className="card-image"
              alt="카드 예시 이미지"
            />
          </div>
        </div>
        <div className="box-container box-container-bottom">
          <img
            className="emoji-image"
            src="/assets/main/service_image_emoji.webp"
            alt="이모지 예시 이미지"
          ></img>
          <div className="text-container">
            <h1 className="point font-14-bold">Point. 02</h1>
            <h2 className="text font-24-bold">
              서로에게 이모지로 감정을 <span>표현해보세요</span>
            </h2>
            <h3 className="sub-text font-18-regular">
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </h3>
          </div>
        </div>
        <Link to="/list">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="font-18-bold">구경해보기</span>
          </motion.button>
        </Link>
      </MainPageStyle>
    </>
  );
};

export default MainPage;
