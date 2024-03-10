import { Link } from "react-router-dom";
import NavContainer, { NavButtonContainer } from "./NavigationBar.style";

//Theme
import ThemeToggle from "../../theme/ThemeToggle";
import { useTheme } from "../../context/themeProvider";
/**
 *
 * @description NavigationBar 컴포넌트에 전달될 props 객체
 * @property {string} show - 네비게이션바 우측에 롤링 페이퍼 만들기 버튼. "show"(보이게) 또는 "hide"(안보이게)
 */
const NavigationBar = ({ show }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <NavContainer show={"none"}>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo-img"
              src="/assets/common/logo_icon.svg"
              alt="로고"
            />
            <p className="logo-text font-20-bold">Rolling</p>
          </Link>
        </div>
        <NavButtonContainer>
          <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
            DarkMode
          </ThemeToggle>
          <Link to="/post" className="button">
            <button className="font-16-bold">롤링 페이퍼 만들기</button>
          </Link>
        </NavButtonContainer>
      </div>
    </NavContainer>
  );
};

export default NavigationBar;
