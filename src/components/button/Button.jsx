import ButtonStyle from "./Button.style";

const Button = ({ link, children, width, className }) => {
  return (
    <ButtonStyle to={link} className="font-18-bold" width={width}>
      <div className={className}>{children}</div>
    </ButtonStyle>
  );
};

export default Button;
