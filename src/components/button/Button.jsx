import { Link } from "react-router-dom";
import ButtonStyle from "./Button.style";

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
