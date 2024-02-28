import ButtonStyle from "./Button.styles";

const Button = ({ link, children }) => {
  return <ButtonStyle to={link}>{children}</ButtonStyle>;
};

export default Button;
