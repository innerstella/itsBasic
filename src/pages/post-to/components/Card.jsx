import CardListStyle from "./CardList.style";
import CardStyle from "./Card.style";

const Card = ({ colorState }) => {
  const CARDCOLOR = [
    "--color-orange-200",
    "--color-purple-200",
    "--color-blue-200",
    "--color-green-200",
  ];
  const CARDIMAGE = [
    "--color-orange-500",
    "--color-purple-500",
    "--color-blue-500",
    "--color-green-500",
  ];

  return (
    <CardListStyle>
      <img
        className="checkImg"
        src="/assets/post-to/Enabled.svg"
        alt="체크 표시"
      />
      {colorState === true
        ? CARDCOLOR.map((color, index) => (
            <CardStyle className="card card=color" key={index} color={color} />
          ))
        : CARDIMAGE.map((color, index) => (
            <CardStyle className="card card-image" key={index} color={color} />
          ))}
    </CardListStyle>
  );
};

export default Card;
