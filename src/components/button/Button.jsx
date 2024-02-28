import ButtonStyle from "./Button.styles";

const Button = ({ link, children }) => {
  return (
    <ButtonStyle to={link} className="font-18-bold">
      {children}
    </ButtonStyle>
  );
};

export default Button;
