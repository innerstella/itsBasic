import { Link } from "react-router-dom";
import ButtonStyle from "./Button.style";

/**
 *
 * @description Button 컴포넌트에 전달될 props 객체
 * @property {string} link - 페이지 연결 링크
 * @property {string} children - 버튼에 있는 텍스트
 * @property {string} width - 버튼 길이. "short" 또는 "long"
 * @param {string} className - 버튼에 적용될 클래스 이름
 * @param {function} onClick - 버튼 클릭 시 실행되는 함수
 */
const Button = ({ link, children, width, className, onClick }) => {
  return (
    <ButtonStyle
      to={link}
      className="font-18-bold"
      width={width}
      onClick={onClick}
    >
      <Link to={link} className={`${className} font-18-bold`}>
        {children}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
