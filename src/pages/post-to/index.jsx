import NavigationBar from "../../components/navigationBar/NavigationBar";
import PostToStyle from "./PostToPage.style";
import Card from "./components/Card";
import Button from "../../components/button/Button";
import { useState } from "react";

const PostToPage = () => {
  // input
  const [recipientName, setRecipientName] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleInputError = () => {
    recipientName ? setInputError(false) : setInputError(true);
  };

  // color & image
  const [ColorButtonClick, setColorButtonClick] = useState(true);
  const [ImageButtonClick, setImageButtonClick] = useState(false);

  const handleColorButtonClick = () => {
    setColorButtonClick(true);
    setImageButtonClick(false);
  };

  const handleImageButtonClick = () => {
    setColorButtonClick(false);
    setImageButtonClick(true);
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
              className={`font-16-regular ${ColorButtonClick ? "select" : ""}`}
              onClick={handleColorButtonClick}
            >
              컬러
            </button>
            <button
              className={`font-16-regular ${ImageButtonClick ? "select" : ""}`}
              onClick={handleImageButtonClick}
            >
              이미지
            </button>
          </div>
          <div className="card-container">
            <Card colorState={ColorButtonClick} imageState={ImageButtonClick} />
          </div>
        </div>
      </PostToStyle>
      <Button className={`btn ${recipientName ? "" : "disabled"}`}>
        생성하기
      </Button>
    </>
  );
};

export default PostToPage;
