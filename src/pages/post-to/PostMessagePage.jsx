import * as S from "./PostMessagePage.style";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Button from "../../components/button/Button";
import Profile from "./components/profile/Proifle";
import Dropdown from "./components/dropdown/Dropdown";

/**
 *
 * @description 롤링 페이퍼에 메시지 보내기 페이지 (/post/{id}/message)
 * @todo 페이지 레이아웃 구성, 기능 구현
 */
const PostMessagePage = () => {
  return (
    <>
      <NavigationBar />
      <S.Container>
        <div className="section-container">
          <p className="text-title font-24-bold">From.</p>
          <form className="recipient-input-form">
            <input
              className="recipient-input font-16-regular"
              placeholder="이름을 입력해 주세요."
            />
          </form>
        </div>
        <div className="section-container">
          <p className="text-title font-24-bold">프로필 이미지</p>
          <Profile />
        </div>
        <div className="section-container">
          <p className="text-title font-24-bold">상대와의 관계</p>
          <Dropdown type="select-reltaionship" />
        </div>
        <div className="section-container">
          <p className="text-title font-24-bold">내용을 입력해 주세요</p>
        </div>
        <div className="section-container">
          <p className="text-title font-24-bold">폰트 선택</p>
          <Dropdown type="select-font" />
        </div>
      </S.Container>
      <Button>생성하기</Button>
    </>
  );
};

export default PostMessagePage;
