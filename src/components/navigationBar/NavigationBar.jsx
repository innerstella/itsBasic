import { Link } from "react-router-dom";
import NavContainer from "./NavigationBar.style";

const NavigationBar = ({ show }) => {
  return (
    <NavContainer show={show}>
      <div className="nav-container">
        <Link to="/" className="logo-container">
          <img
            className="logo-img"
            src="/assets/common/logo_icon.svg"
            alt="로고"
          />
          <p className="logo-text font-20-bold">Rolling</p>
        </Link>
        <Link to="/post" className="button">
          <button className="font-16-bold">롤링 페이퍼 만들기</button>
        </Link>
      </div>
    </NavContainer>
  );
};

export default NavigationBar;
