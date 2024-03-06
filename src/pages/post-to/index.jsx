import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../../components/navigationBar/NavigationBar";
import PostToStyle from "./PostToPage.style";
import Card from "./components/Card";
import Button from "../../components/button/Button";

const CARDCOLOR = ["beige", "purple", "blue", "green"];

const PostToPage = () => {
  const [recipientName, setRecipientName] = useState("");
  const [inputError, setInputError] = useState(false);
  const [cardColorChecks, setCardColorChecks] = useState(0);
  const [cardImageChecks, setCardImageChecks] = useState(0);
  const [cardImage, setCardImage] = useState([]);
  const [type, setType] = useState("color");

  const handleInputChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleInputError = () => {
    recipientName ? setInputError(false) : setInputError(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => {
        setCardImage(data.imageUrls);
      });
  }, []);

  //post
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

  const handleCardColorCheck = (index) => {
    setCardColorChecks(index);
  };
  const handleCardImageCheck = (index) => {
    setCardImageChecks(index);
  };

  return (
    <>
      <NavigationBar show="none" />
      <PostToStyle>
        <div className="container">
          <div>
            <p className="recipient-title font-24-bold">To.</p>
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
                  <p className="error-message font-12-regular">
                    값을 입력해주세요.
                  </p>
                </div>
              )}
            </form>
          </div>
          <div className="background-container">
            <p className="text font-24-bold">배경화면을 선택해 주세요</p>
            <p className="sub-text font-16-regular">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
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
            <Card
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
