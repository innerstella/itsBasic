import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import PostToStyle from "./PostToPage.style";
import CardList from "./components/post-to-card/CardList";
import Button from "../../components/button/Button";
import { COLOR_LIST } from "../../constant/list";
import { getBackgroundImages } from "../../api/background-images/getBackgroundImages";
import { postRecipients } from "../../api/recipients/postRecipients";

/**
 *
 * @description 롤링 페이퍼 생성 (/post/{id})
 */
const PostToPage = () => {
  // input 관련
  const recipientName = useRef("");
  const [inputError, setInputError] = useState(false);

  // card 관련
  const [cardColorChecks, setCardColorChecks] = useState(0);
  const [cardImageChecks, setCardImageChecks] = useState(0);
  const [cardImage, setCardImage] = useState([]);
  const [type, setType] = useState("color");

  const navigate = useNavigate();

  // input 값 변경 이벤트 핸들러
  const handleInputError = () => {
    recipientName ? setInputError(false) : setInputError(true);
  };

  // 카드 이미지 가져옴
  useEffect(() => {
    getBackgroundImages().then((data) => setCardImage(data.imageUrls));
  }, []);

  // 롤링페이퍼 생성
  const onSubmit = (e) => {
    e.preventDefault();

    const body =
      type === "color"
        ? {
            name: recipientName.current?.value,
            backgroundColor: COLOR_LIST[cardColorChecks],
          }
        : {
            name: recipientName.current?.value,
            backgroundColor: COLOR_LIST[cardColorChecks],
            backgroundImageURL: cardImage[cardImageChecks],
          };

    postRecipients(body)
      .then((data) => {
        if (data && data.id) {
          localStorage.setItem(`${data.id}-Post`, "Owner");
          navigate(`/post/${data.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  /**
   * @description 컬러카드에 체크이미지를 표시하는 핸들러
   * @param {number} index - 선택된 이미지의 인덱스
   */
  const handleCardColorCheck = (index) => {
    setCardColorChecks(index);
  };

  /**
   * @description 이미지카드에 체크이미지를 표시하는 핸들러
   * @param {number} index - 선택된 이미지의 인덱스
   */
  const handleCardImageCheck = (index) => {
    setCardImageChecks(index);
  };

  // 엔터 키를 눌렀을 때 생성하기 함수 호출
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        onSubmit(e);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress); // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    };
  }, []);

  return (
    <>
      <NavigationBar show="none" />
      <PostToStyle>
        <div className="container">
          <div>
            <h1 className="recipient-title font-24-bold">To.</h1>
            <form className="recipient-input-form">
              <input
                className={`recipient-input font-16-regular ${
                  inputError ? "error" : ""
                }`}
                placeholder="받는 사람 이름을 입력해 주세요."
                onBlur={handleInputError}
                ref={recipientName}
              />
              {inputError && (
                <div className="error-message-container">
                  <span className="error-message font-12-regular">
                    값을 입력해주세요.
                  </span>
                </div>
              )}
            </form>
          </div>
          <div className="background-container">
            <h1 className="text font-24-bold">배경화면을 선택해 주세요</h1>
            <span className="sub-text font-16-regular">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </span>
          </div>
          <div className="buttons">
            <button
              className={`font-16-regular ${type === "color" && "select"}`}
              onClick={() => setType("color")}
            >
              컬러
            </button>
            <button
              className={`font-16-regular ${type === "image" && "select"}`}
              onClick={() => setType("image")}
            >
              이미지
            </button>
          </div>
          <div className="card-container">
            <CardList
              type={type}
              cardColorChecks={cardColorChecks}
              cardImageChecks={cardImageChecks}
              handleCardColorCheck={handleCardColorCheck}
              handleCardImageCheck={handleCardImageCheck}
              cardImage={cardImage}
            />
          </div>
        </div>
      </PostToStyle>
      <Button
        className={`button ${recipientName ? "" : "disabled"}`}
        onClick={onSubmit}
      >
        생성하기
      </Button>
    </>
  );
};

export default PostToPage;
