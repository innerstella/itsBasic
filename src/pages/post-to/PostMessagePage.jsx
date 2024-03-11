import * as S from "./PostMessagePage.style";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Profile from "./components/profile/Profile";
import Dropdown from "./components/dropdown/Dropdown";
import TextEditor from "./components/text-editor/TextEditor";
import TextInput from "./components/text-input/TextInput";
import WideButton from "./components/wide-button/WideButton";
import { postMessages } from "../../api/recipients/postMessages";

export const FromContext = createContext();
export const ProfileContext = createContext();
export const RelationshipContext = createContext();
export const ContentContext = createContext();
export const FontContext = createContext();

// 기본 프로필 이미지
const defaultProfileImage =
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8";

/**
 *
 * @description 롤링 페이퍼에 메시지 보내기 페이지 (/post/{id}/message)
 */

const PostMessagePage = () => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const fromRef = useRef("");
  const profileRef = useRef(defaultProfileImage);
  const relationshipRef = useRef("지인");
  const contentRef = useRef("");
  const fontRef = useRef("Noto Sans");

  const sender = fromRef?.current?.value || "";
  const profileImageURL = profileRef?.current?.src || "";
  const relationship = relationshipRef?.current?.value || "";
  const content = contentRef?.current?.value?.ops?.[0]?.insert || "";
  const font = fontRef?.current?.value || "";

  // '생성하기' 버튼은 비활성화 상태에 있다가 받는 사람 이름과 카드 내용이 있는 경우 활성화 됩니다.
  const [isActive, setIsActive] = useState(false);

  const checkActive = () => {
    if (
      fromRef?.current?.value?.length > 0 &&
      contentRef?.current?.value?.ops?.[0]?.insert?.length > 0
    ) {
      setIsActive(true);
    }
  };

  // 롤링 페이퍼 생성
  const createPaper = () => {
    const data = {
      team: "4-2",
      recipientId: recipientId,
      sender: sender,
      profileImageURL: profileImageURL,
      relationship: relationship,
      content: content,
      font: font,
    };

    postMessages(recipientId, data)
      .then((data) => {
        localStorage.setItem(`${data.id}-Message`, "Owner");
        navigate(`/post/${recipientId}`);
      })
      .catch((err) => console.error(err));
  };

  const moveTo = (e) => {
    e.preventDefault();

    if (isActive) {
      createPaper();
    }
  };

  // 엔터 키를 눌렀을 때 생성하기 함수 호출
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && isActive) {
        createPaper();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress); // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    };
  }, [isActive]);

  return (
    <>
      <NavigationBar />
      <S.Container>
        <form onSubmit={(e) => moveTo(e)}>
          <FromContext.Provider value={{ fromRef }}>
            <div className="section-container" onBlur={checkActive}>
              <h1 className="text-title font-24-bold">
                From. <span className="required">*</span>
              </h1>
              <TextInput />
            </div>
          </FromContext.Provider>
          <ProfileContext.Provider value={{ profileRef }}>
            <div className="section-container">
              <h1 className="text-title font-24-bold">프로필 이미지</h1>
              <Profile />
            </div>
          </ProfileContext.Provider>
          <RelationshipContext.Provider value={{ relationshipRef }}>
            <div className="section-container">
              <h1 className="text-title font-24-bold">상대와의 관계</h1>
              <Dropdown type="select-relationship" />
            </div>
          </RelationshipContext.Provider>
          <ContentContext.Provider value={{ contentRef }}>
            <div className="section-container" onBlur={checkActive}>
              <h1 className="text-title font-24-bold">
                내용을 입력해 주세요 <span className="required">*</span>
              </h1>
              <TextEditor />
            </div>
          </ContentContext.Provider>
          <FontContext.Provider value={{ fontRef }}>
            <div className="section-container">
              <h1 className="text-title font-24-bold">폰트 선택</h1>
              <Dropdown type="select-font" />
            </div>
          </FontContext.Provider>
          <WideButton isActive={isActive} onClick={moveTo}>
            생성하기
          </WideButton>
        </form>
      </S.Container>
    </>
  );
};

export default PostMessagePage;
