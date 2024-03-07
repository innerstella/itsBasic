import { Link } from "react-router-dom";
import ButtonStyle from "./Button.style";

/**
 * Button 컴포넌트에 전달될 props 객체
 * @typedef {Object} ButtonProps
 * @property {string} link - 페이지 연결 링크
 * @property {string} children - 버튼에 있는 텍스트
 * @property {string} width - 버튼 길이. "short" 또는 "long"
 */

/**
 * Button 컴포넌트
 * @param {ButtonProps} props - Button 컴포넌트에 전달되는 props
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
