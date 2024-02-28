import { Link } from "react-router-dom";
import NavContainer from "./NavigationBar.styles";

const NavigationBar = () => {
  return (
    <NavContainer>
      <Link to="/" className="logo-container">
        <img
          className="logo-img"
          src="/assets/common/logo_icon.svg"
          alt="로고"
        />
        <p className="logo-text">Rolling</p>
      </Link>
      <Link to="/post" className="button">
        <button>롤링 페이퍼 만들기</button>
      </Link>
    </NavContainer>
  );
};

export default NavigationBar;
