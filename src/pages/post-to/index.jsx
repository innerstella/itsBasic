import NavigationBar from "../../components/navigationBar/NavigationBar";
import PostToStyle from "./PostToPage.styles";
import Card from "./components/Card";
import Button from "../../components/button/Button";

const PostToPage = () => {
  // const [toggle, setToggle] = useState()
  return (
    <>
      <NavigationBar show="none" />
      <PostToStyle>
        <div className="container">
          <div>
            <p className="recipient-title font-24-bold">To.</p>
            <form className="recipient-input-form">
              <input
                className="recipient-input font-16-regular"
                placeholder="받는 사람 이름을 입력해 주세요."
              />
            </form>
          </div>
          <div className="background-container">
            <p className="text font-24-bold">배경화면을 선택해 주세요</p>
            <p className="sub-text font-16-regular">
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>
          </div>
          <div className="buttons">
            <button className="font-16-regular select">컬러</button>
            <button className="font-16-regular">이미지</button>
          </div>
          <div className="card-container">
            <Card />
          </div>
        </div>
      </PostToStyle>
      <Button>생성하기</Button>
    </>
  );
};

export default PostToPage;
