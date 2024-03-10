import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import PostToStyle from "./PostToPage.style";
import CardList from "./components/post-to-card/CardList";
import Button from "../../components/button/Button";

const CARDCOLOR = ["beige", "purple", "blue", "green"];

/**
 *
 * @description 롤링 페이퍼 생성 (/post/{id})
 */
const PostToPage = () => {
  // input 관련
  const [recipientName, setRecipientName] = useState("");
  const [inputError, setInputError] = useState(false);

  // card 관련
  const [cardColorChecks, setCardColorChecks] = useState(0);
  const [cardImageChecks, setCardImageChecks] = useState(0);
  const [cardImage, setCardImage] = useState([]);
  const [type, setType] = useState("color");

  const navigate = useNavigate();

  // input 값 변경 이벤트 핸들러
  const handleInputChange = (e) => {
    setRecipientName(e.target.value);
  };

  // input 값 변경 이벤트 핸들러
  const handleInputError = () => {
    recipientName ? setInputError(false) : setInputError(true);
  };

  // 카드 이미지 가져옴
  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => {
        setCardImage(data.imageUrls);
      });
  }, []);

  // 롤링페이퍼 생성
  const onSubmit = (e) => {
    e.preventDefault();
    const body =
      type === "color"
        ? { name: recipientName, backgroundColor: CARDCOLOR[cardColorChecks] }
        : {
            name: recipientName,
            backgroundColor: CARDCOLOR[cardColorChecks],
            backgroundImageURL: cardImage[cardImageChecks],
          };

    fetch("https://rolling-api.vercel.app/4-2/recipients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
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
                value={recipientName}
                onChange={handleInputChange}
                onBlur={handleInputError}
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
              onClick={() => {
                setType("color");
              }}
            >
              컬러
            </button>
            <button
              className={`font-16-regular ${type === "image" && "select"}`}
              onClick={() => {
                setType("image");
              }}
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
