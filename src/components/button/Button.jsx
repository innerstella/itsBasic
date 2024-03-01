import ButtonStyle from "./Button.styles";

const Button = ({ link, children, width }) => {
  return (
    <ButtonStyle to={link} className="font-18-bold" width={width}>
      <div className="btn">{children}</div>
    </ButtonStyle>
  );
};

export default Button;