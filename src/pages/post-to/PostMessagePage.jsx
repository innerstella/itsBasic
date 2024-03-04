import * as S from "./PostMessagePage.style";
import { createContext, useState } from "react";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Button from "../../components/button/Button";
import Profile from "./components/profile/Proifle";
import Dropdown from "./components/dropdown/Dropdown";
import TextEditor from "./components/text-editor/TextEditor";

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
  const [profileInput, setProfileInput] = useState("친구");
  const [relationshipInput, setRelationshipInput] = useState();
  const [contentInput, setContentInput] = useState();
  const [fontInput, setFontInput] = useState();

  return (
    <>
      <NavigationBar />
      <S.Container>
        <div className="section-container">
          <p className="text-title font-24-bold">From.</p>
          <div className="recipient-input-form">
            <input
              className="recipient-input font-16-regular"
              placeholder="이름을 입력해 주세요."
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
            />
          </div>
        </div>
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
      </S.Container>
      <Button>생성하기</Button>
    </>
  );
};

export default PostMessagePage;
