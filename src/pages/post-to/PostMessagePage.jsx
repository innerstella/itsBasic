import * as S from "./PostMessagePage.style";
import { createContext, useEffect, useState } from "react";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Profile from "./components/profile/Proifle";
import Dropdown from "./components/dropdown/Dropdown";
import TextEditor from "./components/text-editor/TextEditor";
import TextInput from "./components/text-input/TextInput";
import WideButton from "./components/wide-button/WideButton";
import { useNavigate } from "react-router-dom";

export const FromContext = createContext();
export const ProfileContext = createContext();
export const RelationshipContext = createContext();
export const ContentContext = createContext();
export const FontContext = createContext();

/**
 *
 * @description 롤링 페이퍼에 메시지 보내기 페이지 (/post/{id}/message)
 * @todo 기능 구현
 */
const PostMessagePage = () => {
  const [fromInput, setFromInput] = useState("");
  const [profileInput, setProfileInput] = useState("");
  const [relationshipInput, setRelationshipInput] = useState("지인");
  const [contentInput, setContentInput] = useState("");
  const [fontInput, setFontInput] = useState("Noto Sans");

  // '생성하기' 버튼은 비활성화 상태에 있다가 받는 사람 이름과 카드 내용이 있는 경우 활성화 됩니다.
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const moveTo = () => {
    isActive && navigate("/post/1/preview");
  };

  useEffect(() => {
    if (fromInput.length > 0 && contentInput.length > 0) {
      setIsActive(true);
    }
  }, [fromInput, contentInput]);

  return (
    <>
      <NavigationBar />
      <S.Container>
        <FromContext.Provider value={{ fromInput, setFromInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">From.</p>
            <TextInput />
          </div>
        </FromContext.Provider>
        <ProfileContext.Provider value={{ profileInput, setProfileInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">프로필 이미지</p>
            <Profile />
          </div>
        </ProfileContext.Provider>
        <RelationshipContext.Provider
          value={{ relationshipInput, setRelationshipInput }}
        >
          <div className="section-container">
            <p className="text-title font-24-bold">상대와의 관계</p>
            <Dropdown type="select-reltaionship" />
          </div>
        </RelationshipContext.Provider>
        <ContentContext.Provider value={{ contentInput, setContentInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">내용을 입력해 주세요</p>
            <TextEditor />
          </div>
        </ContentContext.Provider>
        <FontContext.Provider value={{ fontInput, setFontInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">폰트 선택</p>
            <Dropdown type="select-font" />
          </div>
        </FontContext.Provider>
        <WideButton isActive={isActive} onClick={moveTo}>
          생성하기
        </WideButton>
      </S.Container>
    </>
  );
};

export default PostMessagePage;
