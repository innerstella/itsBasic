import CardStyle from "./Card.styles";

const Card = () => {
  const cardColor = [
    "--color-orange-200",
    "--color-purple-200",
    "--color-blue-200",
    "--color-green-200",
  ];

  return (
    <>
      {/* <img
        className="checkImg"
        src="/assets/post/Enabled.svg"
        alt="체크 표시"
      /> */}
      {cardColor.map((color, index) => (
        <CardStyle className="card" key={index} color={color} />
      ))}
    </>
  );
};

export default Card;
