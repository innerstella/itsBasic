import * as S from "./PostMessagePage.style";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import Profile from "./components/profile/Profile";
import Dropdown from "./components/dropdown/Dropdown";
import TextEditor from "./components/text-editor/TextEditor";
import TextInput from "./components/text-input/TextInput";
import WideButton from "./components/wide-button/WideButton";

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
  const { recipientId } = useParams();

  const [fromInput, setFromInput] = useState("");
  const [profileInput, setProfileInput] = useState(defaultProfileImage);
  const [relationshipInput, setRelationshipInput] = useState("지인");
  const [contentInput, setContentInput] = useState("");
  const [fontInput, setFontInput] = useState("Noto Sans");

  // '생성하기' 버튼은 비활성화 상태에 있다가 받는 사람 이름과 카드 내용이 있는 경우 활성화 됩니다.
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const moveTo = () => {
    if (isActive) {
      createPaper();
    }
  };

  useEffect(() => {
    if (fromInput.length > 0 && contentInput.length > 0) {
      setIsActive(true);
    }
  }, [fromInput, contentInput]);

  // 롤링 페이퍼 생성
  const createPaper = () => {
    fetch(
      `https://rolling-api.vercel.app/4-2/recipients/${recipientId}/messages/`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken":
            "DKImggmgrFWzXm5BRnmvDHUwtXfwhuK5AFAzBXVVRCYvNt5NKtrHDuOL6I69w4nZ",
        },
        body: JSON.stringify({
          team: "4-2",
          recipientId: recipientId,
          sender: fromInput,
          profileImageURL: profileInput,
          relationship: relationshipInput,
          content: contentInput,
          font: fontInput,
        }),
      }
    )
      .then(() => {
        navigate(`/post/${recipientId}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavigationBar />
      <S.Container>
        <FromContext.Provider value={{ fromInput, setFromInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">
              From. <span className="required">*</span>
            </p>
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
            <Dropdown type="select-relationship" />
          </div>
        </RelationshipContext.Provider>
        <ContentContext.Provider value={{ contentInput, setContentInput }}>
          <div className="section-container">
            <p className="text-title font-24-bold">
              내용을 입력해 주세요 <span className="required">*</span>
            </p>
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
